import AppNavBar from "@/components/Navbar/AppNavBar";
import IntroText from "./app-component/IntroText/IntroText";
import IntroImage from "./app-component/IntroImage/IntroImage";
import ScrollToHash from "@/utils/scrollToHash";
import AboutSection from "./app-component/AboutMe/AboutSection";
import HeadingCustom from "@/components/shared/Heading";
import { getWorkSlides } from "@/data/work_slides";
import WorksGallery from "@/components/workGallery/WorkGallery";
import ContactMe from "./app-component/contactMe/ContactMe";
import ThemedMain from "@/components/ThemedMain";
import ScrollToTopButton from "@/utils/ScrollToTopButton";
import Footer from "@/components/Footer/Footer";
import NavBarContainer from "@/components/Navbar/NavBarContainer";

export default async function HomeContent() {
  const slides = await getWorkSlides();

  return (
    <>
      <ScrollToHash />
      <header id="home" className="relative w-screen h-screen">
        <div className="absolute top-0 h-18 w-full bg-white"></div>
        <NavBarContainer />
        <div className="flex flex-row h-full">
          <div className="bg-[var(--neutral-gray)] w-full h-full block_hidden">
            <IntroText />
          </div>
          <div className="bg-white w-full h-full">
            <IntroImage />
          </div>
        </div>
      </header>

      <ThemedMain>
        <section id="about_me" className="w-screen py-14">
          <div className="flex flex-col gap-4 w-full px-12 lg:w-3/4 m-auto">
            <HeadingCustom subTitle="01" title="About me." />
            <AboutSection />
          </div>
        </section>

        <section id="works" className="w-screen py-14">
          <div className="flex flex-col gap-4 w-full px-12 lg:w-3/4 m-auto">
            <HeadingCustom
              subTitle="02"
              title="Latest Of My Works."
              url="/all-works"
            />
            <WorksGallery slides={slides} />
          </div>
        </section>

        <section id="contact" className="w-screen py-14 bg-[var(--dark)]">
          <div className="flex flex-col gap-4 w-full px-12 lg:w-3/4 m-auto">
            <HeadingCustom
              subTitle="03"
              title="Get In Touch."
              numberClassName="text-white/20"
              titleClassName="text-white"
            />
            <ContactMe />
          </div>
        </section>
        <section className="bg-[var(--dark)]">
          <Footer />
        </section>
      </ThemedMain>
      <ScrollToTopButton />
    </>
  );
}
