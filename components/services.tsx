import { Check } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { services } from '@/lib/portfolio-data'

export function Services() {
  return (
    <section id="services" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel index="02">Services</SectionLabel>
        <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          How I help startups ship and scale.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{service.id}</span>
                <span className="h-px flex-1 mx-4 bg-border transition-colors group-hover:bg-primary/40" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{service.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {service.delivers.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
