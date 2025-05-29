import Link from "next/link";

export default function NavLinks() {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 text-[1rem]">
      <li>
        <Link
          href="/"
          prefetch={false}
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Profile
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          prefetch={false}
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          prefetch={false}
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Project Gallery
        </Link>
      </li>
      {/* <li>
        <Link
          href="#"
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Blog
        </Link>
      </li> */}
      <li>
        <Link
          href="/contact"
          prefetch={false}
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
