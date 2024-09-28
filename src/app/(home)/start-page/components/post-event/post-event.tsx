'use client'
import Image from 'next/image'
import dayjs from 'dayjs'
import { Button } from '@radix-ui/themes'
import { EventModel } from '@/data/models'
import { useUpdatedViewEvent } from './hook/useUpdatedViewEvent'
import './styles.css'

interface PostEventProps {
  event: EventModel
}

export function PostEvent({ event }: PostEventProps) {
  const { id, title, photoUrl, date, hours, views } = event
  const { handlerUpdateViewsEvent, isLoading } = useUpdatedViewEvent()

  return (
    <article className="post-event__container">
      <div className="post-event__header">
        <Image src={photoUrl} alt={title} width={634} height={300} />
      </div>
      <div className="post-event__content">
        <div className="post-event__body">
          <h3 className="post-event__title">{title}</h3>
          <div className="post-event__date-hour">
            <span>{dayjs(date).format('DD/MM/YYYY [ás] ')}</span>
            <span>{hours.concat(':00h')}</span>
          </div>
          <span className="post-event__views">Visualizações: {views}</span>
        </div>
        <div className="post-event__action">
          <Button
            loading={isLoading}
            onClick={() => handlerUpdateViewsEvent({ eventId: id, views })}
          >
            Visualizar evento
          </Button>
        </div>
      </div>
    </article>
  )
}
