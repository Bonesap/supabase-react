# My React App with Supabase

A modern web application built with React, TypeScript, Vite, and Supabase for authentication and data management.

## 🚀 Technologies

### Frontend

- **React 19** - Main framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - UI components
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Lucide React** - Icons

### Backend

- **Supabase** - Backend-as-a-Service
- **Deno** - Runtime for server functions

## 📁 Project Structure

```
.
├── my-react-app/          # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── auth/     # Authentication components
│   │   │   ├── layout/   # Layout components
│   │   │   ├── ui/       # UI components
│   │   │   └── file/     # File handling components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── api/          # API logic
│   │   ├── lib/          # Utilities and configuration
│   │   └── common/       # Shared types and constants
├── supabase-backend/      # Supabase configuration
│   └── supabase/         # Supabase project files
└── readme.md             # This file
```

## 🛠 Installation and Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Supabase CLI (optional, for local development)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd supabase
```

### 2. Install Frontend dependencies

```bash
cd my-react-app
npm install
```

### 3. Install Backend dependencies

```bash
cd ../supabase-backend
npm install
```

### 4. Environment Variables Setup

#### Frontend Environment Variables

Create a `.env` file in the `my-react-app` folder:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### Backend Environment Variables

Create a `.env` file in the `supabase-backend` folder for your edge functions:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
GOOGLE_DRIVE_API_KEY=your_google_drive_api_key
SUPABASE_AUTH_EXTERNAL_GITHUB_CLIENT_ID=your_github_client_id
SUPABASE_AUTH_EXTERNAL_GITHUB_SECRET=your_github_secret
```

**Note:** The backend environment variables are configured in `supabase-backend/supabase/config.toml` in the `[edge_runtime.secrets]` section, which references these `.env` variables using `env()` function.

### 5. Supabase Setup

#### Option A: Remote Supabase (Recommended for production)

1. **Create a Supabase project:**

   - Go to [supabase.com](https://supabase.com)
   - Click "Start your project"
   - Create a new organization and project
   - Choose a region close to your users

2. **Get your project credentials:**

   - Go to Settings → API
   - Copy your `Project URL` and `anon public` key
   - Update your `.env` file with these values

3. **Set up your database:**

   - Go to Table Editor to create tables
   - Use SQL Editor for custom queries
   - Set up Row Level Security (RLS) policies in Authentication → Policies

4. **Configure Authentication:**
   - Go to Authentication → Settings
   - Configure your authentication providers (Email, OAuth, etc.)
   - Set up redirect URLs for your application

#### Option B: Local Supabase (For development)

1. **Install Supabase CLI:**

   ```bash
   npm install -g supabase
   ```

2. **Initialize Supabase in your project:**

   ```bash
   cd supabase-backend
   supabase init
   ```

3. **Start local Supabase services:**

   ```bash
   supabase start
   ```

   This will start:

   - PostgreSQL database
   - Supabase Studio (local dashboard)
   - Edge Functions runtime
   - Auth server
   - Storage server

4. **Access local services:**

   - **Studio Dashboard:** http://localhost:54323
   - **API URL:** http://localhost:54321
   - **Anon Key:** Will be displayed in terminal after `supabase start`

5. **Update your `.env` for local development:**

   **Frontend (.env in my-react-app/):**

   ```env
   VITE_SUPABASE_URL=http://localhost:54321
   VITE_SUPABASE_ANON_KEY=your_local_anon_key
   VITE_URL =your_supabase_localhost

   ```

   **Backend (.env in supabase-backend/):**

   ```env
   SUPABASE_URL=http://localhost:54321
   SUPABASE_ANON_KEY=your_local_anon_key
   GOOGLE_DRIVE_API_KEY=your_google_drive_api_key   SUPABASE_AUTH_EXTERNAL_GITHUB_CLIENT_ID=your_github_client_id
   SUPABASE_AUTH_EXTERNAL_GITHUB_SECRET=your_github_secret
   ```

6. **Useful local commands:**
   ```bash
   supabase status          # Check running services
   supabase stop            # Stop all services
   supabase reset           # Reset database to initial state
   supabase db reset        # Reset database only
   supabase gen types typescript --local > types/supabase.ts  # Generate TypeScript types
   ```

### 6. Run the application

#### Frontend

```bash
cd my-react-app
npm run dev
```

The application will be available at `http://localhost:5173`

#### Supabase

- **Remote:** Your app will connect automatically using the environment variables
- **Local:** Make sure you've run `supabase start` in the `supabase-backend` directory

## 🔧 Available Commands

### Frontend (my-react-app)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linter
- `npm run preview` - Preview production build

### Supabase (supabase-backend)

- `supabase start` - Start local Supabase services
- `supabase stop` - Stop local services
- `supabase status` - Check service status
- `supabase db reset` - Reset local database
- `supabase db push` - Push local schema to remote
- `supabase db pull` - Pull remote schema to local
- `supabase gen types typescript --local` - Generate TypeScript types from local DB
- `supabase gen types typescript --project-id your-project-id` - Generate types from remote DB

## 🔄 Syncing Local and Remote Supabase

### Push local changes to remote:

```bash
cd supabase-backend
supabase db push
```

### Pull remote changes to local:

```bash
cd supabase-backend
supabase db pull
```

### Link your local project to remote:

```bash
cd supabase-backend
supabase link --project-ref your-project-id
```

### Generate and sync types:

```bash
# For local development
supabase gen types typescript --local > ../my-react-app/src/types/supabase.ts

# For remote database
supabase gen types typescript --project-id your-project-id > ../my-react-app/src/types/supabase.ts
```

## 🏗 Features

- ✅ **User Authentication** - Registration, login, logout
- ✅ **Protected Routes** - Access only for authenticated users
- ✅ **Responsive Design** - Adaptive interface
- ✅ **State Management** - Custom hooks for state management
- ✅ **Form Validation** - Using React Hook Form and Zod
- ✅ **Toast Notifications** - User feedback system
- ✅ **File Upload** - Integration with Supabase Storage

## 📊 Architecture

The application uses a modular architecture with clear separation of concerns:

- **Components** - Reusable UI components
- **Hooks** - State and effect logic
- **API** - Supabase integration
- **Lib** - Utilities and configuration
- **Common** - Shared types and constants
