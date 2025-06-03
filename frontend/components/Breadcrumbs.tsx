// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// export default function Breadcrumbs() {
//   const pathname = usePathname()

//   if (pathname === '/') return null

//   const segments = pathname
//     .split('/')
//     .filter(Boolean)
//     .map((segment, index, arr) => {
//       const href = '/' + arr.slice(0, index + 1).join('/')
//       return { label: decodeURIComponent(segment), href }
//     })

//   return (
//     <nav className="text-sm breadcrumbs px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur rounded-md shadow-md">
//       <ul className="flex flex-wrap gap-1">
//         <li>
//           <Link href="/" className="text-blue-600 hover:underline">
//             Home
//           </Link>
//         </li>
//         {segments.map((s, i) => (
//           <li key={i}>
//             <Link
//               href={s.href}
//               className="text-gray-700 dark:text-gray-200 hover:underline"
//             >
//               {s.label.charAt(0).toUpperCase() + s.label.slice(1)}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }

	// 1.	支持传入 current 覆盖最后一段路径名称；
	// 2.	支持 labelMap 字典进行 URL→显示文本的转换（便于国际化和可读性）；
	// 3.	默认回退到 URL segment 显示；
	// 4.	Home 链接可自定义或隐藏；
	// 5.	支持 SSR + 动态路由兼容。
// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { Fragment } from 'react'

// interface BreadcrumbsProps {
//   current?: string
//   labelMap?: Record<string, string>
//   hideHome?: boolean
// }

// export default function Breadcrumbs({ current, labelMap = {}, hideHome = false }: BreadcrumbsProps) {
//   const pathname = usePathname()

//   if (pathname === '/') return null

//   const segments = pathname
//     .split('/')
//     .filter(Boolean)
//     .map((segment, index, arr) => {
//       const href = '/' + arr.slice(0, index + 1).join('/')
//       const label =
//         index === arr.length - 1 && current
//           ? current
//           : labelMap[segment] || decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1))
//       return { label, href }
//     })

//   return (
//     <nav className="text-sm breadcrumbs px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur rounded-md shadow-md">
//       <ul className="flex flex-wrap gap-1">
//         {!hideHome && (
//           <li>
//             <Link href="/" className="text-blue-600 hover:underline">
//               Home
//             </Link>
//           </li>
//         )}
//         {segments.map((s, i) => (
//           <Fragment key={i}>
//             <li>/</li>
//             <li>
//               {i === segments.length - 1 ? (
//                 <span className="text-gray-700 dark:text-gray-200">{s.label}</span>
//               ) : (
//                 <Link href={s.href} className="text-blue-600 hover:underline">
//                   {s.label}
//                 </Link>
//               )}
//             </li>
//           </Fragment>
//         ))}
//       </ul>
//     </nav>
//   )
// }

// overrides
//   显示名称替换，例如将 programs 显示为 Our Programs
// separator
//   自定义分隔符，如图标 > 或 / 或 SVG
// showIcons
//   是否显示图标（如首页的 house icon）
// 多语言（扩展）
//   将 overrides 接入 i18n，如 overrides[t] = t('routes.programs') 等方式
// CMS支持（可拓展）
//   可改写 label 的生成逻辑，从 CMS 拉路径对应 title 名称

// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { HomeIcon, ChevronRight } from 'lucide-react'

// interface BreadcrumbSegment {
//   label: string
//   href: string
//   icon?: React.ReactNode
// }

// interface BreadcrumbsProps {
//   overrides?: { [key: string]: string }  // e.g. { 'programs': 'Programs', 'articles': 'Articles' }
//   separator?: React.ReactNode
//   showIcons?: boolean
// }

// export default function Breadcrumbs({
//   overrides = {},
//   separator = <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />,
//   showIcons = true,
// }: BreadcrumbsProps) {
//   const pathname = usePathname()

//   if (pathname === '/') return null

//   const segments: BreadcrumbSegment[] = pathname
//     .split('/')
//     .filter(Boolean)
//     .map((segment, index, arr) => {
//       const href = '/' + arr.slice(0, index + 1).join('/')
//       return {
//         label: overrides[segment] || decodeURIComponent(segment),
//         href,
//       }
//     })

//   return (
//     <nav className="text-sm px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur rounded-md shadow-md">
//       <ul className="flex items-center flex-wrap gap-1">
//         <li>
//           <Link href="/" className="flex items-center text-blue-600 hover:underline">
//             {showIcons && <HomeIcon className="w-4 h-4 mr-1" />}
//             Home
//           </Link>
//         </li>
//         {segments.map((s, i) => (
//           <li key={i} className="flex items-center">
//             {separator}
//             <Link
//               href={s.href}
//               className="text-gray-700 dark:text-gray-200 hover:underline"
//             >
//               {s.label.charAt(0).toUpperCase() + s.label.slice(1)}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }

// 已完成扩展，Breadcrumbs.tsx 现支持从 GraphQL CMS 动态获取标题。特点：
// 	•	支持 /programs/:slug、/articles/:slug、/events/:slug 等路径；
// 	•	自动根据 slug 查询 CMS 中的真实标题；
// 	•	回退到原始 segment 名称；
// 	•	使用 lucide-react 图标美化导航；
// 	•	提升用户体验与扩展性。
// app/components/Breadcrumbs.tsx
// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { HomeIcon, ChevronRight } from 'lucide-react'
// import { useEffect, useState } from 'react'
// import { getClient } from '@/lib/apolloClient'
// import { gql } from '@apollo/client'

// interface BreadcrumbSegment {
//   label: string
//   href: string
// }

// const breadcrumbQuery = gql`
//   query BreadcrumbTitles($slug: String!) {
//     programs(filters: { slug: { eq: $slug } }) {
//       data { attributes { title } }
//     }
//     articles(filters: { slug: { eq: $slug } }) {
//       data { attributes { title } }
//     }
//     events(filters: { slug: { eq: $slug } }) {
//       data { attributes { title } }
//     }
//   }
// `

// export default function Breadcrumbs() {
//   const pathname = usePathname()
//   const [titles, setTitles] = useState<Record<string, string>>({})

//   useEffect(() => {
//     const segments = pathname.split('/').filter(Boolean)

//     async function fetchTitles() {
//       const newTitles: Record<string, string> = {}

//       for (const segment of segments) {
//         const { data } = await getClient().query({
//           query: breadcrumbQuery,
//           variables: { slug: segment },
//         })

//         if (data.programs?.data[0]?.attributes?.title) {
//           newTitles[segment] = data.programs.data[0].attributes.title
//         } else if (data.articles?.data[0]?.attributes?.title) {
//           newTitles[segment] = data.articles.data[0].attributes.title
//         } else if (data.events?.data[0]?.attributes?.title) {
//           newTitles[segment] = data.events.data[0].attributes.title
//         }
//       }

//       setTitles(newTitles)
//     }

//     fetchTitles()
//   }, [pathname])

//   if (pathname === '/') return null

//   const segments = pathname
//     .split('/')
//     .filter(Boolean)
//     .map((segment, index, arr) => {
//       const href = '/' + arr.slice(0, index + 1).join('/')
//       return { label: titles[segment] || segment, href }
//     })

//   return (
//     <nav className="text-sm px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur rounded-md shadow-md">
//       <ul className="flex items-center flex-wrap gap-1">
//         <li>
//           <Link href="/" className="flex items-center text-blue-600 hover:underline">
//             <HomeIcon className="w-4 h-4 mr-1" /> Home
//           </Link>
//         </li>
//         {segments.map((s, i) => (
//           <li key={i} className="flex items-center">
//             <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
//             <Link href={s.href} className="text-gray-700 dark:text-gray-200 hover:underline">
//               {s.label.charAt(0).toUpperCase() + s.label.slice(1)}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }


// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import { gql } from '@apollo/client'
// import { getClient } from '@/lib/apollo-client'

// type BreadcrumbItem = {
//   href: string
//   label: string
// }

// const QUERY_MAP: Record<
//   string,
//   {
//     query: any
//     getTitle: (data: any) => string | undefined
//   }
// > = {
//   events: {
//     query: gql`
//       query GetEventTitle($slug: String!) {
//         events(filters: { slug: { eq: $slug } }) {
//           data {
//             attributes {
//               title
//             }
//           }
//         }
//       }
//     `,
//     getTitle: (data) => data?.events?.data?.[0]?.attributes?.title,
//   },
//   articles: {
//     query: gql`
//       query GetArticleTitle($slug: String!) {
//         articles(filters: { slug: { eq: $slug } }) {
//           data {
//             attributes {
//               title
//             }
//           }
//         }
//       }
//     `,
//     getTitle: (data) => data?.articles?.data?.[0]?.attributes?.title,
//   },
//   programs: {
//     query: gql`
//       query GetProgramTitle($slug: String!) {
//         programs(filters: { slug: { eq: $slug } }) {
//           data {
//             attributes {
//               title
//             }
//           }
//         }
//       }
//     `,
//     getTitle: (data) => data?.programs?.data?.[0]?.attributes?.title,
//   },
// }

// export default function Breadcrumbs() {
//   const pathname = usePathname()
//   const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])

//   useEffect(() => {
//     if (!pathname || pathname === '/') return

//     const segments = pathname.split('/').filter(Boolean)

//     const fetchLabels = async () => {
//       const client = getClient()
//       const items: BreadcrumbItem[] = []

//       for (let i = 0; i < segments.length; i++) {
//         const href = '/' + segments.slice(0, i + 1).join('/')
//         const segment = segments[i]
//         const parent = segments[i - 1]

//         let label = segment.charAt(0).toUpperCase() + segment.slice(1)

//         // dynamic segment (like [slug])
//         if (i > 0 && QUERY_MAP[parent]) {
//           try {
//             const { query, getTitle } = QUERY_MAP[parent]
//             const { data } = await client.query({
//               query,
//               variables: { slug: segment },
//             })
//             const title = getTitle(data)
//             if (title) label = title
//           } catch (err) {
//             console.warn('Failed to fetch breadcrumb title for:', segment)
//           }
//         }

//         items.push({ href, label })
//       }

//       setBreadcrumbs(items)
//     }

//     fetchLabels()
//   }, [pathname])

//   if (!breadcrumbs.length) return null

//   return (
//     <nav className="text-sm breadcrumbs px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur rounded-md shadow-md">
//       <ul className="flex flex-wrap gap-1">
//         <li>
//           <Link href="/" className="text-blue-600 hover:underline">
//             Home
//           </Link>
//         </li>
//         {breadcrumbs.map((s, i) => (
//           <li key={i}>
//             <Link
//               href={s.href}
//               className="text-gray-700 dark:text-gray-200 hover:underline"
//             >
//               {s.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }



'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getClient } from '@/lib/apollo-client'
import { QUERY_MAP } from '@/lib/breadcrumb-queries'

type BreadcrumbItem = {
  href: string
  label: string
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])

  useEffect(() => {
    if (!pathname || pathname === '/') return

    const segments = pathname.split('/').filter(Boolean)

    const fetchLabels = async () => {
      const client = getClient()
      const items: BreadcrumbItem[] = []

      for (let i = 0; i < segments.length; i++) {
        const href = '/' + segments.slice(0, i + 1).join('/')
        const segment = segments[i]
        const parent = segments[i - 1]

        let label = segment.charAt(0).toUpperCase() + segment.slice(1)

        // 若当前段为 slug，且其父目录在 QUERY_MAP 中有定义
        if (i > 0 && QUERY_MAP[parent]) {
          try {
            const { query, getTitle } = QUERY_MAP[parent]
            const { data } = await client.query({
              query,
              variables: { slug: segment },
            })
            const title = getTitle(data)
            if (title) label = title
          } catch (err) {
            console.warn('Failed to fetch breadcrumb title for:', segment)
          }
        }

        items.push({ href, label })
      }

      setBreadcrumbs(items)
    }

    fetchLabels()
  }, [pathname])

  if (!breadcrumbs.length) return null

  return (
    <nav className="text-sm breadcrumbs px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur rounded-md shadow-md">
      <ul className="flex flex-wrap gap-1">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {breadcrumbs.map((s, i) => (
          <li key={i}>
            <Link
              href={s.href}
              className="text-gray-700 dark:text-gray-200 hover:underline"
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}