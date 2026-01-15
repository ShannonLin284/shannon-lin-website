export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 mt-16">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
        {children}
      </div>
    </section>
  );
}
