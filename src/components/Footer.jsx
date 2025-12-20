export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-zinc-500 text-xs">
          © {new Date().getFullYear()} Sushant Patil · Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}