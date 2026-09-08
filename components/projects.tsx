import React from "react";
import { Folder, ExternalLink } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0B0914] text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title matched with upper section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            A selection of full-stack web applications and software engineering projects I&apos;ve built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id || project.title}
              className="group relative flex flex-col justify-between p-6 bg-[#130F26]/60 border border-purple-900/30 hover:border-purple-500/40 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 shadow-lg shadow-purple-950/10"
            >
              <div>
                {/* Header: Purple Styled Folder & Links */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-purple-400 group-hover:text-purple-300 transition-colors">
                    <Folder className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-3">
                    {/* GitHub Link */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/20 transition-all"
                        title="View Source Code on GitHub"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}

                    {/* Live Demo Link */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/20 transition-all"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Badges - Purple Themed */}
              <div className="pt-4 border-t border-purple-950/80">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-[#18122B] text-purple-300 border border-purple-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;