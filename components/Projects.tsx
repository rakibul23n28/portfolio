import React from "react";

import visibleProjects from "@/data/projects.json";
import Image from "next/image";

type Project = {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readMoreUrl: string;
};

const Projects = () => {
  return (
    <div className="my-10" id="projects">
      <div className="flex flex-col gap-2 my-4">
        <h2 className="text-4xl font-serif font-semibold">Project Gellery</h2>
        <span className="w-16 h-[4px] bg-rose-500 rounded"></span>
        <span className="w-8 h-[4px] bg-rose-500 rounded"></span>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project: Project, index) => (
          <div key={index} className="card-style rounded-lg shadow-md p-1">
            <div className="w-full relative group preview cursor-pointer overflow-hidden rounded-lg">
              <a
                href={project.readMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.title}
                  className="object-cover object-center w-full h-64 rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>

            <div className="my-4 mx-2">
              <span className="text-rose-500 uppercase text-2xl ">
                {project.category}
              </span>
              <h1 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-rose-500 dark:text-gray-400">
                  {project.date}
                </p>

                <a
                  href={project.readMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-green-500 underline hover:text-blue-400"
                >
                  Read more
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
