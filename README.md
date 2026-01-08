# Next.js 16 Template with TypeScript and Redux

A modern Next.js 16 template featuring TypeScript, Redux Toolkit, Tailwind CSS, and essential configurations for scalable applications.

## Features

- **Next.js 16** - Latest Next.js framework with App Router
- **React 19** - Latest React features and improvements
- **TypeScript** - Type-safe development
- **Redux Toolkit** - State management solution
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Admin Dashboard Layout** - Pre-built admin interface with sidebar and navbar
- **Responsive Design** - Mobile-first responsive components
- **Dark Mode Support** - Automatic dark/light theme switching

## Prerequisites

- Node.js 18+ (recommended)
- npm, yarn, or pnpm package manager

## Getting Started

### Installation

1. Clone or download this template
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build & Production

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (adminDashboard)/   # Admin dashboard routes
│   │   └── admin-dashboard/
│   │       ├── users/      # User management
│   │       ├── layout.tsx  # Admin layout
│   │       └── page.tsx    # Admin dashboard home
│   ├── (landingPage)/      # Public landing page
│   ├── globals.css         # Global styles and CSS variables
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
│   └── layout/admin/       # Admin layout components
├── public/                 # Static assets
├── store/                  # Redux store (to be added)
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions
├── README.md
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
```

## Redux Setup

This template includes Redux Toolkit for state management. To set up Redux:

1. Create a store in `store/index.ts`:

```typescript
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

2. Create API slices for data fetching:

```typescript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["User", "Post"],
  endpoints: (builder) => ({
    // Define your endpoints here
  }),
});
```

3. Wrap your app with Provider in `app/layout.tsx`:

```tsx
"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
```

## Color Variables

This template includes a comprehensive set of CSS variables for consistent theming:

### Light Theme

- `--bg-primary`: #f0f9ff (Primary background)
- `--bg-secondary`: #f3f4f6 (Secondary background)
- `--bg-accent`: #fef3c7 (Accent background)
- `--bg-success`: #d1fae5 (Success background)
- `--bg-warning`: #fef3c7 (Warning background)
- `--bg-error`: #fee2e2 (Error background)
- `--bg-muted`: #f9fafb (Muted background)
- `--bg-card`: #ffffff (Card background)
- `--bg-popover`: #ffffff (Popover background)
- `--bg-border`: #e5e7eb (Border background)
- `--bg-input`: #f9fafb (Input background)
- `--bg-button`: #3b82f6 (Button background)
- `--bg-button-hover`: #2563eb (Button hover background)

### Dark Theme

- `--bg-primary`: #1e293b (Primary background)
- `--bg-secondary`: #334155 (Secondary background)
- `--bg-accent`: #92400e (Accent background)
- `--bg-success`: #166534 (Success background)
- `--bg-warning`: #854d0e (Warning background)
- `--bg-error`: #7f1d1d (Error background)

## Admin Dashboard

The template includes a pre-built admin dashboard with:

- Responsive sidebar navigation
- Top navigation bar
- Mobile-friendly menu toggle
- Dark mode support
- Layout persistence

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Database Configuration
DATABASE_URL="your_database_url_here"

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET="your_secret_here"
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Other Platforms

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for other platforms.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue in the repository.
