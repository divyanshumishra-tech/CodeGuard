import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">

        {/* Left Content */}
        <div className="max-w-2xl">

         <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            AI-Powered Static Code Analyzer
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Build Better Software
            <span className="block text-blue-500">
              Before You Deploy
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            CodeGuard helps developers detect bugs, security
            vulnerabilities, performance issues, and code smells
            using intelligent static code analysis—so you can
            ship reliable software with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link to="/login">
              <Button>
                Start Free Analysis
              </Button>
            </Link>

            <a href="#features">
              <Button variant="secondary">
                Learn More
              </Button>
            </a>

          </div>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-1 gap-4 text-sm text-slate-300 sm:grid-cols-3">

            <div className="flex items-center gap-2">
              <span className="text-green-400">✔</span>
              AI Suggestions
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">✔</span>
              Multi-Language Support
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">✔</span>
              Download Reports
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="w-full max-w-lg">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-lg font-semibold text-white">
                Analysis Report
              </h3>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                Completed
              </span>

            </div>

            <div className="space-y-5">

              <div className="flex justify-between text-slate-300">
                <span>Files Scanned</span>
                <span className="font-semibold text-white">48</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Bugs Found</span>
                <span className="font-semibold text-red-400">12</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Security Issues</span>
                <span className="font-semibold text-yellow-400">3</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Performance Warnings</span>
                <span className="font-semibold text-orange-400">5</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Code Quality</span>
                <span className="font-semibold text-green-400">
                  94%
                </span>
              </div>

            </div>

            <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
              Download Report
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}