export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-primary uppercase">
      <span className="text-muted-foreground">{index}</span>
      <span className="h-px w-8 bg-primary/50" />
      {children}
    </div>
  )
}
