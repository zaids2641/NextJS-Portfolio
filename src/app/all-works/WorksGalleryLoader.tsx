// components/workGallery/WorksGalleryLoader.tsx

import WorksGallery from "@/components/workGallery/WorkGallery";
import { getWorkSlides } from "@/data/work_slides";

export default async function WorksGalleryLoader() {
  const slides = await getWorkSlides();
  return <WorksGallery slides={slides} />;
}
