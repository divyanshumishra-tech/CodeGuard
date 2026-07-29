import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30">
        <span className="text-lg font-bold text-white">C</span>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-white">
          Code<span className="text-blue-500">Guard</span>
        </h1>

        <p className="text-xs text-slate-400">
          AI Static Code Analyzer
        </p>
      </div>
    </Link>
  );
}