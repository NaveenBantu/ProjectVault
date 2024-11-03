'use client'

import { use, useState } from 'react'
import { notFound } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects } from '@/lib/data'
import MarkdownEditor from '@/components/editors/MarkdownEditor'
import MermaidEditor from '@/components/editors/MermaidEditor'
import ProjectTimeline from '@/components/project/ProjectTimeline'
import KnowledgeBank from '@/components/project/KnowledgeBank'

interface ProjectDetailProps {
  params: { id: string }
}
export default function ProjectDetail({ params }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState('docs')
  const projectId = parseInt(params.id)
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="w-full">
          <TabsTrigger value="docs">Documents</TabsTrigger>
          <TabsTrigger value="diagrams">Diagrams</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Bank</TabsTrigger>
        </TabsList>

        <TabsContent value="docs" className="p-4 border rounded-lg">
          <MarkdownEditor />
        </TabsContent>
        <TabsContent value="diagrams" className="p-4 border rounded-lg">
          <MermaidEditor />
        </TabsContent>
        <TabsContent value="timeline" className="p-4 border rounded-lg">
          <ProjectTimeline projectId={projectId} />
        </TabsContent>
        <TabsContent value="knowledge" className="p-4 border rounded-lg">
          <KnowledgeBank projectId={projectId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}