import { notFound } from "next/navigation";
import { getWorkSlides } from "@/data/work_slides";
import Image from "next/image";
import { Suspense } from "react";
import CircleSpinner from "@/components/_spinner/circle";
import Breadcrumbs from "@/utils/breadcrumbs/BreadCrumbs";
import AppNavBar from "@/components/Navbar/AppNavBar";
import HeadingCustom from "@/components/shared/Heading";
import ContactMe from "@/app/app-component/contactMe/ContactMe";
import Footer from "@/components/Footer/Footer";
import MetaItem from "@/components/shared/MetaItem";
import WorksGallery from "@/components/workGallery/WorkGallery";
import {RelatedWork, OtherWork} from "@/components/RelstedWork/RelstedWork";


/**
 * The type `Params` in TypeScript React consists of a single property `handle` of type string.
 * @property {string} handle - A string representing a handle.
 */
type Params = {
  handle: string;
};


/**
 * The type `Props` in TypeScript React can have a property `params` that is either a `Promise` of
 * `Params` or just `Params`.
 * @property {Promise<Params> | Params} params - The `params` property in the `Props` type can be
 * either a `Promise` that resolves to a `Params` object or a direct `Params` object. This allows for
 * flexibility in handling asynchronous data when working with the `params` property.
 */
type Props = {
  params: Promise<Params> | Params; // could be a promise
};


export default async function SingleWorkPage({ params }: Props) {
  /* The line `const { handle: slug } = await params;` is using object destructuring in JavaScript to
  extract the `handle` property from the resolved `params` object and assign it to a new variable
  named `slug`. */
  const { handle: slug } = await params;


  /* The line `const slides = await getWorkSlides();` is calling the `getWorkSlides` function
  asynchronously to retrieve a list of work slides. This function likely fetches data from an
  external API or a local data source and returns a Promise that resolves to an array of work
  slides. By using the `await` keyword, the code is waiting for the Promise to resolve before
  assigning the result to the `slides` constant. This ensures that the `slides` variable contains
  the actual data before proceeding with further operations in the code. */
  const slides = await getWorkSlides();


  /* The code snippet `const work = slides.find((item) => item.handler === slug); if (!work) return
  notFound();` is performing the following actions: */
  const work = slides.find((item) => item.handler === slug);
  if (!work) return notFound();

  

  /* The `relatedWork` constant is filtering the `slides` array to find other works that have the same
  `projectType` as the current `work` being displayed on the page, but excluding the current `work`
  itself. This filter operation is used to display related works that share a similar project type
  with the current work, providing users with additional content that may be of interest to them. */
  const relatedWork = slides.filter(
    (item) =>
      item.projectType === work.projectType &&
      item.handler !== work.handler
  );


 /* The `if (relatedWork.length === 0)` statement is checking if there are no related works found based
 on the filtering criteria. If `relatedWork` array has a length of 0, it means that there are no
 other works with the same `projectType` as the current work being displayed on the page (excluding
 the current work itself). */
  if (relatedWork.length === 0) {
    console.log("No related work!");
  }


  return (
    <>
      <div className="w-full">
        <AppNavBar />
      </div>

      <Suspense fallback={<CircleSpinner />}>
        <main className="w-screen py-20">

          <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 flex flex-col gap-16">
            <Breadcrumbs />
            {/* Header */}
            <header className="flex flex-col gap-4">
              <span className="text-sm uppercase tracking-widest text-[var(--accent-teal)] font-inter">
                {work.category} · {work.projectType}
              </span>

              <h1 className="text-4xl md:text-5xl font-ubuntu-condensed leading-tight">
                {work.heading}
              </h1>

              <p className="text-sm text-white/60 font-inter">
                {work.projectClient} — {work.date}
              </p>
            </header>

            {/* Hero Image */}
            {work.image && (
              <div
                className="relative w-full overflow-hidden rounded-2xl shadow-lg"
                style={{ height: "clamp(360px, 60vw, 620px)" }}
              >
                <Image
                  src={work.image}
                  alt={work.imageAlt ?? work.heading}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 85vw,
               1200px"
                  className="object-cover"
                />
              </div>
            )}

            {/* Content */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Description */}
              <div className="lg:col-span-2">
                <p className="text-lg leading-relaxed font-inter">
                  {work.description}
                </p>
              </div>

              {/* Project Meta */}
              <aside className="p-6 flex flex-col gap-4 font-inter">
                <div className="flex flex-col gap-4">
                  <MetaItem label="Category" value={work.category} />
                  <MetaItem label="Project Type" value={work.projectType} />
                  <MetaItem label="Client" value={work.projectClient} />
                  <MetaItem label="Date" value={work.date} />
                  <MetaItem label="Stack" value={work.projectStack} />
                </div>

                {work.url && (
                  <div className="w-full flex items-center justify-center">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-full
                        flex items-center justify-center
                        border border-[var(--accent-teal)] text-white
                        bg-[var(--accent-teal)]
                        py-2 px-4
                        rounded-md text-sm tracking-wide uppercase font-inter
                        transition-colors
                        hover:bg-[var(--accent-teal)]/95
                      "
                    >
                      Project URL
                    </a>
                  </div>
                )}
              </aside>
            </section>

            <section id="relatedWork">
              <div className="m-auto">
                <HeadingCustom subTitle="Related" title="Works." />
                <RelatedWork slides={slides} currentWork={work} />
              </div>
            </section>

            <section id="otherWork">
              <div className="m-auto">
                <HeadingCustom subTitle="Other" title="Works." />
                <OtherWork slides={slides} currentWork={work} />
              </div>
            </section>
          </div>
        </main>
      </Suspense>

      <section className="w-screen py-14 bg-[var(--dark)]">
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
    </>
  );
}
