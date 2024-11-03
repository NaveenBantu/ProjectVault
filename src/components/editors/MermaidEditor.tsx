'use client'

import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function MermaidEditor() {
  const [diagram, setDiagram] = useState(`graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B`)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl font-semibold mb-2">Editor</h2>
        <Textarea
          value={diagram}
          onChange={(e) => setDiagram(e.target.value)}
          placeholder="Write your Mermaid diagram code here..."
          className="h-[calc(100vh-200px)] font-mono"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <div className="border rounded-lg p-4">
          {/* Mermaid diagram will be rendered here */}
          <pre className="whitespace-pre-wrap">{diagram}</pre>
        </div>
      </div>
    </div>
  )
}
