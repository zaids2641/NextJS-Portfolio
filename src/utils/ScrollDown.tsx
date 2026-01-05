"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const ScrollDown: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
    const router = useRouter();
    
    const goToAbout = () => {
    router.push("/#about_me");
  };

  return (
    <button
      onClick={goToAbout}
      aria-label="Scroll to top"
      className={clsx(
        "fixed bottom-20 right-6 z-50 rounded-full p-3 transition-all duration-300 shadow-md",
        "bg-transparent border border-white",
        "text-white backdrop-blur-sm cursor-pointer animate-bounce hover:animate-none",
        isVisible
          ? "opacity-0 translate-y-10 pointer-events-none"
          : "opacity-100 translate-y-0"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="rgba(222, 217, 217, 1)"
      >
        <path d="M12 16.5l-7-7 1.41-1.42L12 13.66l5.59-5.58L19 9.5z" />
      </svg>
    </button>
  );
};

export default ScrollDown;
