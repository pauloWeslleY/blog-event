import { IUploadImage, RemoteFirebaseUpload } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteFirebaseUpload(): IUploadImage {
  return new RemoteFirebaseUpload(makeRemoteDatabase())
}
