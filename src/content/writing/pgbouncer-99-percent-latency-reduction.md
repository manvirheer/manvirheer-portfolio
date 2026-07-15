---
title: 'How I Reduced Database Latency by 99.4%'
subtitle: 'A practical guide to PgBouncer connection pooling'
date: '2025-10-15'
readTime: '8 min'
tags: ['PostgreSQL', 'Performance', 'Infrastructure']
excerpt: 'Connection pooling transformed our database performance from 329ms to 2ms per connection. Here is exactly how I did it, including the benchmarking methodology.'
---

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

```bash
# Run 100 connection tests
for i in {1..100}; do
  time psql -h localhost -c "SELECT 1"
done
```

Baseline results:
- Average connection time: **329ms**
- p99 connection time: **412ms**
- Max concurrent connections before degradation: **~50**

### Step 2: PgBouncer Configuration

The key configuration decisions:

```ini
[pgbouncer]
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 20
min_pool_size = 5
reserve_pool_size = 5

# Authentication
auth_type = md5
auth_file = /etc/pgbouncer/userlist.txt
```

**Why transaction mode?** In transaction pooling, connections are assigned per-transaction rather than per-session. This provides the best connection reuse for typical web applications where requests are short-lived.

### Step 3: Application Changes

The application needed minimal changes—just point to PgBouncer instead of PostgreSQL directly:

```typescript
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
```

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
- Prepared statements (unless you configure `prepared_statements = yes`)
- Session-level settings (`SET` commands)
- Advisory locks

We had to audit our codebase for these patterns before deploying.

### 3. Documentation is Part of the Deliverable

I created runbooks for:
- How to monitor PgBouncer (`SHOW POOLS`, `SHOW STATS`)
- How to run the benchmark suite
- Troubleshooting common issues

This ensures the next engineer can maintain and improve the system.

## Conclusion

Connection pooling is one of those optimizations with an outsized impact-to-effort ratio. A few hours of configuration yielded a 99.4% latency reduction that improves every database operation in the system.

The key is approaching it systematically: measure first, understand the tradeoffs, and document everything for the engineers who come after you.
