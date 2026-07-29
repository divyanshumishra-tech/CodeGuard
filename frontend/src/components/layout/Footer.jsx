export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">
            CodeGuard
          </h2>

          <p className="mt-3 max-w-sm text-sm text-slate-400">
            AI-Powered Static Code Analyzer that helps developers
            detect bugs, security vulnerabilities, and improve
            code quality before deployment.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <a
            href="#features"
            className="text-slate-400 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#workflow"
            className="text-slate-400 transition hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#languages"
            className="text-slate-400 transition hover:text-white"
          >
            Supported Languages
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-blue-500"
          >
            GitHub
          </a>

          <a
            href="#"
            className="text-slate-400 transition hover:text-blue-500"
          >
            Documentation
          </a>

          <a
            href="#"
            className="text-slate-400 transition hover:text-blue-500"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} CodeGuard. All Rights Reserved.
      </div>
    </footer>
  );
}