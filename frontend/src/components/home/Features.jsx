import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";

const features = [
  {
    icon: "🔒",
    title: "Security Analysis",
    description: "Detect vulnerabilities before deployment.",
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Find inefficient code and optimize execution.",
  },
  {
    icon: "🤖",
    title: "AI Suggestions",
    description: "Receive intelligent recommendations to improve code quality.",
  },
  {
    icon: "📊",
    title: "Quality Metrics",
    description: "View maintainability and complexity insights.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Powerful Features"
          subtitle="Everything you need to analyse, improve, and secure your code."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}