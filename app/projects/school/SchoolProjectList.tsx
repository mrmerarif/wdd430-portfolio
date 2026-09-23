import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectList() {
  const projects = await getProjects("school");

  return (
    <ul className="list-disc ml-6">
      {projects.map((project) => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  );
}