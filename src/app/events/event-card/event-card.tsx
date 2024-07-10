'use client'
import { Avatar, Button, Card } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import { EventModel } from '@/domain/models'
import { useFormatted } from '@/app/hook'
import { RemoveEventModal } from './remove-event-modal'
import styles from './styles.module.css'

interface EventCardProps {
  event: EventModel
}

export function EventCard({ event }: EventCardProps) {
  const { id, title, description, photoUrl, views, createdAt } = event

  const { formatted } = useFormatted()

  const router = useRouter()

  return (
    <article className={styles.event_card__container}>
      <Card size="1">
        <div className={styles.event_card_wrapper}>
          <div className={styles.event_card__body}>
            <Avatar
              size="4"
              radius="full"
              src={photoUrl}
              fallback="Alt"
              color="indigo"
            />
            <div>
              <h3 className={styles.event_card__title}>{title}</h3>
              <div className={styles.event_card__description}>
                <p>{description}</p>
                {' - '}
                <span>
                  {formatted.formatDateHour({ date: createdAt, hours: true })}
                </span>
              </div>
              <div className={styles.event_card__description}>
                <p>view: {views}</p>
              </div>
            </div>
          </div>

          <div className={styles.event_card__actions}>
            <Button onClick={() => router.push(`/events/edit-event/${id}`)}>
              Editar
            </Button>
            <RemoveEventModal />
          </div>
        </div>
      </Card>
    </article>
  )
}
