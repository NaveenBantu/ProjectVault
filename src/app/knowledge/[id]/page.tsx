'use client'

import { useState } from 'react'
import { issues } from '../../../lib/data'
import MarkdownEditor from "../../../components/editors/MarkdownEditor" // Import your Markdown editor component
import { Button } from '@/components/ui/button'

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const articleId = parseInt(params.id) // Directly use params.id
  const article = issues.find(issue => issue.id === articleId)

  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(article?.solution || '')

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    // Save the updated content logic here
    // For example, you might want to update the issues array or send a request to your API
    setIsEditing(false)
  }

  if (!article) return <div>Loading...</div>

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <div className="mb-4">
        {isEditing ? (
          <MarkdownEditor value={content} onChange={setContent} />
        ) : (
          <p className="text-muted-foreground">{content}</p>
        )}
      </div>
      <Button onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </Button>
    </div>
  )
} 