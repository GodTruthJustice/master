
'use client'

import Link from 'next/link'
import { AnimatedCardWrapper } from './AnimatedCardWrapper'
import { AnimatedCardWrapper2 } from './AnimatedCardWrapper'

export interface ProgramCardProps {
  title: string
  description: string
  slug?: string
  image?: {
    url: string
  }
  index?: number
}

export const ProgramCard = ({
  title,
  description,
  slug,
  image,
  index = 0,
}: ProgramCardProps) => {
  return (
  <AnimatedCardWrapper2
    index={index}
    rotate
    glow
  >
  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        {image?.url && (
          <img
            src={image.url}
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
          <p className="text-gray-700 text-sm">{description}</p>
          {slug && (
            <Link
              href={`/articles/${slug}`}
              className="inline-block mt-4 text-primary font-medium hover:underline"
            >
              Read more →
            </Link>
          )}
        </div>
      </div>
    </AnimatedCardWrapper2>
  )
}
