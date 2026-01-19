export default function Footer() {
  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-6xl mx-auto text-sm text-neutral-500 flex justify-between">
        <span>© {new Date().getFullYear()} Shannon Lin</span>
        <div className="flex gap-4">
          <a href="https://github.com" className="hover:opacity-60">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:opacity-60">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
