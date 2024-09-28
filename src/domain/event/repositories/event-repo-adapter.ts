import { Timestamp } from 'firebase/firestore'
import { EventModel } from '@/data/models'
import { makeFormatted } from '@/validation/factories'
import { Event } from '@/domain/event'

const formatted = makeFormatted()

const eventAdapter = (id: string, event: Event): EventModel => ({
  ...event,
  id,
  public: event.public || true,
  createdAt: formatted.formatDateHour({
    date: event.createdAt as Timestamp,
    hours: true,
  }),
  updatedAt: event.updatedAt
    ? formatted.formatDateHour({
        date: event.updatedAt as Timestamp,
        hours: true,
      })
    : null,
})

export const eventRepoAdapter = { eventAdapter }
