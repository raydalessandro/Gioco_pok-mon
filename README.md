# AI Pokémon Battle Arena
Next.js 14 (App Router) + TypeScript + Tailwind. API serverless su Vercel come proxy verso DeepSeek (`/v1/chat/completions`-compatibile).

## Setup
1) Copia `.env.local.example` in `.env.local` e inserisci `DEEPSEEK_API_KEY`.
2) `npm i`
3) `npm run dev`

## Deploy
Collega il repo a Vercel e imposta `DEEPSEEK_API_KEY` nelle Environment Variables.
