import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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

const projectsByYear = visibleProjects
  .map((project: Project) => ({
    ...project,
    timestamp: new Date(project.date).getTime(),
  }))
  .sort((first, second) => second.timestamp - first.timestamp)
  .reduce<Record<string, (Project & { timestamp: number })[]>>((years, project) => {
    const year = new Date(project.timestamp).getFullYear().toString();
    years[year] ??= [];
    years[year].push(project);
    return years;
  }, {});

const Projects = () => {
  return (
    <section className="py-20 sm:py-24" id="projects">
      <div className="mb-12 flex flex-col gap-3 sm:mb-16">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
          Selected work · In reverse chronology
        </span>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.06em] text-[var(--text)]">
          Projects, over time.
        </h2>
      </div>

      <div className="space-y-14 sm:space-y-20">
        {Object.entries(projectsByYear).map(([year, projects]) => (
          <div key={year} className="grid gap-5 md:grid-cols-[8rem_1fr] md:gap-8">
            <div className="flex items-start gap-3 border-b border-[var(--line)] pb-3 md:block md:border-0 md:pb-0">
              <span className="font-[var(--font-mono)] text-3xl font-medium tracking-[-0.08em] text-[var(--accent)] sm:text-4xl">
                {year}
              </span>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] md:mt-2">
                {projects.length} {projects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            <div className="relative space-y-5 before:absolute before:bottom-5 before:left-[7px] before:top-5 before:w-px before:bg-[var(--line)] sm:space-y-6">
              {projects.map((project, index) => (
                <article
                  key={`${project.title}-${index}`}
                  className="group relative grid gap-4 pl-8 sm:grid-cols-[minmax(12rem,0.82fr)_1.18fr] sm:gap-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-5 z-10 h-4 w-4 rounded-full border-[5px] border-[var(--bg)] bg-[var(--accent)] ring-1 ring-[color-mix(in_srgb,var(--accent)_45%,transparent)] transition-transform duration-200 group-hover:scale-125"
                  />

                  <a
                    href={project.readMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                    className="relative block h-48 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-hi)] sm:h-full sm:min-h-52"
                  >
                    <Image
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 360px"
                      src={project.image}
                      alt={project.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-[rgba(17,13,19,0.76)] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </a>

                  <div className="flex min-w-0 flex-col justify-center py-1">
                    <div className="mb-3 flex items-center gap-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                      <span>{project.date}</span>
                      <span aria-hidden="true" className="h-px w-7 bg-[var(--line)]" />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent)] sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {project.description}
                    </p>

                    {project.languages && project.languages.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.languages.map((language) => (
                          <span
                            key={`${project.title}-${language}`}
                            className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1 text-[9px] uppercase tracking-[0.1em] text-[var(--muted)]"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    )}

                    <a
                      href={project.readMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[color-mix(in_srgb,var(--accent)_45%,transparent)] pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
                    >
                      View project <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
