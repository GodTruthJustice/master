// import { Hero } from '@/components/Hero'
// import { Navbar } from '@/components/Navbar'
// import { Footer } from '@/components/Footer'
// import { ProgramCard } from '@/components/ProgramCard'
// import { ArticleCard } from '@/components/ArticleCard'
// import AnimatedCard from '@/components/AnimatedCard'
// import { CTA } from '@/components/CTA'
// import { HeartHandshake, Lightbulb, Users } from 'lucide-react'

// import { getHomeMetadata } from './generateMetadata'
// import { programs, articles, visions } from '@/lib/home-data'

// const iconMap: Record<string, JSX.Element> = {
//   HeartHandshake: <HeartHandshake />,
//   Lightbulb: <Lightbulb />,
//   Users: <Users />,
// }

// export async function generateMetadata() {
//   return await getHomeMetadata()
// }

// export default function HomePage() {
//   return (
//       <main className="bg-gray-50 text-gray-800">
//       <Navbar />
//       <Hero />

//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold mb-8 text-center text-indigo-800">Our Programs</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {programs.map((p, i) => (
//             <ProgramCard key={i} title={p.title} description={p.description} image={p.image} />
//           ))}
//         </div>
//       </section>

//       <section className="py-16 px-6 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-bold mb-10 text-center text-indigo-800">Our Vision</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {visions.map((v, i) => (
//             <AnimatedCard key={i} title={v.title} description={v.description} icon={iconMap[v.icon]} />
//           ))}
//         </div>
//       </section>

//       <section className="py-16 px-6 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-bold mb-8 text-center text-indigo-800">Latest Articles</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {articles.map((a, i) => (
//             <ArticleCard key={i} title={a.title} description={a.description} image={a.image} slug={a.slug} />
//           ))}
//         </div>
//       </section>

//       <CTA />
//       <Footer />
//     </main>
//   )
// }

// import { Hero } from '@/components/Hero'
// import { Navbar } from '@/components/Navbar'
// import { Footer } from '@/components/Footer'
// import { ProgramCard } from '@/components/ProgramCard'
// import { ArticleCard } from '@/components/ArticleCard'
// import AnimatedCard from '@/components/AnimatedCard'
// import { CTA } from '@/components/CTA'
// import { HeartHandshake, Lightbulb, Users } from 'lucide-react'

// import { getHomeMetadata } from './generateMetadata'
// import { programs, articles, visions } from '@/lib/home-data'

// const iconMap: Record<string, JSX.Element> = {
//   HeartHandshake: <HeartHandshake />,
//   Lightbulb: <Lightbulb />,
//   Users: <Users />,
// }

// export async function generateMetadata() {
//   return await getHomeMetadata()
// }

// export default function HomePage() {
//   return (
//     <main className="bg-light text-dark font-sans">
//       <Navbar />
//       <Hero />

//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold mb-8 text-center text-primary animate-fadeInUp">
//           Our Programs
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {programs.map((p, i) => (
//             <ProgramCard
//               key={i}
//               title={p.title}
//               description={p.description}
//               image={p.image}
//             />
//           ))}
//         </div>
//       </section>

//       <section className="py-16 px-6 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-bold mb-10 text-center text-primary animate-fadeInUp">
//           Our Vision
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {visions.map((v, i) => (
//             <AnimatedCard
//               key={i}
//               title={v.title}
//               description={v.description}
//               icon={iconMap[v.icon]}
//             />
//           ))}
//         </div>
//       </section>

//       <section className="py-16 px-6 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-bold mb-8 text-center text-primary animate-fadeInUp">
//           Latest Articles
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {articles.map((a, i) => (
//             <ArticleCard
//               key={i}
//               title={a.title}
//               description={a.description}
//               image={a.image}
//               slug={a.slug}
//             />
//           ))}
//         </div>
//       </section>

//       <CTA />
//       <Footer />
//     </main>
//   )
// }


// app/page.tsx
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProgramCard } from '@/components/ProgramCard'
import { ArticleCard } from '@/components/ArticleCard'
import AnimatedCard from '@/components/AnimatedCard'
import { CTA } from '@/components/CTA'
import { HeartHandshake, Lightbulb, Users } from 'lucide-react'

import { getHomeMetadata } from './generateMetadata'
import { programs, articles, visions } from '@/lib/home-data'

const iconMap: Record<string, JSX.Element> = {
  HeartHandshake: <HeartHandshake />,
  Lightbulb: <Lightbulb />,
  Users: <Users />,
}

export async function generateMetadata() {
  return await getHomeMetadata()
}

export default function HomePage() {
  return (
    <main className="bg-soft_green text-dark font-sans">
      <Navbar />
      <Hero />

      <Section title="Our Programs" id="programs">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <ProgramCard key={i} title={p.title} description={p.description} image={p.image} />
          ))}
        </div>
      </Section>

      <Section title="Our Vision" id="vision">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visions.map((v, i) => (
            <AnimatedCard
              key={i}
              title={v.title}
              description={v.description}
              icon={iconMap[v.icon]}
            />
          ))}
        </div>
      </Section>

      <Section title="Latest Articles" id="articles">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <ArticleCard
              key={i}
              title={a.title}
              description={a.description}
              image={a.image}
              slug={a.slug}
            />
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  )
}

function Section({
  title,
  id,
  children,
}: {
  title: string
  id: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-primary animate-fadeInUp">{title}</h2>
      {children}
    </section>
  )
}