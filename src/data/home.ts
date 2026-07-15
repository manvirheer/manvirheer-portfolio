// Static homepage data. Kept as plain arrays (not the content collection) to
// preserve the exact display strings and the LATEST masthead derivation.

export interface WorkItem {
  date: string;
  title: string;
  metric: string;
  body: string;
}

export interface Project {
  name: string;
  href: string | null;
  desc: string;
}

export interface WritingItem {
  date: string;
  title: string;
  readTime: string;
  subtitle: string;
  href: string;
}

export const work: WorkItem[] = [
  {
    date: '2025',
    title: 'Production RAG platform on Kubernetes',
    metric: 'EKS · Bedrock',
    body: 'Architected and deployed a HIPAA-compliant RAG platform on Kubernetes (FastAPI, Qdrant), with LLM serving on AWS Bedrock and self-hosted models. Own the orchestration, autoscaling, and rollouts at Tenzr Health.',
  },
  {
    date: '2025',
    title: 'Database connection pooling',
    metric: '329ms → 2ms',
    body: 'Added PgBouncer connection pooling to the same platform. Connection capacity went up 458%. Wrote the benchmark tool and documentation so the results can be reproduced.',
  },
  {
    date: '2024',
    title: 'Marketplace performance',
    metric: '20s → 2s',
    body: "Fixed slow page loads on A2P Energy's marketplace with query optimization and eager loading. Also built a shift-logging system with role-based access and a bilingual interface for industrial users.",
  },
  {
    date: '2021–23',
    title: 'Azure deployment automation',
    metric: '−40% deploy time',
    body: 'Wrote 15+ automation scripts for Azure cloud deployments at SaaSberry, cutting deployment time by 40%. Configured Azure B2C tenants and App Services for government-compliance clients.',
  },
];

export const projects: Project[] = [
  { name: 'Tenzr Oracle', href: null, desc: 'plain-English questions to governed SQL, on EKS' },
  {
    name: 'PickMyElective',
    href: 'https://github.com/manvirheer/pickmyelective',
    desc: 'RAG search over 1,200+ university courses',
  },
  {
    name: 'Whisper Typer',
    href: 'https://github.com/manvirheer/whisper-typer',
    desc: 'voice typing on AMD/Linux via Vulkan',
  },
  {
    name: 'nx-logstats',
    href: 'https://github.com/manvirheer/nx-logstats',
    desc: 'NGINX log analysis CLI',
  },
  {
    name: 'Vancouver Parking Analysis',
    href: 'https://github.com/manvirheer/parkingticketanalysis',
    desc: 'geospatial analysis of ticket data',
  },
];

export const writing: WritingItem[] = [
  {
    date: '2025.10',
    title: 'Building Production RAG Systems',
    readTime: '12 min',
    subtitle: 'Lessons from deploying AI in healthcare',
    href: '/writing/building-production-rag-systems',
  },
  {
    date: '2025.10',
    title: 'How I Reduced Database Latency by 99.4%',
    readTime: '8 min',
    subtitle: 'A practical guide to PgBouncer connection pooling',
    href: '/writing/pgbouncer-99-percent-latency-reduction',
  },
  {
    date: '2025.06',
    title: 'Implementing Git Hooks Across 5+ Repositories',
    readTime: '6 min',
    subtitle: 'Standardizing code quality without slowing developers down',
    href: '/writing/git-hooks-at-scale',
  },
];
