import * as LucideIcons from "lucide-react"

interface Props {
  name: string
  size?: number
  className?: string
}

type IconComponent = React.ComponentType<{ size?: number; className?: string }>

export function DynamicIcon({ name, size = 20, className }: Props) {
  const Icon = (LucideIcons as Record<string, IconComponent>)[name]
  if (!Icon) return null
  return <Icon size={size} className={className} />
}
