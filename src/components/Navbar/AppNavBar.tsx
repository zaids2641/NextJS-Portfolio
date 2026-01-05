
// "use client";

// import { useEffect, useState } from "react";
// import clsx from "clsx";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { HeaderNavLinks, NavLink } from "@/data/links";

// export default function AppNavBar() {
//   const [links, setLinks] = useState<NavLink[]>([]);
//   const pathname = usePathname();
//   const [hash, setHash] = useState("");

//   useEffect(() => {
//     HeaderNavLinks().then(setLinks);

//     // read hash on load + hash change
//     const updateHash = () => setHash(window.location.hash);
//     updateHash();

//     window.addEventListener("hashchange", updateHash);
//     return () => window.removeEventListener("hashchange", updateHash);
//   }, []);

//   return (
//     <nav className="px-10 py-8 bg-[var(--dark)] flex justify-between items-center text-lg">
//       {/* Brand */}
//       <Link href="/" className="text-white">
//         <h1 className="fluid_brand font-ubuntu-condensed">Zaids.</h1>
//       </Link>

//       {/* Links */}
//       <div className="flex gap-6 font-inter">
//         {links.map((link) => {
//           const linkUrl = new URL(link.url, "http://dummy");
//           const linkPath = linkUrl.pathname;
//           const linkHash = linkUrl.hash;

//           const isActive =
//             // normal pages
//             pathname === linkPath && !linkHash ||
//             // hash sections on home
//             (pathname === "/" && hash === linkHash && linkHash !== "");

//           return (
//             <Link
//               key={link.name}
//               href={link.url}
//               scroll
//               className={clsx(
//                 "transition-colors",
//                 isActive
//                   ? "text-white"
//                   : "text-[var(--text-gray)] hover:text-white"
//               )}
//             >
//               {link.name}
//             </Link>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { HeaderNavLinks, NavLink } from "@/data/links";
import clsx from "clsx";
import Link from "next/link";

export default function AppNavBar() {
  const [links, setLinks] = useState<NavLink[]>([]);
  const [active, setActive] = useState<string>("Intro");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    HeaderNavLinks("").then(setLinks);
  }, []);

  return (
    <>
      <nav className="bg-[var(--dark)] px-6 lg:px-10 py-4 flex items-center justify-between relative">
        {/* Brand */}
        <Link href="/">
          <h1 className="fluid_brand text-white font-ubuntu-condensed">
            Zaids.
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 font-inter text-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              onClick={() => setActive(link.name)}
              className={clsx(
                "cursor-pointer transition-colors",
                active === link.name
                  ? "text-white"
                  : "text-[var(--text-gray)] hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-50 block lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Slide Panel */}
      <aside
        className={clsx(
          "fixed top-0 right-0 h-screen w-72 bg-[var(--dark)] z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-start p-8 gap-6 font-inter text-lg">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="self-end text-[var(--text-gray)] hover:text-white text-2xl mb-6 cursor-pointer transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>

          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              onClick={() => {
                setActive(link.name);
                setOpen(false);
              }}
              className={clsx(
                "transition-colors",
                active === link.name
                  ? "text-white"
                  : "text-[var(--text-gray)] hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "../Buttons/Buttons";
// import { HeaderNavLinks, NavLink } from "@/data/links";
// import clsx from "clsx";
// import Link from "next/link";

// export default function AppNavBar() {
//     const [links, setLinks] = useState<NavLink[]>([]);
//     const [active, setActive] = useState<string>("Intro"); // default active

//     useEffect(() => {
//         HeaderNavLinks("").then(setLinks);
//     }, []);

//     return (
//         <nav className="px-10 py-8 bg-[var(--dark)] h-18 flex flex-row justify-between items-center text-lg ">
//             <div>
//                 <Link href="/">
//                   <h1 className="fluid_brand text-white font-ubuntu-condensed">Zaids.</h1>
//                 </Link>
//             </div>
//             <div className="flex flex-row justify-between gap-4 font-inter">
//                 {links.map((link) => (
//                     <a
//                     key={link.name}
//                     href={link.url}
//                     onClick={() => setActive(link.name)}
//                     className={clsx(
//                         'cursor-pointer',
//                         active === link.name
//                         ? "text-white" // active
//                         : "text-(--text-gray)" // inactive
//                     )}
//                     >
//                     {link.name}
//                     </a>
//                 ))}
//             </div>
//         </nav>
//     );
// }
