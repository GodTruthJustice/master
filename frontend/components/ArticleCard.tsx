// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'

// export type ArticleCardProps = {
//   // article: {
//     title: string
//     description: string
//     excerpt?: string
//     image?: {
//       url: string
//     }
//     slug: string
//   // }
// }

// export const ArticleCard = ({ title, description, slug, image }: ArticleCardProps) => {
//   // const { title, summary, slug, image } = program
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.98 }}
//       className="bg-white rounded-xl shadow-md overflow-hidden transition-all"
//     >
//       {image && (
//         <img src={image.url} alt={title} className="w-full h-40 object-cover" />
//       )}
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
//         <p className="text-sm text-gray-600 mt-2 mb-4">{description}</p>
//         <Link
//           href={`/articles/${slug}`}
//           className="text-indigo-600 font-medium hover:underline"
//         >
//           Read more →
//         </Link>
//       </div>
//     </motion.div>
//   )
// }

'use client'

import Link from 'next/link'
import { AnimatedCardWrapper } from './AnimatedCardWrapper'
import { AnimatedCardWrapper1 } from './AnimatedCardWrapper'


export type ArticleCardProps = {
  title: string
  description: string
  excerpt?: string
  image?: {
    url: string
  }
  slug: string
  index?: number
}

export const ArticleCard = ({
  title,
  description,
  slug,
  image,
  index = 0,
}: ArticleCardProps) => {
  return (
    <AnimatedCardWrapper1 index={index} glow rotate>
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        {image?.url && (
          <img
            src={image.url}
            alt={title}
            className="w-full h-40 object-cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <Link
            href={`/articles/${slug}`}
            className="text-primary font-medium hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </AnimatedCardWrapper1>
  )
}