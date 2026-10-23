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
  languages?: string[];
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};

const Projects = () => {
  return (
    <section className="py-20 sm:py-24" id="projects">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
          Selected work
        </span>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.06em] text-white">
          Project Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project: Project, index) => (
          <article
            key={`${project.title}-${index}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(22,22,32,0.94),rgba(12,12,18,0.94))] shadow-[0_24px_60px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,45,85,0.35)]"
          >
            <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,45,85,0.28),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative p-3">
              <div className="relative h-52 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,255,255,0.02)]">
                <a href={project.readMoreUrl} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                  <Image
                    width={800}
                    height={600}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,12,0.08),rgba(8,8,12,0.68))]" />
                </a>
                <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-[rgba(8,8,12,0.65)] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col p-5 pt-2">
              <div className="mb-3 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                <span>{project.date}</span>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(255,45,85,0.7)]" />
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white transition-colors duration-200 group-hover:text-[var(--accent)]">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">
                {truncateText(project.description, 118)}
              </p>

              {project.languages && project.languages.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.languages.map((lang, lIdx) => (
                    <span
                      key={`${project.title}-${lang}-${lIdx}`}
                      className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/80"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 border-t border-[var(--line)] pt-4">
                <a
                  href={project.readMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-1"
                >
                  View Project
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
