import "@/styles/tailwind.css";
import "@/styles/App.css";

import RootLayoutClient from "./RootLayoutClient";
import { Metadata, Viewport } from "next";
import ScrollToHash from "@/utils/scrollToHash";

export const metadata: Metadata = {
  title: {
    default: "Zaids — Web Developer Portfolio",
    template: "Zaids — %s",
  },
  description:
    "Zaids is a web developer portfolio featuring modern frontend projects, interactive UI experiences, and scalable web applications built with Next.js and Tailwind CSS.",
  keywords: [
    "Zaids",
    "web developer",
    "frontend developer",
    "portfolio",
    "Next.js projects",
    "Tailwind CSS",
    "web applications",
    "Philippines",
  ],
  authors: [{ name: "Felix Diaz" }],
  robots: "index, follow",
};

// ✅ Separate viewport export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen">
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Felix Diaz",
              jobTitle: "Frontend Developer",
              url: "https://zaids-portfolio.com",
              sameAs: [
                "https://www.linkedin.com/in/zaids",
                "https://github.com/zaids",
              ],
            }),
          }}
        />

        <ScrollToHash />
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}




// import "@/styles/tailwind.css";
// import "@/styles/App.css";

// import RootLayoutClient from "./RootLayoutClient";
// import { Metadata } from "next";
// import ScrollToHash from "@/utils/scrollToHash";

// export const metadata: Metadata = {
//   title: {
//     default: "Zaids — Web Developer Portfolio",
//     template: "Zaids — %s",
//   },
//   description:
//     "Zaids is a web developer portfolio featuring modern frontend projects, interactive UI experiences, and scalable web applications built with Next.js and Tailwind CSS.",
//   keywords: [
//     "Zaids",
//     "web developer",
//     "frontend developer",
//     "portfolio",
//     "Next.js projects",
//     "Tailwind CSS",
//     "web applications",
//     "Philippines",
//   ],
//   authors: [{ name: "Felix Diaz" }],
//   viewport: "width=device-width, initial-scale=1.0",
//   robots: "index, follow",
// };



// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
      
//       <body suppressHydrationWarning className="min-h-screen ">
//         {/* JSON-LD for SEO */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Person",
//               name: "Felix Diaz",
//               jobTitle: "Frontend Developer",
//               url: "https://zaids-portfolio.com",
//               sameAs: [
//                 "https://www.linkedin.com/in/zaids",
//                 "https://github.com/zaids",
//               ],
//             }),
//           }}
//         />
        
//         <ScrollToHash />
//         <RootLayoutClient>{children}</RootLayoutClient>
//       </body>
//     </html>
//   );
// }