'use client'
import { useRouter } from 'next/navigation'
import { IconButton } from '@radix-ui/themes'
import { ChevronsLeft } from 'lucide-react'
import './styles.css'

interface EditEventProps {
  params: { eventId: string }
}

export default function EditEvent({ params }: EditEventProps) {
  const router = useRouter()

  return (
    <div className="edit-event-container">
      <header className="header-edit-event">
        <IconButton variant="ghost" onClick={() => router.push('/events')}>
          <ChevronsLeft />
        </IconButton>
        <h3 className="title">My Event: {params.eventId}</h3>
      </header>
    </div>
  )
}
