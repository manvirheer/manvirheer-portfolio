export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  date: string
  readTime: string
  tags: string[]
  excerpt: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'pgbouncer-99-percent-latency-reduction',
    title: 'How I Reduced Database Latency by 99.4%',
    subtitle: 'A practical guide to PgBouncer connection pooling',
    date: '2025-10-15',
    readTime: '8 min',
    tags: ['PostgreSQL', 'Performance', 'Infrastructure'],
    excerpt:
      'Connection pooling transformed our database performance from 329ms to 2ms per connection. Here is exactly how I did it, including the benchmarking methodology.',
    content: `
## The Problem

Every database query in our healthcare platform was paying a 329ms tax just to establish a connection. In a system where clinicians need real-time access to patient data, this latency was unacceptable.

The issue was straightforward: we were opening a new PostgreSQL connection for every request. Each connection involves TCP handshake, SSL negotiation, and PostgreSQL authentication. Multiply that by hundreds of concurrent users, and you have a performance bottleneck.

## Why Connection Pooling?

Connection pooling maintains a set of pre-established database connections that can be reused across requests. Instead of paying the connection overhead every time, you grab an existing connection from the pool, use it, and return it.

PgBouncer is a lightweight connection pooler for PostgreSQL. It sits between your application and database, managing connection lifecycle transparently.

## The Implementation

### Step 1: Baseline Measurement

Before optimizing anything, I needed numbers. I created a benchmarking script that measures:

- **Connection time**: How long to establish a new connection
- **Query execution**: Time for actual database operations
- **Concurrent load**: Performance under realistic multi-user scenarios

\`\`\`bash
# Run 100 connection tests
for i in {1..100}; do
  time psql -h localhost -c "SELECT 1"
done
\`\`\`

Baseline results:
- Average connection time: **329ms**
- p99 connection time: **412ms**
- Max concurrent connections before degradation: **~50**

### Step 2: PgBouncer Configuration

The key configuration decisions:

\`\`\`ini
[pgbouncer]
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 20
min_pool_size = 5
reserve_pool_size = 5

# Authentication
auth_type = md5
auth_file = /etc/pgbouncer/userlist.txt
\`\`\`

**Why transaction mode?** In transaction pooling, connections are assigned per-transaction rather than per-session. This provides the best connection reuse for typical web applications where requests are short-lived.

### Step 3: Application Changes

The application needed minimal changes—just point to PgBouncer instead of PostgreSQL directly:

\`\`\`typescript
// Before
const pool = new Pool({
  host: 'postgres.internal',
  port: 5432
})

// After
const pool = new Pool({
  host: 'pgbouncer.internal',
  port: 6432
})
\`\`\`

## The Results

After deployment:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Connection time | 329ms | 2ms | **99.4%** |
| Concurrent capacity | 50 | 280+ | **458%** |
| Throughput (qps) | baseline | +6.3% | - |
| Complex queries | baseline | 13% faster | - |

The 2ms connection time is essentially just the network round-trip to PgBouncer. The actual PostgreSQL connection is already established and waiting.

## Lessons Learned

### 1. Measure Before You Optimize

Without baseline numbers, I couldn't have quantified the improvement or justified the infrastructure change. The benchmarking script became a permanent part of our toolkit.

### 2. Transaction Mode Has Tradeoffs

Transaction pooling breaks certain PostgreSQL features:
- Prepared statements (unless you configure \`prepared_statements = yes\`)
- Session-level settings (\`SET\` commands)
- Advisory locks

We had to audit our codebase for these patterns before deploying.

### 3. Documentation is Part of the Deliverable

I created runbooks for:
- How to monitor PgBouncer (\`SHOW POOLS\`, \`SHOW STATS\`)
- How to run the benchmark suite
- Troubleshooting common issues

This ensures the next engineer can maintain and improve the system.

## Conclusion

Connection pooling is one of those optimizations with an outsized impact-to-effort ratio. A few hours of configuration yielded a 99.4% latency reduction that improves every database operation in the system.

The key is approaching it systematically: measure first, understand the tradeoffs, and document everything for the engineers who come after you.
`,
  },
  {
    slug: 'building-production-rag-systems',
    title: 'Building Production RAG Systems',
    subtitle: 'Lessons from deploying AI in healthcare',
    date: '2025-10-28',
    readTime: '12 min',
    tags: ['AI/ML', 'RAG', 'LlamaIndex', 'Python'],
    excerpt:
      'How I built a RAG system that transforms 1,578 exercises into personalized rehabilitation plans. Practical insights on hybrid search, prompt engineering, and production deployment.',
    content: `
## What We Built

An AI-powered exercise plan generator for healthcare professionals. Input a natural language query like "shoulder exercises for post-surgery recovery, week 2" and receive a structured rehabilitation plan with specific exercises, sets, reps, and safety considerations.

The core challenge: transform 1,578 static exercises in a database into an intelligent, queryable system that understands context, constraints, and clinical requirements.

## Why RAG?

Retrieval-Augmented Generation (RAG) combines the knowledge retrieval capabilities of search systems with the natural language generation of LLMs. Instead of fine-tuning a model on our exercise data (expensive, inflexible), we:

1. Store exercises in a vector database
2. Retrieve relevant exercises based on the query
3. Use an LLM to synthesize a coherent plan from the retrieved context

This approach lets us update the exercise database without retraining, maintain transparency about which exercises informed the plan, and leverage the reasoning capabilities of modern LLMs.

## Technical Architecture

\`\`\`
User Query
  → Constraint Detection (injuries, goals, restrictions)
  → Hybrid Search (70% semantic + 30% keyword)
  → Context Preparation (top 15 exercises)
  → LLM Generation (structured prompts)
  → Structured Output (exercise plan with sets/reps/notes)
\`\`\`

### The Stack

**Backend:**
- Python 3.11 + FastAPI
- LlamaIndex (RAG framework)
- Qdrant (vector database)
- OpenAI GPT-4o-mini (generation)
- BAAI/bge-small-en-v1.5 (embeddings)

**Frontend:**
- Next.js 15 + React 19
- TypeScript
- Tailwind CSS

**Infrastructure:**
- Docker Compose (3 services)
- Fully containerized development and deployment

## Key Technical Decisions

### 1. Hybrid Search Over Pure Semantic

Pure semantic search finds conceptually similar content but can miss exact matches. For exercise retrieval, both matter:

- "shoulder exercises" should find exercises tagged with "shoulder" (keyword match)
- "exercises for rotator cuff recovery" should find related shoulder exercises even if they don't mention "rotator cuff" (semantic match)

We settled on 70% semantic, 30% keyword weighting after testing various ratios.

\`\`\`python
from llama_index.core.retrievers import QueryFusionRetriever

retriever = QueryFusionRetriever(
    retrievers=[vector_retriever, bm25_retriever],
    weights=[0.7, 0.3],
    top_k=15
)
\`\`\`

### 2. Context Window Optimization

Initially, we retrieved 25 exercises and stuffed them all into the prompt. This caused two problems:

1. **Token limits**: GPT-4o-mini has context limits, and verbose exercise descriptions ate through them quickly
2. **Parse errors**: With too much context, the LLM would sometimes generate malformed JSON

Reducing to 15 exercises with concise formatting solved both issues while maintaining plan quality.

### 3. Structured Output with Validation

Healthcare applications can't tolerate malformed responses. We use structured prompting with explicit JSON schema requirements:

\`\`\`python
SYSTEM_PROMPT = """
You are an exercise plan generator. Output MUST be valid JSON matching this schema:
{
  "exercises": [
    {
      "name": "string",
      "sets": number,
      "reps": "string",
      "notes": "string",
      "contraindications": ["string"]
    }
  ],
  "safety_notes": ["string"],
  "progression_guidance": "string"
}
"""
\`\`\`

Plus validation on the backend that retries with clearer instructions if parsing fails.

### 4. Constraint Detection

The query "shoulder exercises, but I had rotator cuff surgery last month" contains an implicit constraint: avoid exercises that stress the rotator cuff in early recovery.

We implemented a constraint detection layer that extracts:
- **Injuries**: current or past conditions
- **Goals**: strength, flexibility, pain reduction
- **Restrictions**: equipment limitations, time constraints
- **Progression stage**: acute, subacute, maintenance

These constraints filter and modify the retrieval and generation steps.

## Production Considerations

### Latency

Healthcare professionals need responsive tools. Our target was <3 seconds for plan generation. We achieved this through:

- Qdrant's efficient vector search (~50ms for 1,578 exercises)
- Streaming responses to show progress
- Aggressive caching of embedding computations

### Observability

Every query logs:
- Retrieved exercise IDs (for debugging relevance)
- Detected constraints
- Token usage
- Generation time
- Any parse errors or retries

This lets us identify patterns in failed queries and improve the system iteratively.

### Safety

Healthcare AI requires extra caution. We implemented:
- Clear disclaimers that this is a tool to assist professionals, not replace clinical judgment
- Contraindication flags on exercises
- Logging for audit trails
- No patient data in the RAG system itself

## What I Learned

### LlamaIndex vs. LangChain

I chose LlamaIndex for its cleaner RAG primitives. LangChain is more general-purpose but felt overcomplicated for pure retrieval workflows. LlamaIndex's abstractions mapped more directly to what I was building.

### Documentation as Product

I created 40+ KB of documentation across 6 focused documents:
- System overview for onboarding
- Search system deep-dive
- LLM integration details
- API architecture
- Frontend design philosophy
- Deployment runbook

This wasn't just for handoff—writing the docs clarified my own thinking and caught design issues early.

### The "Last Mile" is Hardest

Getting a RAG prototype working took a few days. Getting it production-ready—with proper error handling, observability, edge case handling, and documentation—took weeks. Budget accordingly.

## Conclusion

RAG systems are deceptively simple in concept but require careful attention to retrieval quality, prompt engineering, and production operations. The payoff is a system that can leverage your domain data with the reasoning capabilities of modern LLMs.

For healthcare specifically, the combination of transparent retrieval (you can see which exercises informed the plan) and structured output (validated JSON) makes RAG a compelling approach over black-box fine-tuned models.
`,
  },
  {
    slug: 'git-hooks-at-scale',
    title: 'Implementing Git Hooks Across 5+ Repositories',
    subtitle: 'Standardizing code quality without slowing down developers',
    date: '2025-06-15',
    readTime: '6 min',
    tags: ['DevOps', 'Git', 'CI/CD', 'Developer Experience'],
    excerpt:
      'How I rolled out consistent commit conventions and pre-push checks across multiple repositories without breaking developer workflows.',
    content: `
## The Problem

Our engineering team worked across 5+ repositories with inconsistent commit messages, varying code quality checks, and no standardized pre-push validation. This led to:

- CI failures that could have been caught locally
- Commit history that was hard to parse
- Inconsistent code style across projects

The challenge: implement standards without creating friction that slows down development.

## The Solution: Lefthook

After evaluating Husky, pre-commit, and Lefthook, I chose Lefthook for:

- **Speed**: Parallel hook execution
- **Simplicity**: Single YAML config file
- **Cross-platform**: Works on macOS, Linux, Windows
- **No dependencies**: Single binary, no Node/Python required for the hook runner

## Implementation Strategy

### Phase 1: Commit Message Convention

Start with the lowest-friction change. We adopted Conventional Commits:

\`\`\`
type(scope): description

# Examples:
feat(auth): add OAuth2 login flow
fix(api): handle null response from payment service
docs(readme): update installation instructions
\`\`\`

The Lefthook config:

\`\`\`yaml
# lefthook.yml
commit-msg:
  commands:
    validate:
      run: |
        if ! grep -qE "^(feat|fix|docs|style|refactor|test|chore)(\\(.+\\))?: .+" "$1"; then
          echo "Invalid commit message format"
          echo "Expected: type(scope): description"
          exit 1
        fi
\`\`\`

This validates the message format but doesn't block developers from committing—just warns them.

### Phase 2: Pre-Push Checks

Once teams were comfortable with commit conventions, I added pre-push hooks:

\`\`\`yaml
pre-push:
  parallel: true
  commands:
    lint:
      run: npm run lint
      fail_text: "Linting failed. Run 'npm run lint:fix' to auto-fix issues."

    typecheck:
      run: npm run typecheck
      fail_text: "Type errors found. Fix before pushing."

    test:
      run: npm run test:unit
      fail_text: "Unit tests failed."
\`\`\`

Key decisions:
- **Parallel execution**: Run lint, typecheck, and tests simultaneously
- **Clear failure messages**: Tell developers exactly how to fix issues
- **Unit tests only**: Full test suite runs in CI; pre-push is for fast feedback

### Phase 3: Repository-Specific Customization

Each repository had different needs:

**Python repos:**
\`\`\`yaml
pre-push:
  commands:
    lint:
      run: ruff check .
    typecheck:
      run: mypy .
\`\`\`

**TypeScript repos:**
\`\`\`yaml
pre-push:
  commands:
    lint:
      run: eslint . --ext .ts,.tsx
    typecheck:
      run: tsc --noEmit
\`\`\`

**Rust repos:**
\`\`\`yaml
pre-push:
  commands:
    lint:
      run: cargo clippy -- -D warnings
    test:
      run: cargo test
\`\`\`

## Rollout Strategy

### Week 1-2: Opt-in

- Added Lefthook config to all repos
- Documented in README
- Announced in team Slack
- No enforcement—developers could skip with \`--no-verify\`

### Week 3-4: Soft Enforcement

- Enabled hooks by default on fresh clones
- Added CI check that warns (but doesn't fail) on non-conventional commits
- Gathered feedback on pain points

### Week 5+: Full Enforcement

- CI fails on non-conventional commits
- Pre-push hooks required (can still bypass with \`--no-verify\` for emergencies)
- Documented the "emergency bypass" process for legitimate cases

## Results

- **CI failure rate dropped 34%**: Issues caught locally before push
- **Commit history became parseable**: Can now auto-generate changelogs
- **Onboarding improved**: New developers get instant feedback on conventions

## Lessons Learned

### 1. Start with Low Friction

Commit message validation is nearly free—it runs in milliseconds and doesn't block anything. This built goodwill before adding heavier checks.

### 2. Make Bypass Possible

Developers need escape hatches for legitimate edge cases. \`--no-verify\` exists for a reason. The goal is guidance, not authoritarianism.

### 3. Customize Per-Repository

A monolithic config that applies everywhere will frustrate everyone. Each repo has different languages, test suites, and performance characteristics.

### 4. Communicate Relentlessly

Every change was announced, documented, and explained. "Here's what changed, here's why, here's how to adapt."

## Conclusion

Git hooks are a powerful tool for shifting quality checks left—catching issues before they hit CI or code review. The key is rolling them out gradually, providing clear feedback, and respecting developer autonomy.

The investment in standardization pays dividends every time someone reads a commit log, every CI minute saved, and every code review that doesn't start with "please fix the linting errors."
`,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
