export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-6xl font-bold text-blue-500">
        CodeGuard
      </h1>

      <p className="mt-6 text-xl text-gray-300">
        AI Powered Static Code Analyzer
      </p>

      <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
}