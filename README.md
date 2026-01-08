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

This template includes a professional Redux Toolkit setup with RTK Query for state management and API integration:

- **Redux Store**: Centralized state management with type safety
- **RTK Query**: Advanced data fetching and caching solution
- **Authentication Slice**: User authentication state management
- **UI Slice**: Theme and UI state management
- **API Integration**: Automatic caching, background refetching, and request deduplication

### Folder Structure

```
├── redux/
│   ├── features/
│   │   ├── api/
│   │   │   ├── baseApi.ts      # Base API configuration
│   │   │   └── auth/
│   │   │       └── authApi.ts  # Authentication API endpoints
│   │   └── slice/
│   │       ├── authSlice.ts    # Authentication state
│   │       └── uiSlice.ts      # UI state (theme, language)
│   └── store/
│       ├── store.ts          # Main store configuration
│       └── hooks.ts          # Typed hooks for useSelector/dispatch
├── hooks/
│   ├── useAuth.ts            # Authentication hook
│   └── useTheme.ts           # Theme management hook
└── providers/
    └── ReduxProvider.tsx     # Redux Provider wrapper
```

### Professional Implementation

The Redux setup includes:

1. **Typed Store Configuration** (`redux/store/store.ts`):

```typescript
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/slice/authSlice";
import uiReducer from "../features/slice/uiSlice";
import { baseApi } from "../features/api/baseApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
```

2. **RTK Query API Integration** (`redux/features/api/baseApi.ts`):

```typescript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Products"],
  endpoints: () => ({}),
});
```

3. **Authentication Slice** (`redux/features/slice/authSlice.ts`):

```typescript
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});
```

4. **Wrapped in Provider** (`app/layout.tsx`):

The Redux store is automatically wrapped around the entire application through the root layout.

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
