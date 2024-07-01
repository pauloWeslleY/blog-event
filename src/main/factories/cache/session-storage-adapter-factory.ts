import { IStorage, SessionStorageAdapter } from '@/infra/cache/storage'

type SessionStorageAdapterType = IStorage.Get & IStorage.Set & IStorage.Delete

export const makeSessionStorageAdapter = (): SessionStorageAdapterType => {
  return new SessionStorageAdapter()
}
