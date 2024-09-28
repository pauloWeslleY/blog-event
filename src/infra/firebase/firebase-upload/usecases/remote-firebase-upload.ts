import { ref, uploadBytesResumable } from 'firebase/storage'
import { IFirebase, IUploadImage } from '@/infra/firebase'

export class RemoteFirebaseUpload implements IUploadImage {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly database: IFirebase) {}

  upload({ name, file }: IUploadImage.Params): IUploadImage.Model {
    const fileURLRef = `events/${name}/${file.name}`
    const metadata = { contentType: 'image/jpeg' }
    const storageRef = ref(this.database.storage(), fileURLRef)

    return uploadBytesResumable(storageRef, file, metadata)
  }
}
