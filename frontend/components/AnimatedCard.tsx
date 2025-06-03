// 'use client'

// import { motion } from 'framer-motion'
// import { LucideIcon } from 'lucide-react'

// interface AnimatedCardProps {
//   // card: {
//     title: string
//     description: string
//     icon: React.ReactNode
//   // }
// }

// // export default function AnimatedCard({ card }: VisionCardProps ) {
// export default function AnimatedCard({ title, description, icon }: AnimatedCardProps) {
//   // const { title, description, icon } = card
//   return (
//     <motion.div
//       className="bg-white rounded-2xl shadow-lg p-6 text-center transition hover:shadow-2xl"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       viewport={{ once: true }}
//     >
//       <div className="text-4xl mb-4 text-indigo-600">{icon}</div>
//       <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//       <p className="text-gray-600 text-sm">{description}</p>
//     </motion.div>
//   )
// }

'use client'

import { AnimatedCardWrapper } from './AnimatedCardWrapper'

interface AnimatedCardProps {
  title: string
  description: string
  icon: React.ReactNode
  index?: number
}

export default function AnimatedCard({
  title,
  description,
  icon,
  index = 0,
}: AnimatedCardProps) {
  return (
    <AnimatedCardWrapper index={index} glow >
      <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </AnimatedCardWrapper>
  )
}