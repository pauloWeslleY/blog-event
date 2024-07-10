import { IDownloadURL, RemoteDownloadURL } from '@/data/firebase'

export function makeRemoteDownloadUrl(): IDownloadURL {
  return new RemoteDownloadURL()
}
