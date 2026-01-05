
// "use client";

// import React, { useEffect, useState } from "react";
// import AppNavBar from "./AppNavBar";
// import clsx from "clsx";

// function NavBarContainer() {
//   const [isWideNav, setIsWideNav] = useState(false);
//   const [navBarHidden, setNavBarHidden] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const y = window.scrollY;

//       setNavBarHidden(y > 340 && y < 680);
//       setIsWideNav(y >= 680);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//   className={clsx(
//     "z-30 transition-transform duration-500 ease-out will-change-transform",
//     navBarHidden ? "-translate-y-full" : "translate-y-0",
//     isWideNav
//       ? "fixed top-0 w-full"
//       : "absolute top-5 w-full px-8 md:px-18 lg:px-10"
//   )}
// >
//   <AppNavBar />
// </div>

//   );
// }

// export default NavBarContainer;



"use client";

import React, { useEffect, useState } from "react";
import AppNavBar from "./AppNavBar";
import clsx from "clsx";

function NavBarContainer() {
  const [isWideNav, setIsWideNav] = useState(false);
  const [navBarHidden, setNavBarHideen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBarHideen(window.scrollY > 340);
      setIsWideNav(window.scrollY > 680);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
      className={clsx(
        "transition-transform duration-500 ease-out z-50",
        // navBarHidden ? "translate-y-0" : "-translate-y-full",
        isWideNav
          ? "fixed w-full"
          : "absolute top-5 w-full px-8 md:px-18  lg:px-10 "
      )}
    >
      <AppNavBar />
    </div>
  );
}

export default NavBarContainer;
