import "./Section.css";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="site-section">
      <div className="site-section-inner">
        <h2 className="site-section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
