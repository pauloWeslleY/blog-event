import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { ICreateEvent } from '@/data/usecases'
import { COLLECTIONS, IFirebase } from '@/infra/firebase'
import { Event } from '@/domain/event'
import { EventRepoFactory } from '../repositories/event-repo-factory'

interface RemoteCreateEventDependencies {
  readonly database: IFirebase
  readonly collection: COLLECTIONS
}

export class RemoteCreateEvent implements ICreateEvent {
  private database: IFirebase
  private collection: COLLECTIONS

  constructor(protected readonly dependencies: RemoteCreateEventDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
  }

  async createEvent(params: ICreateEvent.Params): Promise<ICreateEvent.Model> {
    const event = EventRepoFactory.executeCreateEvent(
      this.database,
      this.collection,
    )

    const fileURLRef = `events/${params.title}/${params.photoUrl.name}`
    const metadata = { contentType: 'image/jpeg' }
    const storageRef = ref(this.database.storage(), fileURLRef)
    const upload = await uploadBytes(storageRef, params.photoUrl, metadata)
    const photoUrlDownload = await getDownloadURL(upload.ref)

    const newEvent = new Event({ ...params, photoUrl: photoUrlDownload })
    return await event.save(newEvent)
  }
}
