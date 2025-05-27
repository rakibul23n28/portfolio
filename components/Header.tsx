// import Logo from "./Logo";
import Image from "next/image";
import NavLinks from "./NavLinks";
import MenuToggle from "./client/MenuToggle"; // 👈 Only this is a client component

export default function Navbar() {
  return (
    <nav className="bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className=" relative max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://lh3.googleusercontent.com/a/ACg8ocLeD7xn5GPacjLH7ShtWA3WcFnSfVkXywJZRUvrjKDKeViKu8bo=s192-c-rg-br100"
            className="h-8"
            alt="Logo"
            width={32}
            height={32}
            loading="lazy"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Portfolio
          </span>
        </a>
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <MenuToggle /> {/* 👈 Only this needs "use client" */}
        </div>
      </div>
    </nav>
  );
}
