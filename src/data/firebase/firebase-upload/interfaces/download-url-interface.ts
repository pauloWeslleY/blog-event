import { StorageReference } from 'firebase/storage'

export interface IDownloadURL {
  getDownloadURL(ref: StorageReference): Promise<string>
}
