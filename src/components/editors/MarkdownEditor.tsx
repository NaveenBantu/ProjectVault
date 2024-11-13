'use client'

import React from 'react'

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  return (
    <textarea
      className="w-full h-64 border rounded-md p-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Edit your content here..."
    />
  )
}

export default MarkdownEditor