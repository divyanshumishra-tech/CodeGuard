import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#workflow" },
    { name: "Languages", href: "#languages" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>

          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
  onClick={() => setMenuOpen(true)}
  className="rounded-lg p-2 text-white transition hover:bg-slate-800 md:hidden"
>
  <Menu size={28} />
</button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
  isOpen={menuOpen}
  onClose={() => setMenuOpen(false)}
  navLinks={navLinks}
/>
    </header>
  );
}