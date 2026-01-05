
"use client";

// import { ThemeProvider } from "next-themes";
import { ThemeProvider } from "./theme-provider";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute={undefined}   // ⬅️ IMPORTANT
      defaultTheme="light"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
