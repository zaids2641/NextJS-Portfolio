import AnimatedReveal from "@/components/_animatioEffects/animationOnView";
import clsx from "clsx";
import Link from "next/link";

type HeadingCustomProps = {
  subTitle?: string | React.ReactNode;
  title: string | React.ReactNode;
  className?: string; // wrapper
  numberClassName?: string; // extra classes for number
  titleClassName?: string; // extra classes for title
  url?: string;
  isCenter?: boolean;
};

export default function HeadingCustom({
  subTitle,
  title,
  className,
  numberClassName,
  titleClassName,
  isCenter,
  url,
}: HeadingCustomProps) {
  return (
    <>
      <div className="flex flex-row justify-start">
        <div
          className={clsx(
            "relative mb-12 w-full min-h-[9rem] md:min-h-52 max-w-2xl overflow-hidden",
            className,
            isCenter && "mx-auto text-center"
          )}
        >
          {/* Background Number */}
          <AnimatedReveal
            direction="left"
            trigger="scroll"
            duration={0.9}
            delay={0}
          >
            <span
              className={clsx(
                "absolute top-0 left-0 text-[var(--neutral-gray)] font-raleway fw-600",
                numberClassName
              )}
              style={{
                fontSize: "clamp(6rem, 12.5vw, 9rem)",
              }}
            >
              {subTitle}
            </span>
          </AnimatedReveal>

          {/* Title */}
          <AnimatedReveal
            direction="left"
            trigger="scroll"
            duration={0.6}
            delay={0.15}
          >
            <span
              className={clsx(
                "absolute left-[clamp(1rem,3vw,2.5rem)] font-ubuntu-condensed fw-800",
                titleClassName
              )}
              style={{
                top: "clamp(3.5rem, 8vw, 5rem)",
                fontSize: "clamp(2.8rem, 4.5vw, 3.75rem)",
              }}
            >
              {title}
            </span>
          </AnimatedReveal>
        </div>
      </div>

      {url && (
        <Link
          href={url}
          className="flex flex-row gap-2 items-center content-center -translate-y-10 translate-x-3"
        >
          <span className="border-b-2 border-b-[var(--accent-teal)]">
            <span>View All</span>
            <span className="text-2xl leading-none translate-y-[-2px]">→</span>
          </span>
        </Link>
      )}
    </>
  );
}
