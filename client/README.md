# Aksara Client

React (or Next.js) frontend for Aksara.

## Tech Stack

- Framework: Next.js (adjust if different)
- Language: TypeScript
- Styling: Tailwind CSS (if used)
- State/Data: React Query / Context / Redux (specify)
- API: REST/GraphQL to Aksara backend

## Prerequisites

- Node.js LTS
- pnpm (or npm / yarn)

## Setup

```bash
git clone <repo-url>
cd aksara/client
pnpm install
```

## Development

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm start      # run built app
pnpm lint       # lint
pnpm test       # tests
```

## Environment

Create `.env.local`:

```
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NEXT_PUBLIC_SENTRY_DSN=
```

## Structure

```
/src
 /components
 /pages (or /app)
 /lib
 /hooks
 /types
 /styles
```

## Contributing

Use feature branches. Run lint and tests before PR.

## License

Add project license reference.

## Notes

Replace placeholders with actual stack details.
