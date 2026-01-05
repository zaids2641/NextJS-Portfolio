'use client'

import { useContactModal } from "@/services/useContactModal";
import ContactModal from "../contactMe/ContactMeModal";
import { useRouter } from "next/navigation";

function IntroText() {
  const { open, openModal, closeModal } = useContactModal();
  const router = useRouter();

  const goToAbout = () => {
  router.push("/#about_me");
};

  const goToContact = () => {
  router.push("/#contact");
};
  
  return (
    <>
      <div className="relative w-full h-full">
      <div className="relative min-h-screen flex items-end w-full">
        <div className="px-18 pb-24 w-full">
          <div className="w-full sub_header">
            <span className="text-[var(--accent-teal)] uppercase text-2xl font-inter">
              Hello
            </span>
          </div>
          <div>
            <div className="text-black text-left font-ubuntu-condensed">
              <h1 className="fluid_text sm:text-4xl md:text-5xl font-ubuntu-condensed leading-snug text-nowrap">
                I'm Johhny D. <br/>
                frontend developer <br />
                base in Somewhere.
              </h1>
            </div>

            <div className="h-10"></div>
            <div className="flex flex-col md:flex-row md:max-w-xl md:justify-self-center lg:justify-self-start gap-5 py-6 button_container">
              <button
                onClick={goToAbout}
                className="
                text-md
                text-center
                bg-[var(--dark)]
                text-white
                py-4 px-10
                font-semibold
                transition-colors duration-200
                hover:bg-[var(--accent-teal)]
                hover:text-white
                cursor-pointer
                font-inter
              "
              >
                More About Me
              </button>
              <button
                 onClick={goToContact}
                className="
                text-md
                text-center
                bg-transparent
                border
                border-[var(--accent-teal)]
                text-[var(--accent-teal)]
                py-4 px-10
                font-semibold
                transition-colors duration-200
                hover:bg-[var(--accent-teal)]
                hover:text-white
                cursor-pointer
                font-inter
              "
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactModal isOpen={open} onClose={closeModal} />
    </>
  );
}

export default IntroText;
