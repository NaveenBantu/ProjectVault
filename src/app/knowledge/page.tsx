'use client'

import { useState } from 'react'
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"
import { Search, ChevronRight } from "lucide-react"
import { issues } from '../../lib/data'
import Link from 'next/link'

interface KnowledgeBankProps {
  projectId: number;
}

export default function KnowledgeBank({ projectId }: KnowledgeBankProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredIssues = issues.filter(issue => 
    issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    issue.solution.toLowerCase().includes(searchTerm.toLowerCase()) ||
    issue.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Knowledge Base</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search issues, solutions, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full max-w-xl"
          />
        </div>
      </div>

      <div className="divide-y divide-border rounded-lg border bg-card">
        {filteredIssues.map(issue => (
          <Link href={`/knowledge/${issue.id}`} key={issue.id}>
            <div 
              className="group flex items-start justify-between p-4 hover:bg-muted/50 cursor-pointer"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <h3 className="font-medium">{issue.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {issue.solution}
                </p>
                <div className="flex flex-wrap gap-2 pl-6">
                  {issue.tags?.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredIssues.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No issues found matching your search.</p>
        </div>
      )}
    </div>
  )
}