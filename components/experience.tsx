"use client"

import { useState } from 'react'
import { experience } from '@/lib/portfolio-data'
import { Award, ExternalLink, Download, X, Briefcase, Calendar } from 'lucide-react'

export function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    url: string;
  } | null>(null)

  return (
    <section className="border-t border-purple-900/20 py-20 bg-[#0B0914] text-slate-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Section Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1e1338] px-4 py-1.5 border border-purple-800/50 shadow-sm">
          <span className="text-[11px] font-bold tracking-widest text-purple-300 uppercase">
            EXPERIENCE
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Where I&apos;ve <span className="text-purple-400">sharpened</span> my craft.
          </h2>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            Hands-on technical internships and continuous training programs in full-stack and front-end development.
          </p>
        </div>

        {/* Cards Container - Grid 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((item) => (
            <div
              key={item.role + item.period}
              className="group relative flex flex-col justify-between p-6 bg-[#130F26]/80 border border-purple-900/30 hover:border-purple-500/40 rounded-2xl transition-all duration-300"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/40 text-purple-400 shrink-0 mt-0.5">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-xs font-semibold text-purple-400 mt-1">
                      {item.org}
                    </p>
                  </div>
                </div>

                {/* Date & View Certificate Row */}
                <div className="flex items-center justify-between gap-2 py-3 border-y border-purple-900/30 my-4 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#18122B] px-2.5 py-1 text-[11px] font-mono text-purple-300 border border-purple-800/40">
                    <Calendar className="h-3 w-3 text-purple-400" />
                    {item.period}
                  </span>

                  {item.certificateUrl && (
                    <button
                      onClick={() =>
                        setSelectedCertificate({
                          title: `${item.role} — ${item.org}`,
                          url: item.certificateUrl!,
                        })
                      }
                      className="inline-flex items-center gap-1.5 rounded-lg border border-purple-500/30 bg-purple-950/50 px-2.5 py-1 text-[11px] font-medium text-purple-200 hover:bg-purple-900/50 hover:border-purple-400/60 transition-all cursor-pointer"
                    >
                      <Award className="h-3 w-3 text-purple-400" />
                      View Certificate
                    </button>
                  )}
                </div>

                {/* Bullet points */}
                <ul className="space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs leading-relaxed text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl rounded-2xl border border-purple-900/40 bg-[#130F26] p-6 shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-purple-900/30 mb-4">
              <h3 className="text-base font-bold text-white pr-4">
                {selectedCertificate.title}
              </h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-[#0B0914] border border-purple-950 text-center">
              {/* عرض مباشر لملف ה-PDF داخل الـ Modal */}
              <iframe 
                src={selectedCertificate.url} 
                className="w-full h-80 rounded-lg border border-purple-900/30 mb-4"
                title="Certificate Preview"
              />

              <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                <a
                  href={selectedCertificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs transition-all w-full sm:w-auto"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open PDF in New Tab
                </a>
                <a
                  href={selectedCertificate.url}
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-purple-800/50 bg-purple-950/30 hover:bg-purple-900/40 text-purple-300 font-medium text-xs transition-all w-full sm:w-auto"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}