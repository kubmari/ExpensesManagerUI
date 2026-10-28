# Expenses Manager UI

A React app for managing expenses.

## Tech stack

- [React](https://react.dev) + TypeScript
- [Vite](https://vite.dev) (with React Compiler)
- [MUI](https://mui.com/material-ui/) (Material UI)
- [Oxlint](https://oxc.rs) for linting

## Requirements

- Node.js `20.19+` or `22.12+`
- npm (comes with Node.js)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (by default http://localhost:5173).

## Commands

| Command           | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm install`     | Install dependencies (run once after cloning).                     |
| `npm run dev`     | Start the dev server with hot reload.                              |
| `npm run build`   | Type-check with TypeScript and build for production into `dist/`. |
| `npm run preview` | Serve the production build from `dist/` locally.                   |
| `npm run lint`    | Check the code with Oxlint.                                        |

## Project structure

```
src/
├── app/          # app-wide setup (e.g. MUI theme in theme.ts)
├── components/   # reusable UI components
├── contexts/     # React context providers
├── hooks/        # custom React hooks
├── pages/        # page-level components (whole screens)
├── utils/        # helper functions
├── App.tsx       # root component
└── main.tsx      # entry point, renders App
```

## Import alias

`@/` points to `src/`, so you can import without long relative paths:

```ts
import { theme } from '@/app/theme'
```

The alias is defined in `tsconfig.app.json` (`paths`), and Vite reads it via `resolve.tsconfigPaths` in `vite.config.ts`.
