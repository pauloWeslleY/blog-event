import { IEvent } from '@/domain/event'

export interface EventModel extends IEvent {
  id: string
  views: number
  public: boolean
  createdAt: string
  updatedAt: string | null
}
