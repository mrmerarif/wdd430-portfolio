'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  // Fix hydration mismatch: allow all /projects subroutes
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

        {/* Home */}
        <li>
          <Link
            href="/"
            className={linkClasses("/")}
            aria-current={isActive("/") ? "page" : undefined}
          >
            Home
          </Link>
        </li>

        {/* Projects */}
        <li>
          <Link
            href="/projects"
            className={linkClasses("/projects")}
            aria-current={pathname.startsWith("/projects") ? "page" : undefined}
          >
            Projects
          </Link>
        </li>

        {/* School */}
        <li>
          <Link
            href="/projects/school"
            className={linkClasses("/projects/school")}
            aria-current={isActive("/projects/school") ? "page" : undefined}
          >
            School
          </Link>
        </li>

        {/* Open Source */}
        <li>
          <Link
            href="/projects/opensource"
            className={linkClasses("/projects/opensource")}
            aria-current={isActive("/projects/opensource") ? "page" : undefined}
          >
            Open Source
          </Link>
        </li>

        {/* About */}
        <li>
          <Link
            href="/about"
            className={linkClasses("/about")}
            aria-current={isActive("/about") ? "page" : undefined}
          >
            About
          </Link>
        </li>

        {/* Contact */}
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
