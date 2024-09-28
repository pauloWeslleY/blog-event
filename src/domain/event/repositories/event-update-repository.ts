import { doc, updateDoc } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'
import { COLLECTIONS, FirebaseResponse, IFirebase } from '@/infra/firebase'
import { EventRepositoryDependencies } from '@/domain/event/repositories/interfaces/event-repo-interface'
import { Event } from '@/domain/event'
import { EventModel } from '@/data/models'
import { eventRepoAdapter } from './event-repo-adapter'

export interface IEventUpdatedRepository {
  save(eventId: string, event: Event): Promise<FirebaseResponse<EventModel>>
}

export class EventUpdatedRepository implements IEventUpdatedRepository {
  private database: IFirebase
  private collection: COLLECTIONS
  private response: FirebaseResponse<EventModel>

  constructor(protected readonly dependencies: EventRepositoryDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
    this.response = { data: null, error: null }
  }

  async save(
    eventId: string,
    params: Event,
  ): Promise<FirebaseResponse<EventModel>> {
    await this.updated(eventId, params)
    return this.response
  }

  private async updated(eventId: string, params: Event): Promise<void> {
    const eventUpdatedRef = doc(this.database.getDB(), this.collection, eventId)

    await updateDoc(eventUpdatedRef, { ...params })
      .then(() => {
        this.response.data = eventRepoAdapter.eventAdapter(eventId, params)
      })
      .catch((error: unknown) => {
        if (error instanceof FirebaseError) {
          this.response.error = error
        }
      })
  }
}
