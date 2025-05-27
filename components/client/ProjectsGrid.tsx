"use client";

import React, { useState } from "react";
import { ProjectType } from "../Projects"; // or wherever it's defined
import ProjectImageSlider from "./ProjectImageSlider";

type Props = {
  projects: ProjectType[];
};

const INITIAL_VISIBLE = 6;
const LOAD_MORE = 3;

const ProjectsGrid: React.FC<Props> = ({ projects }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE, projects.length));
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <ProjectImageSlider project={project} />

            <div className="mt-8">
              <span className="text-blue-500 uppercase">
                {project.category}
              </span>
              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                  >
                    {project.author}
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.date}
                  </p>
                </div>
                <a
                  href={project.readMoreUrl}
                  className="inline-block text-blue-500 underline hover:text-blue-400"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < projects.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 text-white bg-rose-500 rounded hover:bg-rose-600"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;
