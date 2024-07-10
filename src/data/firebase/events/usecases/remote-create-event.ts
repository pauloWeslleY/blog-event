import { addDoc } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'
import { ICreateEvent, IDownloadURL, IFirebase } from '@/data/firebase'
import { EventFactory, IEventRepo } from '@/data/factories'
import { COLLECTIONS } from '@/data/firebase/collections'

export class RemoteCreateEvent implements ICreateEvent {
  private newEvent = new EventFactory.Event()
  private event: Omit<IEventRepo.Model, 'id'> = {} as Omit<
    IEventRepo.Model,
    'id'
  >

  constructor(
    private database: IFirebase,
    private upload: IDownloadURL,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async create(params: ICreateEvent.Params): Promise<ICreateEvent.Model> {
    const { title, description, date, hours, ownerId, photoUrl, type } = params
    const eventRef = this.database.getCollection(COLLECTIONS.EVENTS)

    if (photoUrl) {
      const storageRef = ref(
        this.database.storage(),
        `images/${title}/${photoUrl.name}`,
      )
      await uploadBytes(storageRef, photoUrl).then(async (snapshot) => {
        await this.upload
          .getDownloadURL(snapshot.ref)
          .then(async (downloadURL) => {
            const { event } = this.newEvent.add({
              title,
              description,
              date,
              hours,
              ownerId,
              type,
              photoUrl: downloadURL,
              public: true,
              views: 0,
              createdAt: new Date(),
            })

            this.event = event
            await addDoc(eventRef, event)
          })
      })
    }

    return {
      event: this.event,
    }
  }
}
