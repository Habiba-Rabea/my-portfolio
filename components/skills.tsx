"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Backend & Core",
    skills: ["C#", "ASP.NET Core", "Entity Framework", "Web API", "SQL Server", "Python", "C++"],
  },
  {
    category: "Frontend Web",
    skills: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Tools & Architectures",
    skills: ["Git & GitHub", "Docker", "Postman", "REST APIs", "OOP", "Data Structures"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Stack</h2>
          <p className="text-neutral-400">Technologies and tools I work with daily</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-blue-400 mb-6 pb-2 border-b border-white/10">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-neutral-900/80 text-neutral-300 text-sm border border-neutral-800 hover:border-blue-500/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}