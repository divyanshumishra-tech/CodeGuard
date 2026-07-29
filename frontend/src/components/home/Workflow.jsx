import SectionTitle from "../common/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Upload Project",
    description: "Upload your source code or GitHub repository.",
  },
  {
    number: "02",
    title: "Static Analysis",
    description: "CodeGuard scans your project for issues.",
  },
  {
    number: "03",
    title: "AI Suggestions",
    description: "Receive smart recommendations to improve code quality.",
  },
  {
    number: "04",
    title: "Generate Report",
    description: "Download a complete analysis report.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="How It Works"
          subtitle="Analyze your code in four simple steps."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
            >
              <div className="mb-6 text-5xl font-bold text-blue-500">
                {step.number}
              </div>

              <h3 className="mb-4 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}