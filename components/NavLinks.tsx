'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  // Fix: allow /projects, /projects/school, /projects/opensource
  const isActive = (path: string) => {
    if (path === "/projects") {
      return pathname.startsWith("/projects");
    }
    return pathname === path;
  };

  const linkClasses = (path: string) =>
    isActive(path)
      ? "underline font-bold text-yellow-500"
      : "hover:underline";

  return (
    <nav aria-label="Primary Navigation">
      <ul className="flex gap-6 text-lg">

        {/* Home (Week 1 Portfolio) */}
        <li>
          <Link
            href="/"
            className={linkClasses("/")}
            aria-current={isActive("/") ? "page" : undefined}
          >
            Home
          </Link>
        </li>

        {/* Projects (Week 2 API pages) */}
        <li>
          <Link
            href="/projects"
            className={linkClasses("/projects")}
            aria-current={pathname.startsWith("/projects") ? "page" : undefined}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={linkClasses("/about")}
            aria-current={isActive("/about") ? "page" : undefined}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className={linkClasses("/contact")}
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
