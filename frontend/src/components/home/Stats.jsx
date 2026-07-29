const stats = [
  { number: "10K+", label: "Projects Analysed" },
  { number: "50K+", label: "Issues Detected" },
  { number: "15+", label: "Languages" },
  { number: "99%", label: "Accuracy" },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <h2 className="text-5xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="mt-3 text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}