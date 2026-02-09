# TVPR - Verified Professional Registry

Independent certification authority for professional credentials.

## Architecture

- **Frontend**: Next.js 14 (App Router)
- **Hosting**: Vercel
- **Database**: Supabase (shared with Top10Lists.us)
- **Domain**: tvpr.us

## Environment Variables

Create `.env.local` with:

```
NEXT_PUBLIC_SUPABASE_URL=https://wiotrvoirdgzfacuuiem.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Development

```bash
npm install
npm run dev
```

## Deployment

1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

## URL Structure

- `/` - Registry homepage
- `/certification/{id}` - Certification artifact page

## Key Principles

- Server-rendered for SEO and AI crawlability
- Minimal, institutional design
- Machine-readable JSON-LD schemas
- Read-only access to Supabase
- No marketing, no CTAs, no agent onboarding
- Pure authority layer
