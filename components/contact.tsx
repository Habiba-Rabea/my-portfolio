import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-purple-500/10 py-12 sm:py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] bottom-0 right-0 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        
        {/* Subtle Section Badge Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 tracking-wider uppercase">
            Get In Touch
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-900/20 via-slate-900/80 to-purple-950/30 p-6 sm:p-10 backdrop-blur-xl">
          <div className="tech-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                Have a product to build? <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  Let&apos;s make it scale.
                </span>
              </h2>
              
              <p className="mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-slate-300">
                I&apos;m open to freelance opportunities and collaborative project developments.
                Tell me what you&apos;re building and I&apos;ll get back to you promptly.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02] hover:shadow-purple-500/30 active:scale-95"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Contact Cards */}
            <div className="flex flex-col gap-3 lg:border-l lg:border-purple-500/15 lg:pl-8">
              <ContactRow
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={<Phone className="w-4 h-4" />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
              />
              <ContactRow
                icon={<LinkedInIcon className="w-4 h-4" />}
                label="LinkedIn"
                value="in/habiba-rabea"
                href={profile.linkedin}
                external
              />
              <ContactRow
                icon={<MapPin className="w-4 h-4" />}
                label="Location"
                value={profile.location}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-3.5 rounded-xl border border-purple-500/20 bg-slate-900/60 px-4 py-3 transition-all hover:border-purple-500/40 hover:bg-purple-950/30 group">
      <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase">
          {label}
        </div>
        <div className="truncate text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
          {value}
        </div>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}