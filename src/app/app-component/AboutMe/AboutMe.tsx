import { getAboutData } from "@/data/aboutme";
import React from "react";

async function AboutMe() {
  const about = await getAboutData();

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        {about.description.map((text, i) => (
          <p key={i} className="text-lg leading-relaxed font-inter max-w-full">
            {text}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 px-6 sm:px-4 max-w-7xl mx-auto">
        <div>
          <h3 className="inline-block mb-6 text-2xl sm:text-3xl lg:text-3xl leading-tight tracking-tight font-ubuntu-condensed fw-800 border-b-2 border-b-[var(--accent-teal)]">
            Experience
          </h3>

          <ul className="space-y-3 font-inter">
            {about.experience.map((item, i) => (
              <li key={i} className="flex flex-col">
                <span className="font-semibold text-nowrap">
                  {item.company}
                </span>
                <span className="text-sm text-neutral-500 text-nowrap">
                  {item.role}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="inline-block mb-6 text-2xl sm:text-3xl lg:text-3xl leading-tight tracking-tight font-ubuntu-condensed fw-800 border-b-2 border-b-[var(--accent-teal)]">
            Awards
          </h3>
          <ul className="space-y-3 font-inter">
            {about.awards.map((item, i) => (
              <li key={i} className="flex flex-col">
                <span className="font-semibold">{item.title}</span>
                <span className="text-sm text-neutral-500">
                  {item.source} — {item.year}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="inline-block mb-6 text-2xl sm:text-3xl lg:text-3xl leading-tight tracking-tight font-ubuntu-condensed fw-800 border-b-2 border-b-[var(--accent-teal)]">
            Skills
          </h3>
          <ul className="space-y-3 font-inter">
            {about.skills.map((item, i) => (
              <li key={i} className="text-sm font-medium tracking-wide">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
