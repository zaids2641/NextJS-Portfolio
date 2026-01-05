"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function ThemedMain({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a stable class on server
  if (!mounted) {
    return <main className="theme-scope">{children}</main>;
  }

  return (
    <main className={clsx("theme-scope", theme === "dark" && "dark")}>
      {children}
    </main>
  );
}


// "use client";

// import { useTheme } from "next-themes";
// import clsx from "clsx";

// export default function ThemedMain({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { theme } = useTheme();

//   return (
//     <main className={clsx("theme-scope", theme === "dark" && "dark")}>
//       {children}
//     </main>
//   );
// }