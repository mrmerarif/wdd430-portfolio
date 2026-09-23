import { getProjects } from "@/lib/projects-db";

export default async function OpenSourceProjects() {
  const projects = await getProjects("opensource");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Open Source Projects</h1>

      <ul className="list-disc ml-6">
        {projects.map((project) => (
          <li key={project.id}>
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
}