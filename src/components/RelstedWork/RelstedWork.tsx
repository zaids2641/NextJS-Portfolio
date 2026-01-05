import type { Slide } from "@/data/work_slides";
import WorksGallery from "@/components/workGallery/WorkGallery";

type Props = {
  slides: Slide[];
  currentWork: Slide;
};

export function RelatedWork({ slides, currentWork }: Props) {
  const relatedWork = slides.filter(
    (item) =>
      item.projectType === currentWork.projectType &&
      item.handler !== currentWork.handler
  );

  if (!relatedWork.length) return null;

  return <WorksGallery slides={relatedWork} />;
}

export function OtherWork({ slides, currentWork }: Props) {
  const otherWork = slides.filter(
    (item) =>
      item.category === currentWork.category &&
      item.handler !== currentWork.handler
  );

  if (!otherWork.length) return null;

  return <WorksGallery slides={otherWork} />;
}
