import { IUserInfo, RemoteUserInfo } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export const makeRemoteUserLogged = (): IUserInfo => {
  return new RemoteUserInfo(makeRemoteDatabase())
}
