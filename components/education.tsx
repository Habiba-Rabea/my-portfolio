"use client";

import { GraduationCap, Award, TrendingUp, BookOpen, MapPin, Calendar } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative border-t border-purple-500/10 py-12 sm:py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[350px] h-[350px] bg-fuchsia-600/10 rounded-full blur-[120px] top-1/2 -right-20 -translate-y-1/2 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        
        {/* Subtle Section Badge Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 tracking-wider uppercase">
            Education & Academic Standing
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] items-stretch">
          
          {/* Main Education Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-purple-900/30 via-slate-900/70 to-purple-950/40 border border-purple-500/20 backdrop-blur-xl flex flex-col justify-between hover:border-purple-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  Bachelor&apos;s Degree
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  09/2023 – 07/2027
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                B.Sc. in Computer Science & Artificial Intelligence
              </h3>

              <p className="text-sm text-purple-300/90 font-medium flex items-center gap-1.5 mb-6">
                <MapPin className="w-4 h-4 text-fuchsia-400 shrink-0" />
                Damietta University — Specialization: Information Technology
              </p>
            </div>

            {/* Key Academic Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-purple-500/15">
              <div>
                <div className="text-xs text-slate-400 font-medium mb-1">Cumulative GPA</div>
                <div className="text-lg font-bold text-white flex items-baseline gap-1">
                  3.51 <span className="text-xs text-slate-400 font-normal">/ 4.00</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium mb-1">Department Rank</div>
                <div className="text-lg font-bold text-fuchsia-300">
                  5th Place
                </div>
              </div>
            </div>
          </div>

          {/* Academic Highlights / Achievements Column */}
          <div className="flex flex-col gap-3 justify-between">
            
            <div className="p-4 rounded-xl bg-slate-900/60 border border-purple-500/20 backdrop-blur-xl flex items-start gap-3 hover:border-purple-500/40 transition-all">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">Ranked 5th in Department</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Top academic standing among Computer Science & AI students at Damietta University.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-purple-500/20 backdrop-blur-xl flex items-start gap-3 hover:border-purple-500/40 transition-all">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">High Academic Standing</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Maintained a strong 3.51 cumulative GPA throughout the Bachelor program.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-purple-500/20 backdrop-blur-xl flex items-start gap-3 hover:border-purple-500/40 transition-all">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                <BookOpen className="w-5 h-5 text-fuchsia-400" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">DEPI Specialist Track</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Digital Egypt Pioneers Initiative — Specialist in .NET & React development.
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}