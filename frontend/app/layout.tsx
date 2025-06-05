

//app/layout.tsx
// 'use client';

// import '../styles/globals.css';
// import { Navbar } from '@/components/Navbar';
// import { Footer } from '@/components/Footer';
// import { Inter } from 'next/font/google';
// import { useEffect, useState } from 'react';
// import { getClient } from '@/lib/apollo-client';
// import { gql } from '@apollo/client';
// import { motion } from 'framer-motion';
// import { ThemeProvider } from '@/components/ThemeProvider';

// const inter = Inter({ subsets: ['latin'] });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);

//   useEffect(() => {
//     const query = gql`
//       query {
//         homepage {
//           data {
//             attributes {
//               background {
//                 url
//               }
//             }
//           }
//         }
//       }
//     `;

//     getClient().query({ query })
//       .then(({ data }) => {
//         const bg = data?.homepage?.data?.attributes?.background?.url;
//         if (bg) setBackgroundUrl(bg);
//       })
//       .catch(err => console.error("Failed to fetch background image", err));
//   }, []);

//   return (
//     <html lang="en" className="scroll-smooth">
//       <body
//         className={`${inter.className} bg-cover bg-fixed bg-no-repeat min-h-screen text-gray-800 transition-colors duration-300`}
//         style={{ backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined }}
//       >
//         <ThemeProvider>
//           <Navbar />
//           <motion.main
//             className="pt-20"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {children}
//           </motion.main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


//app/layout.tsx
'use client';

import '../styles/globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' }); // Better font loading strategy

// GraphQL query to get background image
const HOMEPAGE_BG_QUERY = gql`
  query GetHomepageBackground {
    homepage {
      data {
        attributes {
          background {
            url
          }
        }
      }
    }
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);

  // Fetch homepage background image from CMS
  useEffect(() => {
    getClient()
      .query({ query: HOMEPAGE_BG_QUERY })
      .then(({ data }) => {
        const bg = data?.homepage?.data?.attributes?.background?.url;
        if (bg) setBackgroundUrl(bg);
      })
      .catch(err => console.error('Failed to fetch background image:', err));
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.className}
          min-h-screen  flex flex-col
          text-dark
          bg-soft_green
          transition-colors
          duration-300
          bg-no-repeat
          bg-fixed
          bg-cover
        `}
        style={{
          backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
        }}
      >
        <ThemeProvider>
          <Navbar />
          <motion.main
            className="flex-grow pt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}