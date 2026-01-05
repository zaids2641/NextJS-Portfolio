import Image, { StaticImageData } from "next/image";
import React from "react";

type SharedImageData = {
  image: string | StaticImageData;
  imageAlt?: string;
  heading?: string;
};

type ImageProps = {
  data: SharedImageData;
};

function SharedImage({ data }: ImageProps) {
  return (
    <div
      className="relative w-full group"
      style={{ height: "clamp(450px, 60vw, 650px)" }}
    >
      <Image
        src={data.image}
        alt={data.imageAlt ?? data.heading ?? "Image"}
        fill
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
        className="object-cover rounded-xl"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl group-hover:backdrop-blur-[5px]" />
    </div>
  );
}

export default SharedImage;
