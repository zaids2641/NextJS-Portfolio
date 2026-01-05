"use client";

import { useState } from "react";
import type { Slide } from "@/data/work_slides";

export function useWorksGallery(slides: Slide[]) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openSlider = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const closeSlider = () => setOpen(false);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  const next = () =>
    setIndex((i) => (i + 1) % slides.length);

  return {
    open,
    index,
    openSlider,
    closeSlider,
    prev,
    next,
  };
}
