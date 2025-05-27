import projects from "@/data/projects.json" assert { type: "json" };
import ProjectsGrid from "./client/ProjectsGrid"; // NEW client component

export type ProjectType = {
  images: string[];
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readMoreUrl: string;
};

const typedProjects: ProjectType[] = projects;

const Projects = () => {
  return (
    <section id="projects">
      <div className="container py-10 mx-auto">
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <div className="flex flex-col gap-2 flex-4">
            <h2 className="text-3xl font-serif font-semibold">
              Recent Projects
            </h2>
            <span className="w-16 h-[4px] bg-rose-500 rounded"></span>
            <span className="w-8 h-[4px] bg-rose-500 rounded"></span>
          </div>
        </div>
        <ProjectsGrid projects={typedProjects} />
      </div>
    </section>
  );
};

export default Projects;
