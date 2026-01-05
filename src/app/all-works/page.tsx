import Footer from "@/components/Footer/Footer";
import AppNavBar from "@/components/Navbar/AppNavBar";
import HeadingCustom from "@/components/shared/Heading";
import WorksGallery from "@/components/workGallery/WorkGallery";
import { getWorkSlides } from "@/data/work_slides";
import Breadcrumbs from "@/utils/breadcrumbs/BreadCrumbs";
import ContactMe from "../app-component/contactMe/ContactMe";

export default async function PortfolioPage() {
  const slides = await getWorkSlides();

  return (
    <>
      <div className="w-full">
        <AppNavBar />
      </div>

      <main className="w-screen py-20">

        <section className="w-full px-12 lg:w-3/4 m-auto flex flex-col gap-12">
          <Breadcrumbs />
          <HeadingCustom subTitle="Projects" title="All Works." />
          <WorksGallery slides={slides} />
        </section>
      </main>

      <section className="w-screen py-14 bg-[var(--dark)]">
        <div className="flex flex-col gap-4 w-full px-12 lg:w-3/4 m-auto">
          <HeadingCustom
            subTitle="Contact"
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
    </>
  );
}
