export default function NavLinks() {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
      <li>
        <a
          href="#"
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Project Showcase
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
          href="#contact"
          className="block px-4 py-2 text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
