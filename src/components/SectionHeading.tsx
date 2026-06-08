type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-on-image mb-3 text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-on-image font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-on-image mt-4 text-base leading-relaxed text-white sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}