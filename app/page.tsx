import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Few Steps Meals",
    description:
      "A simple meal planning app that helps users create easy recipes with minimal steps and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://mrmerarif.github.io/wdd131/few-steps-meals/index.html",
  },
  {
    title: "Few Steps Meals Blog",
    description:
      "A companion blog page for the Few Steps Meals project, featuring recipe posts and clean responsive layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://mrmerarif.github.io/wdd131/few-steps-meals/blog.html",
  },
  {
    title: "Basic Layout (WDD130)",
    description:
      "A responsive layout project demonstrating structured design principles and flexible page composition using CSS.",
    technologies: ["HTML", "CSS"],
    link: "https://mrmerarif.github.io/wdd130/week02/basic-layout.html",
  },
  {
    title: "Media Query (WDD131)",
    description:
      "A project showcasing responsive design using CSS media queries to adapt layouts for different screen sizes.",
    technologies: ["HTML", "CSS"],
    link: "https://mrmerarif.github.io/wdd131/week02/media-query.html",
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
