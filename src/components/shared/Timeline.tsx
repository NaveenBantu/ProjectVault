'use client'

export interface TimelineProps {
  items: Array<{
    id: string
    title: string
    date: string
    content: string
  }>
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div>
      <h2>Timeline Component</h2>
    </div>
  )
} 