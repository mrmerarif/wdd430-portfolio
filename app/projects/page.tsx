// app/projects/page.tsx

export default async function ProjectsOverview() {
  const res = await fetch("/api/projects", { cache: "no-store" });
  const data = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>

      <ul className="list-disc ml-6">
        {data.map((project: any) => (
          <li key={project.id}>
            {project.title} ({project.type})
          </li>
        ))}
      </ul>
    </div>
  );
}
