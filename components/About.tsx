import React from "react";
import portfolio from "@/data/portfolio.json";
import { CheckCircle2, Link2Icon } from "lucide-react";

const About = () => {
  return (
    <div className="flex items-center min-h-[70vh] py-16" id="about">
      <div className="flex flex-col gap-12 dark:text-white w-full max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="flex items-center gap-1">
            <span className="w-16 h-[4px] bg-rose-500 rounded-full"></span>
            <span className="w-4 h-[4px] bg-rose-500 rounded-full"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Personal Information Cards */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-800/50 dark:border dark:border-gray-700/50 p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  {
                    label: "Nationality",
                    value: portfolio.personalInfo.nationality,
                  },
                  { label: "Location", value: portfolio.personalInfo.location },
                  { label: "Degree", value: portfolio.personalInfo.degree },
                  {
                    label: "Employment",
                    value: portfolio.personalInfo.employment,
                  },
                  { label: "Email", value: portfolio.personalInfo.email },
                  { label: "Phone", value: portfolio.personalInfo.phone },
                  {
                    label: "Freelance",
                    value: portfolio.personalInfo.freelance,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col py-2 border-b border-gray-100 dark:border-gray-700/50"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">
                      {item.value}
                    </span>
                  </div>
                ))}

                {/* Website URL standalone link */}
                <div className="flex flex-col py-2 border-b border-gray-100 dark:border-gray-700/50">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Website
                  </span>
                  <a
                    href={portfolio.personalInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-rose-500 hover:text-rose-600 mt-1 underline decoration-dotted"
                  >
                    Visit Website <Link2Icon size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 p-4 bg-rose-50 dark:bg-rose-500/10 rounded-xl">
              <CheckCircle2 className="text-rose-500 flex-shrink-0" size={24} />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Open to collaborating on full-stack architecture and real-time
                typescript projects.
              </p>
            </div>
          </div>

          {/* Right: Modern Visual Statistics & Tech Badges */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-100 dark:border-gray-700/50 h-full">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Technical Mastery
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Proficiency weighted by project experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {portfolio.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-rose-500 dark:hover:border-rose-500 transition-all duration-300 w-full sm:w-[calc(50%-0.5rem)]"
                >
                  <div className="flex flex-col flex-1">
                    <span className="text-sm font-bold text-gray-800 dark:text-white group-hover:text-rose-500 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      Expertise level
                    </span>
                  </div>
                  <span className="text-lg font-extrabold text-gray-900 dark:text-white font-mono">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
