import { IUploadImage, RemoteFirebaseUpload } from '@/data/firebase'
import {
  makeRemoteDatabase,
  makeRemoteDownloadUrl,
} from '@/main/factories/usecases'

export function makeRemoteFirebaseUpload(): IUploadImage {
  return new RemoteFirebaseUpload(makeRemoteDatabase(), makeRemoteDownloadUrl())
}
