
'use client'

import ContactModal from "./ContactMeModal";
import { useContactModal } from "@/services/useContactModal";

type Props = {
  contact: Awaited<
    ReturnType<typeof import("@/data/aboutme").getAboutData>
  >;
};

export default function ContactMeClient({ contact }: Props) {
  const { open, openModal, closeModal } = useContactModal();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-22 lg:gap-18">
        {/* Text */}
        <div className="flex flex-col gap-4 w-full">
          {contact.footerMessage.map((text, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed text-white font-inter"
            >
              {text}
            </p>
          ))}

          {/* Button */}
          <div>
            <button
              onClick={openModal}
              className="w-full text-xl bg-[var(--accent-teal)] py-4 text-white font-semibold cursor-pointer"
            >
              Message Me
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-row gap-16 w-full">
          <div>
            <h3 className="inline-block mb-6 text-2xl font-ubuntu-condensed fw-800 text-white border-b-2 border-b-[var(--accent-teal)]">
              Social Links
            </h3>
            <ul className="space-y-3 font-inter leading-relaxed">
              {contact.socials.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="inline-block mb-6 text-2xl font-ubuntu-condensed fw-800 text-white border-b-2 border-b-[var(--accent-teal)]">
              Contact Me
            </h3>
            <ul className="space-y-3 font-inter leading-relaxed">
              {contact.contact.map((item, i) => (
                <li key={i} className="text-white font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ContactModal isOpen={open} onClose={closeModal} />
    </div>
  );
}
