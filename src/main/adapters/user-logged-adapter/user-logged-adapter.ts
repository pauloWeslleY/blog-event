import { makeSessionStorageAdapter } from '@/main/factories/cache'
import { AccountModel } from '@/core/authentication'

export const setCurrentUserAdapter = (user: object): void => {
  makeSessionStorageAdapter().set('user-logged', user)
}

export const getCurrentUserAdapter = (): AccountModel => {
  return makeSessionStorageAdapter().get('user-logged')
}

export const logoutCurrentUserAdapter = (): void => {
  return makeSessionStorageAdapter().delete('user-logged')
}
