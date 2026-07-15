---
title: 'Implementing Git Hooks Across 5+ Repositories'
subtitle: 'Standardizing code quality without slowing down developers'
date: '2025-06-15'
readTime: '6 min'
tags: ['DevOps', 'Git', 'CI/CD', 'Developer Experience']
excerpt: 'How I rolled out consistent commit conventions and pre-push checks across multiple repositories without breaking developer workflows.'
---

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

```
type(scope): description

# Examples:
feat(auth): add OAuth2 login flow
fix(api): handle null response from payment service
docs(readme): update installation instructions
```

The Lefthook config:

```yaml
# lefthook.yml
commit-msg:
  commands:
    validate:
      run: |
        if ! grep -qE "^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .+" "$1"; then
          echo "Invalid commit message format"
          echo "Expected: type(scope): description"
          exit 1
        fi
```

This validates the message format but doesn't block developers from committing—just warns them.

### Phase 2: Pre-Push Checks

Once teams were comfortable with commit conventions, I added pre-push hooks:

```yaml
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
```

Key decisions:
- **Parallel execution**: Run lint, typecheck, and tests simultaneously
- **Clear failure messages**: Tell developers exactly how to fix issues
- **Unit tests only**: Full test suite runs in CI; pre-push is for fast feedback

### Phase 3: Repository-Specific Customization

Each repository had different needs:

**Python repos:**
```yaml
pre-push:
  commands:
    lint:
      run: ruff check .
    typecheck:
      run: mypy .
```

**TypeScript repos:**
```yaml
pre-push:
  commands:
    lint:
      run: eslint . --ext .ts,.tsx
    typecheck:
      run: tsc --noEmit
```

**Rust repos:**
```yaml
pre-push:
  commands:
    lint:
      run: cargo clippy -- -D warnings
    test:
      run: cargo test
```

## Rollout Strategy

### Week 1-2: Opt-in

- Added Lefthook config to all repos
- Documented in README
- Announced in team Slack
- No enforcement—developers could skip with `--no-verify`

### Week 3-4: Soft Enforcement

- Enabled hooks by default on fresh clones
- Added CI check that warns (but doesn't fail) on non-conventional commits
- Gathered feedback on pain points

### Week 5+: Full Enforcement

- CI fails on non-conventional commits
- Pre-push hooks required (can still bypass with `--no-verify` for emergencies)
- Documented the "emergency bypass" process for legitimate cases

## Results

- **CI failure rate dropped 34%**: Issues caught locally before push
- **Commit history became parseable**: Can now auto-generate changelogs
- **Onboarding improved**: New developers get instant feedback on conventions

## Lessons Learned

### 1. Start with Low Friction

Commit message validation is nearly free—it runs in milliseconds and doesn't block anything. This built goodwill before adding heavier checks.

### 2. Make Bypass Possible

Developers need escape hatches for legitimate edge cases. `--no-verify` exists for a reason. The goal is guidance, not authoritarianism.

### 3. Customize Per-Repository

A monolithic config that applies everywhere will frustrate everyone. Each repo has different languages, test suites, and performance characteristics.

### 4. Communicate Relentlessly

Every change was announced, documented, and explained. "Here's what changed, here's why, here's how to adapt."

## Conclusion

Git hooks are a powerful tool for shifting quality checks left—catching issues before they hit CI or code review. The key is rolling them out gradually, providing clear feedback, and respecting developer autonomy.

The investment in standardization pays dividends every time someone reads a commit log, every CI minute saved, and every code review that doesn't start with "please fix the linting errors."
