import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from 'firebase/storage'
import { IDownloadURL, IFirebase, IUploadImage } from '@/data/firebase'

export class RemoteFirebaseUpload implements IUploadImage {
  protected imageURL: string = ''
  protected progress: number | null = null
  protected error: string | null = null

  constructor(
    private database: IFirebase,
    private getDownload: IDownloadURL,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async upload(params: IUploadImage.Params): Promise<IUploadImage.Model> {
    const { username, image } = params

    if (image) {
      const storageRef = ref(
        this.database.storage(),
        `events/${username}/${image.name}`,
      )
      const uploadImage = uploadBytesResumable(storageRef, image)
      await uploadBytes(storageRef, image).then(async (snapshot) => {
        await this.getDownload
          .getDownloadURL(snapshot.ref)
          .then(async (downloadURL) => {
            console.log('first')
            this.imageURL = downloadURL
          })
      })

      uploadImage.on(
        'state_changed',
        (snapshot) => this.loadProgress(snapshot),
        (err) => (this.error = err.message),
        async () => {
          this.imageURL = await this.getDownload.getDownloadURL(
            uploadImage.snapshot.ref,
          )
        },
      )
    }

    return {
      imageURL: this.imageURL,
      progress: this.progress === null ? 0 : this.progress,
      error: this.error || '',
    }
  }

  loadProgress({ bytesTransferred, totalBytes }: UploadTaskSnapshot): number {
    const progress = (bytesTransferred / totalBytes) * 100
    return progress
  }
}
