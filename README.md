
# ✨ Faith & Justice Fullstack Platform

A world-class, modern religious + nonprofit website platform with a mission of **Truth, Justice, Light, and Hope**.

## 🧱 Tech Stack

- **Frontend:** Next.js (App Router) + TypeScript + Tailwind CSS + Apollo Client + Framer Motion
- **Backend CMS:** Strapi + GraphQL plugin + PostgreSQL
- **Image Upload:** Cloudinary
- **Auth:** JWT & Role-based access control
- **Admin Dashboard:** Built-in Strapi Admin + Custom Frontend View
- **DevOps:** Docker, GitHub CI/CD, Vercel (Frontend), Fly.io (Backend)

---

## 📁 Project Structure

```
.
├── frontend/               # Next.js app (UI, dynamic rendering via GraphQL)
├── backend/                # Strapi CMS + PostgreSQL
├── nginx/                  # Optional nginx reverse proxy config (production)
├── docker-compose.yml      # One-click local dev
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### 1. Clone the project

```bash
git clone https://github.com/your-org/faith-justice-platform.git
cd faith-justice-platform
```

### 2. Start Backend (Strapi + PostgreSQL)

```bash
docker-compose up -d
```

- Access CMS: http://localhost:1337/admin
- Default DB: `postgres:5432`, user/pass: `strapi:strapi123`

### 3. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

- Open: http://localhost:3000

---

## ☁️ Deployment

- Frontend: **Vercel** or Docker
- Backend: **Fly.io**, Render, or your VPS
- Images: **Cloudinary** (pre-configured)

---

## 🛠 .env Example

See `backend/.env.example` — populate with:

```bash
DATABASE_CLIENT=postgres
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_NAME=mydb
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi123

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloud_key
CLOUDINARY_SECRET=your_cloud_secret
```

---

## 👥 Auth & Roles

- Uses **JWT** for API security
- Strapi **Roles & Permissions** for content access
- Includes custom login/register pages

---

## 📌 Credits

Built with ❤️ by a visionary mission to spread truth, hope and justice with the best technology in the world.


📁 app/
├── articles/
│   ├── page.tsx
│   ├── layout.tsx
│   └── generateMetadata.ts
├── programs/
│   ├── page.tsx
│   ├── layout.tsx
│   └── generateMetadata.ts
├── vision/
│   ├── page.tsx
│   ├── layout.tsx
│   └── generateMetadata.ts
├── admin/
│   ├── page.tsx
│   ├── layout.tsx
├── login/
│   ├── page.tsx
│   ├── layout.tsx

// Each generateMetadata.ts follows a standard structure
// app/vision/generateMetadata.ts
import { gql } from 'graphql-request'
import { getClient } from '@/lib/apollo-client'

export async function getVisionMetadata() {
  const query = gql`
    query {
      vision {
        data {
          attributes {
            title
            content
            image {
              url
            }
          }
        }
      }
    }
  `

  const { vision } = await getClient().request(query)
  const attrs = vision?.data?.attributes

  return {
    title: attrs?.title || 'Vision | God & Justice',
    description: attrs?.content?.slice(0, 150) || 'A world filled with justice and compassion.',
    openGraph: {
      title: attrs?.title,
      description: attrs?.content?.slice(0, 150),
      images: [
        {
          url: attrs?.image?.url || '/og-vision.jpg',
          width: 1200,
          height: 630,
          alt: attrs?.title || 'Vision'
        }
      ],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: attrs?.title,
      description: attrs?.content?.slice(0, 150),
      images: [attrs?.image?.url || '/og-vision.jpg']
    }
  }
}

// app/vision/page.tsx
import { getVisionMetadata } from './generateMetadata'
export async function generateMetadata() {
  return await getVisionMetadata()
}

// layout.tsx is only responsible for UI elements like dynamic backgrounds and breadcrumbs,
// and does not need to export a metadata function.

// All page.tsx files follow the pattern:
// - generateMetadata() calls the function from generateMetadata.ts
// - Uses Apollo or graphql-request to fetch and render data

// The structure for other modules (articles/programs, etc.) is exactly the same.