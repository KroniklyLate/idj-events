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
      <div className="fixed inset-0 -z-20">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}