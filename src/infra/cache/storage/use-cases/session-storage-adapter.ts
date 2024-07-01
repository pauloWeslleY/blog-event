import { IStorage } from '@/infra/cache/storage'

export class SessionStorageAdapter
  // eslint-disable-next-line prettier/prettier
  implements IStorage.Get, IStorage.Set, IStorage.Delete {
  set(key: string, value: object): void {
    if (value) {
      sessionStorage.setItem(key, JSON.stringify(value))
    } else {
      sessionStorage.removeItem(key)
    }
  }

  get(key: string) {
    const value = sessionStorage.getItem(key)

    if (value) return JSON.parse(value)
  }

  delete(key: string) {
    return sessionStorage.removeItem(key)
  }
}
