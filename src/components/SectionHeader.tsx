interface Props {
  index: string
  title: string
}

export default function SectionHeader({ index, title }: Props) {
  return (
    <div className="reveal mb-12 flex items-baseline gap-4">
      <span className="font-mono text-xs tracking-widest text-accent">// {index}</span>
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  )
}
