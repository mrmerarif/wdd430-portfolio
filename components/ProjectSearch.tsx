"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());

    // A new search always starts on page 1
    params.set("page", "1");

    if (term.trim()) {
      params.set("query", term.trim());
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="search"
      placeholder="Search projects..."
      defaultValue={searchParams.get("query")?.toString()}
      onChange={(event) => handleSearch(event.target.value)}
      className="mb-6 w-full rounded border px-3 py-2"
    />
  );
}