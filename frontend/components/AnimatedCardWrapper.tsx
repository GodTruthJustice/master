
// 放大 摆动
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children: ReactNode
  index?: number
  glow?: boolean
  rotate?: boolean
}

export const AnimatedCardWrapper2 = ({
  children,
  index = 0,
  glow = false,
  rotate = false,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.06,
        // rotate: rotate ? [0, -1, 1, 0] : 0,
        rotate: rotate ? [0, -2, 2, -2, 1, 0] : 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
      className={clsx(
        'transition-shadow duration-300',
        'hover:shadow-xl',
        glow && 'hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
      )}
    >
      {children}
    </motion.div>
  )
}



// 'use client'

// import { motion } from 'framer-motion'
import { useState } from 'react'
// import clsx from 'clsx'

interface AnimatedCardWrapperProps {
  children: React.ReactNode
  index?: number
  glow?: boolean
  rotate?: boolean
  tilt?: boolean
}

export const AnimatedCardWrapper1 = ({
  children,
  index = 0,
  glow = false,
  rotate = false,
  tilt = false,
}: AnimatedCardWrapperProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = -(y - centerY) / 10
    const rotateY = (x - centerX) / 10
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    if (!tilt) return
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.06,
        rotate: rotate ? [0, -2, 2, -2, 1, 0] : 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        tilt
          ? {
              transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }
          : undefined
      }
      className={clsx(
        'transition-shadow duration-300',
        'hover:shadow-xl',
        glow && 'hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
      )}
    >
      {children}
    </motion.div>
  )
}

import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

interface Props2 {
  children: React.ReactNode
  index?: number
  glow?: boolean
  rotate?: boolean
}

export const AnimatedCardWrapper = ({
  children,
  index = 0,
  glow = false,
  rotate = false,
}: Props2) => {
  const controls = useAnimation()
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    controls.set({ opacity: 1, y: 0, scale: 1, rotate: 0 })
  }, [controls])

  const handleHoverStart = () => {
    setHovered(true)
    controls.start({
      scale: [1, 1.1, 1.07],
      rotate: rotate ? [0, -2, 2, -1, 1, 0] : 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
        duration: 0.6,
      },
    })
  }

  const handleHoverEnd = () => {
    setHovered(false)
    controls.start({
      scale: [1.07, 0.95, 1],
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 20,
        duration: 0.5,
      },
    })
  }

  return (
    <motion.div
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={clsx(
        'transition-shadow duration-300',
        'hover:shadow-xl',
        glow && 'hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
      )}
    >
      {children}
    </motion.div>
  )
}

//only 放大
// 'use client'

// import { motion } from 'framer-motion'
// import clsx from 'clsx'

// export interface Props {
//   children: React.ReactNode
//   index?: number
//   glow?: boolean
//   rotate?: boolean
//   shadow?: boolean
// }

// export const AnimatedCardWrapper = ({
//   children,
//   index = 0,
//   glow = false,
//   rotate = false,
//   shadow = false,
// }: Props) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       whileHover={{
//         scale: 1.03,
//         rotate: rotate ? [0, -1, 1, 0] : 0,
//         transition: { duration: 0.3, ease: 'easeOut' },
//       }}
//       className={clsx(
//         'transition-transform duration-300',
//         glow && 'shadow-[0_0_15px_rgba(0,0,0,0.1)]',
//         shadow && 'hover:shadow-xl'
//       )}
//     >
//       {children}
//     </motion.div>
//   )
// }


//only 放大
// 'use client'

// import { motion, useAnimation } from 'framer-motion'
// import { useEffect } from 'react'
// import clsx from 'clsx'

// export interface AnimatedCardWrapperProps {
//   children: React.ReactNode
//   index?: number
//   glow?: boolean
//   shadow?: boolean
// }

// export const AnimatedCardWrapper = ({
//   children,
//   index = 0,
//   glow = false,
//   shadow = false,
// }: AnimatedCardWrapperProps) => {
//   const controls = useAnimation()

//   const handleHoverStart = () => {
//     controls.start({
//       rotate: [0, -8, 8, -6, 6, -4, 4, 0],
//       scale: 1.07,
//       transition: {
//         duration: 0.6,
//         ease: 'easeInOut',
//       },
//     })
//   }

//   const handleHoverEnd = () => {
//     controls.start({ rotate: 0, scale: 1, transition: { duration: 0.3 } })
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       animate={controls}
//       transition={{ delay: index * 0.1 }}
//       viewport={{ once: true }}
//       onHoverStart={handleHoverStart}
//       onHoverEnd={handleHoverEnd}
//       className={clsx(
//         'transition-transform duration-300 will-change-transform',
//         glow && 'shadow-[0_0_20px_rgba(255,255,255,0.2)]',
//         shadow && 'hover:shadow-xl'
//       )}
//     >
//       {children}
//     </motion.div>
//   )
// }