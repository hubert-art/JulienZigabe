import { ChevronRight, Home } from "lucide-react";

export default function PageHeader({ label, title, description }) {
  return (
    <header className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-5 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl animate-rise">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Home size={14} />
          <span>Home</span>
          <ChevronRight size={14} />
          <span className="text-slate-600">{label}</span>
        </div>
        <p className="section-kicker mt-7">{label}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </header>
  );
}
