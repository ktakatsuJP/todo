# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Type-check + production build
npm run lint      # ESLint
npm run preview   # Preview production build
```

## Architecture

Single-page TODO app built with React 19 + TypeScript + Vite. Data persists in `localStorage` under the key `"todos"`.

**Data flow:**
- `src/types.ts` — `Todo` interface and `FilterType` union
- `src/hooks/useTodos.ts` — all state and CRUD logic; syncs to `localStorage` on every change
- `src/App.tsx` — filter state lives here; computes filtered/count views and passes callbacks down
- `src/components/` — three presentational components: `TodoInput`, `TodoItem`, `TodoFilter`

**Edit-in-place:** double-click a task label to enter edit mode. Enter commits; Escape cancels; empty text deletes the item.
