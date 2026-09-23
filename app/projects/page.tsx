import { getProjects } from "@/lib/projects-db";

export const dynamic = "force-dynamic";

export default async function ProjectsOverview() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>

      <ul className="list-disc ml-6">
        {projects.map((project) => (
          <li key={project.id}>
            {project.title} ({project.type})
          </li>
        ))}
      </ul>
    </div>
  );
}