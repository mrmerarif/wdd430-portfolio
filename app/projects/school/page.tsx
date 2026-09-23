import { Suspense } from "react";
import SchoolProjectList from "./SchoolProjectList";

function SchoolProjectSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-5 w-72 rounded bg-slate-200" />
      <div className="h-5 w-56 rounded bg-slate-200" />
    </div>
  );
}

export default function SchoolProjects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">School Projects</h1>

      <Suspense fallback={<SchoolProjectSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </div>
  );
}