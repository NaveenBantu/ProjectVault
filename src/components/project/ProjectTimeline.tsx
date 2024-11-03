import { timelineEvents } from '@/lib/data'
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody } from "@/components/ui/timeline"

interface ProjectTimelineProps {
  projectId: number;
}

export default function ProjectTimeline({ projectId }: ProjectTimelineProps) {
  return (
    <Timeline>
      {timelineEvents.map((event) => (
        <TimelineItem key={event.id}>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon 
              className={
                event.status === 'completed' ? 'bg-green-500' :
                event.status === 'in-progress' ? 'bg-blue-500' :
                'bg-gray-300'
              }
            />
            <h3 className="text-lg font-semibold">{event.title}</h3>
          </TimelineHeader>
          <TimelineBody>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="mt-1">{event.description}</p>
          </TimelineBody>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
