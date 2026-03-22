import React from "react";
import Image from "next/image";
import visibleProjects from "@/data/projects.json";

type Project = {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readMoreUrl: string;
  languages?: string[]; // 👈 Made optional '?' to resolve the TypeScript mismatch
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};

const Projects = () => {
  return (
    <div className="my-16 max-w-7xl mx-auto px-4 sm:px-6" id="projects">
      {/* 🏷️ Section Header */}
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Project Gallery
        </h2>
        <div className="flex items-center gap-1">
          <span className="w-16 h-[3px] bg-rose-500 rounded-full"></span>
          <span className="w-4 h-[3px] bg-rose-500 rounded-full"></span>
        </div>
      </div>

      {/* 🖥️ Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project: Project, index) => (
          <div
            key={index}
            className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            {/* Image Preview Container */}
            <div className="relative w-full h-52 overflow-hidden">
              <a
                href={project.readMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </a>
              <span className="absolute top-4 left-4 text-xs font-bold tracking-wider text-white bg-rose-500/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
                {project.category}
              </span>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-rose-500 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-1">
                {truncateText(project.description, 100)}
              </p>

              {/* 🛠️ Modern Tech Stack Badges */}
              {project.languages && project.languages.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.languages.map((lang, lIdx) => (
                    <span
                      key={lIdx}
                      className="text-xs font-mono font-medium tracking-tight text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/60 px-2.5 py-1 rounded-md"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              )}

              {/* Card Bottom Divider */}
              <hr className="my-4 border-gray-100 dark:border-gray-700" />

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                  {project.date}
                </span>

                <a
                  href={project.readMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-rose-500 hover:text-rose-600 transition-colors duration-200 group/link"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
