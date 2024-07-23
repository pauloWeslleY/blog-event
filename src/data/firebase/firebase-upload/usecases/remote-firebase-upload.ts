import { ref, uploadBytesResumable } from 'firebase/storage'
import { IFirebase, IUploadImage } from '@/data/firebase'

export class RemoteFirebaseUpload implements IUploadImage {
  constructor(
    private database: IFirebase,
    // eslint-disable-next-line prettier/prettier
  ) { }

  upload(params: IUploadImage.Params): IUploadImage.Model {
    const { name, file } = params
    const fileURLRef = `events/${name}/${file.name}`
    const metadata = { contentType: 'image/jpeg' }
    const storageRef = ref(this.database.storage(), fileURLRef)

    return uploadBytesResumable(storageRef, file, metadata)
  }
}
