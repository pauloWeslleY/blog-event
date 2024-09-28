import { FirebaseError } from 'firebase/app'
import { addDoc, DocumentReference } from 'firebase/firestore'
import { COLLECTIONS, FirebaseResponse, IFirebase } from '@/infra/firebase'
import { Event } from '@/domain/event'
import { EventRepositoryDependencies } from '@/domain/event/repositories/interfaces/event-repo-interface'
import { EventModel } from '@/data/models'
import { eventRepoAdapter } from './event-repo-adapter'

export interface IEventRepository {
  save(event: Event): Promise<FirebaseResponse<EventModel>>
}

export class EventRepository implements IEventRepository {
  private database: IFirebase
  private collection: COLLECTIONS
  private response: FirebaseResponse<EventModel>

  constructor(protected readonly dependencies: EventRepositoryDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
    this.response = { data: null, error: null }
  }

  async save(event: Event): Promise<FirebaseResponse<EventModel>> {
    await this.create(event)
    return this.response
  }

  private async create(event: Event): Promise<void> {
    const eventDocRef = this.database.collection(this.collection)

    await addDoc(eventDocRef, { ...event })
      .then((data: DocumentReference) => {
        this.response.data = eventRepoAdapter.eventAdapter(data.id, event)
      })
      .catch((error: unknown) => {
        if (error instanceof FirebaseError) {
          this.response.error = error
        }
      })
  }
}
