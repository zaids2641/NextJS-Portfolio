"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Remove hash from URL if present
    if (window.location.hash) {
      const cleanUrl = window.location.href.split("#")[0];
      window.history.replaceState(null, "", cleanUrl);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={clsx(
        "fixed bottom-20 right-6 z-50 rounded-full p-3 transition-all duration-300 shadow-md",
        "bg-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/90 hover:shadow-lg",
        "text-white backdrop-blur-sm cursor-pointer animate-bounce hover:animate-none",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;