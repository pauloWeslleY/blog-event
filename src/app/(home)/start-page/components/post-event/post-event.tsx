import Image from 'next/image'
import dayjs from 'dayjs'
import { Button } from '@radix-ui/themes'
import { EventModel } from '@/domain/models'
import { useUpdatedViewEvent } from './hook'
import './styles.css'

interface PostEventProps {
  event: EventModel
}

export function PostEvent({ event }: PostEventProps) {
  const { id, title, description, photoUrl, date, hours, views } = event
  const { handleUpdatedViewEvent, isPending } = useUpdatedViewEvent({
    eventId: id,
  })

  return (
    <article className="post-event__container">
      <div className="post-event__header">
        <Image src={photoUrl} alt={title} width={634} height={300} />
      </div>
      <div className="post-event__content">
        <div className="post-event__body">
          <h3 className="post-event__title">{title}</h3>
          <p className="post-event__description">{description}</p>
          <div className="post-event__date-hour">
            <span>{dayjs(date).format('DD/MM/YYYY [ás] ')}</span>
            <span>{hours.concat(':00h')}</span>
          </div>
        </div>
        <div className="post-event__action">
          <Button
            loading={isPending}
            onClick={() => handleUpdatedViewEvent({ eventId: id, views })}
          >
            Visualizar evento
          </Button>
        </div>
      </div>
    </article>
  )
}
