import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Few Steps Meals",
    description:
      "A simple meal planning app that helps users create easy recipes with minimal steps.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "API Integration"],
    link: "https://github.com/mrmerarif/few-steps-meals",
  },
  {
    title: "Car Troubleshooting Helper",
    description:
      "A tool that helps users diagnose car issues based on symptoms and provides repair suggestions.",
    technologies: ["JavaScript", "Node.js", "NHTSA API"],
    link: "https://github.com/mrmerarif/car-helper",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          Here are some of my recent projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}
