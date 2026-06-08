import type { ReactNode } from "react";
import { BrandLogo } from "@/components/BrandLogo";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  tall?: boolean;
  showLogo?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  tall = false,
  showLogo = true,
}: PageHeroProps) {
  return (
    <section
      className={`relative text-white ${
        tall ? "min-h-[70vh] sm:min-h-[75vh]" : "min-h-[40vh] sm:min-h-[45vh]"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 ${
          tall ? "py-20 sm:py-28 lg:py-32" : "py-16 sm:py-20"
        }`}
      >
        {showLogo && (
          <BrandLogo size={tall ? "hero" : "lg"} className="mb-6 drop-shadow-lg" priority />
        )}
        {eyebrow && (
          <p className="text-on-image text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase sm:text-sm">
            {eyebrow}
          </p>
        )}
        <h1
          className={`text-on-image font-display font-semibold tracking-tight ${
            tall
              ? "mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl"
              : "mt-3 max-w-2xl text-3xl sm:text-4xl lg:text-5xl"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p className="text-on-image mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}