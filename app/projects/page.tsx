import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from "@/lib/projects-db";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";

export const dynamic = "force-dynamic";

export default async function ProjectsOverview(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const query = searchParams?.query?.trim() || "";

  const requestedPage = Number(searchParams?.page);
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  const projects = await fetchFilteredProjects(query, currentPage);
  const totalPages = await fetchProjectsPages(query);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>

      <ProjectSearch />

      {projects.length > 0 ? (
        <ul className="list-disc ml-6">
          {projects.map((project) => (
            <li key={project.id}>
              {project.title} ({project.type})
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects found.</p>
      )}

      <Pagination totalPages={totalPages} />
    </div>
  );
}