import Image from "next/image";
import type { ReactNode } from "react";

type PageBackgroundProps = {
  image: string;
  imageAlt: string;
  children: ReactNode;
};

export function PageBackground({ image, imageAlt, children }: PageBackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* z-0 (not negative): solid body/html navy used to cover -z backgrounds */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-950/55" aria-hidden />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
