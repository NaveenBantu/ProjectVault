'use client'

import { useState } from 'react'
import { Input } from "../../components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { issues } from '../../lib/data'

interface KnowledgeBankProps {
  projectId: number;
}

/**
 * Renders a knowledge bank component with searchable issues
 * @param {Object} props - The component props
 * @param {string} props.projectId - The ID of the project
 * @returns {JSX.Element} A div containing a search input and a list of filtered issue cards
 */
export default function KnowledgeBank({ projectId }: KnowledgeBankProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredIssues = issues.filter(issue => 
    issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    issue.solution.toLowerCase().includes(searchTerm.toLowerCase()) ||
    issue.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div>
      <Input
        type="search"
        placeholder="Search issues..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="space-y-4">
        {filteredIssues.map(issue => (
          <Card key={issue.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{issue.title}</span>
                <div className="space-x-2">
                  {issue.tags?.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{issue.solution}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}