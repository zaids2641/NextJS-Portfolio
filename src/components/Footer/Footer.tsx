import React from "react";
import { getFoterData } from "@/data/footer_data";

async function Footer() {
  const footerData = await getFoterData();

  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200/10 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        
        {/* Left */}
        <span>
          {footerData.dateCreated} - {year} · {footerData.author}
        </span>

        {/* Right */}
        <span className="tracking-wide">
          {footerData.stack}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
