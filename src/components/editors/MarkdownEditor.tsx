'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import MarkdownEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
}

const MarkdownEditorComponent: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleEditorChange = ({ text }: { text: string }) => {
    onChange(text);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const editorStyles = {
    height: '400px',
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
  };

  const containerStyles = {
    backgroundColor: isDarkMode ? '#222' : '#f9f9f9',
    color: isDarkMode ? '#fff' : '#000',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyles}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <MarkdownEditor
        value={value}
        style={editorStyles}
        onChange={handleEditorChange}
        placeholder="Edit your content here..."
        renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
      />
      <h3>Preview:</h3>
      <ReactMarkdown>{value}</ReactMarkdown>
    </div>
  )
}

export default MarkdownEditorComponent