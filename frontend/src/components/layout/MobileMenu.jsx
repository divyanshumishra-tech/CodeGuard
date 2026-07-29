import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Button from "../common/Button";

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-lg md:hidden">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 p-6">

        <h2 className="text-xl font-bold text-white">
          Code<span className="text-blue-500">Guard</span>
        </h2>

        <button
          onClick={onClose}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          <X size={28} />
        </button>

      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-6 px-6 py-8">

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            className="text-lg font-medium text-slate-300 transition hover:text-blue-400"
          >
            {link.name}
          </a>
        ))}

      </nav>

      {/* Bottom Buttons */}
      <div className="absolute bottom-8 left-6 right-6 space-y-4">

        <Link
          to="/login"
          onClick={onClose}
        >
          <Button
            variant="secondary"
            className="w-full"
          >
            Login
          </Button>
        </Link>

        <Link
          to="/register"
          onClick={onClose}
        >
          <Button className="w-full">
            Get Started
          </Button>
        </Link>

      </div>

    </div>
  );
}