"use client";

import { Code2, Layers, Server, Database } from "lucide-react";

const keyHighlights = [
  {
    title: ".NET Core",
    subtitle: "Backend & C# APIs",
    icon: <Server className="w-5 h-5 text-purple-400" />,
  },
  {
    title: "React JS",
    subtitle: "Frontend Interfaces",
    icon: <Layers className="w-5 h-5 text-fuchsia-400" />,
  },
  {
    title: "Clean Code",
    subtitle: "Scalable Architecture",
    icon: <Code2 className="w-5 h-5 text-indigo-400" />,
  },
  {
    title: "RESTful APIs",
    subtitle: "SQL & Data Services",
    icon: <Database className="w-5 h-5 text-purple-300" />,
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-purple-500/10 py-12 sm:py-16 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] top-1/2 -left-20 -translate-y-1/2 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        
        {/* Subtle Section Badge Header */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 tracking-wider uppercase">
            About Me
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
          
          {/* Main Narrative Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug mb-4">
              A full-stack developer focused on{" "}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                architecture
              </span>
              , clean code, and robust delivery.
            </h2>

            <div className="space-y-3 text-pretty leading-relaxed text-slate-300 text-sm sm:text-base">
              <p>
                I&apos;m Habiba, a Full-Stack Web Developer specializing in{" "}
                <strong className="text-purple-300 font-semibold">ASP.NET Core</strong>,{" "}
                <strong className="text-purple-300 font-semibold">C#</strong>, and{" "}
                <strong className="text-purple-300 font-semibold">React</strong>. I build responsive web applications and scalable back-end services with a strong foundation in software architecture, database management, and RESTful API design.
              </p>
              <p>
                For technology startups and modern applications, that means product-ready systems: secure authentication, well-modelled SQL Server data layers, and React interfaces that stay fast and maintainable as you grow.
              </p>
            </div>
          </div>

          {/* Technical Highlights Grid */}
          <div className="grid grid-cols-2 gap-3 self-start">
            {keyHighlights.map((item) => (
              <div
                key={item.title}
                className="group p-4 rounded-xl bg-gradient-to-b from-purple-900/25 via-slate-900/60 to-purple-950/30 border border-purple-500/20 backdrop-blur-xl hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 w-fit mb-3 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div className="font-bold text-base text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </div>
                <div className="mt-0.5 text-xs text-slate-400 font-medium">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}