import { getDownloadURL, StorageReference } from 'firebase/storage'
import { IDownloadURL } from '@/data/firebase'

export class RemoteDownloadURL implements IDownloadURL {
  public imageURL: string = ''

  async getDownloadURL(ref: StorageReference): Promise<string> {
    await getDownloadURL(ref).then((downloadURL) => {
      this.imageURL = downloadURL
    })

    return this.imageURL
  }
}
