'use client'
import { Avatar, Button } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import { EventModel } from '@/data/models'
import { DeleteEventModal } from '@/app/events/delete-event-modal'
import './styles.css'

interface EventCardProps {
  event: EventModel
}

export function EventCard({ event }: EventCardProps) {
  const { id, title, description, photoUrl, createdAt } = event
  const router = useRouter()

  return (
    <article className="event-card__container">
      <div className="event-card_wrapper">
        <div className="event-card__body">
          <Avatar
            size="4"
            radius="full"
            src={photoUrl}
            fallback="Alt"
            color="indigo"
          />
          <div>
            <h3 className="event-card__title">{title}</h3>
            <div className="event-card__description">
              <p>{description}</p>
              {' - '}
              <span>{createdAt}</span>
            </div>
          </div>
        </div>

        <div className="event-card__actions">
          <Button onClick={() => router.push(`/events/${id}`)}>Editar</Button>
          <DeleteEventModal eventId={id} />
        </div>
      </div>
    </article>
  )
}
