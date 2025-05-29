export default function NavLinks() {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 text-[1rem]">
      <li>
        <a
          href="/"
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Profile
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="/projects"
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Project Gallery
        </a>
      </li>
      {/* <li>
        <a
          href="#"
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Blog
        </a>
      </li> */}
      <li>
        <a
          href="/contact"
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
