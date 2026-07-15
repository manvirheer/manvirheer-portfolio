---
title: 'Building Production RAG Systems'
subtitle: 'Lessons from deploying AI in healthcare'
date: '2025-10-28'
readTime: '12 min'
tags: ['AI/ML', 'RAG', 'LlamaIndex', 'Python']
excerpt: 'How I built a RAG system that transforms 1,578 exercises into personalized rehabilitation plans. Practical insights on hybrid search, prompt engineering, and production deployment.'
---

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

```
User Query
  → Constraint Detection (injuries, goals, restrictions)
  → Hybrid Search (70% semantic + 30% keyword)
  → Context Preparation (top 15 exercises)
  → LLM Generation (structured prompts)
  → Structured Output (exercise plan with sets/reps/notes)
```

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

```python
from llama_index.core.retrievers import QueryFusionRetriever

retriever = QueryFusionRetriever(
    retrievers=[vector_retriever, bm25_retriever],
    weights=[0.7, 0.3],
    top_k=15
)
```

### 2. Context Window Optimization

Initially, we retrieved 25 exercises and stuffed them all into the prompt. This caused two problems:

1. **Token limits**: GPT-4o-mini has context limits, and verbose exercise descriptions ate through them quickly
2. **Parse errors**: With too much context, the LLM would sometimes generate malformed JSON

Reducing to 15 exercises with concise formatting solved both issues while maintaining plan quality.

### 3. Structured Output with Validation

Healthcare applications can't tolerate malformed responses. We use structured prompting with explicit JSON schema requirements:

```python
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
```

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
