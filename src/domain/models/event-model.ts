import { Timestamp } from 'firebase/firestore'

export type EventModel = {
  id: string
  title: string
  description: string
  hours: string
  date: string
  photoUrl: string
  type: string
  ownerId: string
  views: number
  public: boolean
  createdAt: Timestamp | Date
}
