# Product Explorer

A responsive single-page application built with React that fetches, searches, and filters product data from the Fake Store API.

## Features

- Fetch products from the Fake Store API
- Search products by title
- Filter products by category
- Dynamic category generation
- Loading, error, and empty states
- Fully responsive layout

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- Native Fetch API
- Google Fonts (Fraunces, Inter, JetBrains Mono)

## Folder Structure

```text
src/
├── components/
├── hooks/
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The application runs on:

```text
http://localhost:5173
```

## Performance Optimizations

- Search input is debounced by 200ms.
- Derived data is memoized with `useMemo`.
- Event handlers are memoized with `useCallback`.
- `ProductCard` and `ProductGrid` are wrapped with `React.memo`.

## Challenges & Solutions

### Avoiding unnecessary re-renders

**Challenge:**
Typing in the search input could trigger many renders.

**Solution:**
Used debouncing, `useMemo`, `useCallback`, and `React.memo` to minimize unnecessary renders.

### Dynamic categories

**Challenge:**
Category names should adapt to API changes.

**Solution:**
Generated categories dynamically using a `Set` instead of hardcoding values.

### Preventing layout shift

**Challenge:**
The UI jumps when data finishes loading.

**Solution:**
Created `SkeletonCard` components that match the dimensions of `ProductCard`.

## Live Demo

Deployed with Vercel.
https://product-explorer-eta.vercel.app/
