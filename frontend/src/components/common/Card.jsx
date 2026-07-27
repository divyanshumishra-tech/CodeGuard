export default function Card({ title, description, icon }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-blue-500 hover:-translate-y-1">
      <div className="mb-4 text-4xl">{icon}</div>

      <h3 className="mb-2 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="text-slate-400">
        {description}
      </p>
    </div>
  );
}