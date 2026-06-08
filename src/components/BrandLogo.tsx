import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/site-data";

const sizeMap = {
  xs: { src: brandAssets.mark128, width: 128, height: 128, className: "h-10 w-10" },
  sm: { src: brandAssets.mark256, width: 256, height: 256, className: "h-12 w-12" },
  md: { src: brandAssets.mark512, width: 512, height: 512, className: "h-20 w-20 sm:h-24 sm:w-24" },
  lg: { src: brandAssets.mark512, width: 512, height: 512, className: "h-28 w-28 sm:h-32 sm:w-32" },
  xl: { src: brandAssets.mark1024, width: 1024, height: 1024, className: "h-36 w-36 sm:h-44 sm:w-44" },
  hero: {
    src: brandAssets.mark1024,
    width: 1024,
    height: 1024,
    className: "h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48",
  },
} as const;

type BrandLogoProps = {
  size?: keyof typeof sizeMap;
  className?: string;
  priority?: boolean;
  href?: string;
  onClick?: () => void;
};

export function BrandLogo({
  size = "sm",
  className = "",
  priority = false,
  href,
  onClick,
}: BrandLogoProps) {
  const config = sizeMap[size];
  const image = (
    <Image
      src={config.src}
      alt="I DJ Events"
      width={config.width}
      height={config.height}
      priority={priority}
      className={`${config.className} ${className}`.trim()}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="group inline-flex shrink-0 transition-opacity hover:opacity-90"
      >
        {image}
      </Link>
    );
  }

  return image;
}