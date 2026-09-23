export default function Loading() {
    return (
      <main className="animate-pulse space-y-4">
        <div className="h-9 w-64 rounded bg-slate-200" />
  
        <ul className="space-y-3">
          <li className="h-5 w-72 rounded bg-slate-200" />
          <li className="h-5 w-56 rounded bg-slate-200" />
          <li className="h-5 w-64 rounded bg-slate-200" />
        </ul>
      </main>
    );
  }