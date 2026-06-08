import type { ReactNode } from "react";

type PageBackgroundProps = {
  image: string;
  imageAlt: string;
  children: ReactNode;
};

export function PageBackground({ image, imageAlt, children }: PageBackgroundProps) {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={imageAlt}
      />
      <div className="relative">{children}</div>
    </div>
  );
}