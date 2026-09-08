import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="font-mono text-xs">
          Built with .NET mindset · Next.js &amp; React
        </p>
      </div>
    </footer>
  )
}
