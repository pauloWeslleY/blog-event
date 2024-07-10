import { AccountModel } from '@/domain/models'
import { makeSessionStorageAdapter } from '@/main/factories/cache'

export const setCurrentUserAdapter = (user: object): void => {
  makeSessionStorageAdapter().set('user-logged', user)
}

export const getCurrentUserAdapter = (): AccountModel => {
  return makeSessionStorageAdapter().get('user-logged')
}

export const logoutCurrentUserAdapter = (): void => {
  return makeSessionStorageAdapter().delete('user-logged')
}
