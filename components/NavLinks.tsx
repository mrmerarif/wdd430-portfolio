'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    pathname === path
      ? "underline font-bold text-yellow-300"
      : "hover:underline";

  return (
    <nav aria-label="Primary Navigation">
      <ul className="flex gap-6 text-lg">
        <li>
          <Link
            href="/"
            className={linkClasses("/")}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={linkClasses("/about")}
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className={linkClasses("/contact")}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            href="/projects"
            className={linkClasses("/projects")}
            aria-current={pathname === "/projects" ? "page" : undefined}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
