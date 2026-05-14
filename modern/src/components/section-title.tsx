export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  level = "h2",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  level?: "h1" | "h2";
}) {
  const HeadingTag = level;

  return (
    <header className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <HeadingTag>{title}</HeadingTag>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
