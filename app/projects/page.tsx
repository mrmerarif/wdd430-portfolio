// app/projects/page.tsx

export default async function ProjectsOverview() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>

      <ul className="list-disc ml-6">
        {data.map(
          (project: {
            id: number;
            title: string;
            type: "opensource" | "school";
          }) => (
            <li key={project.id}>
              {project.title} ({project.type})
            </li>
          )
        )}
      </ul>
    </div>
  );
}
