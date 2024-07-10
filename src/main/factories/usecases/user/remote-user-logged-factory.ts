import { IUserInfo, RemoteUserInfo } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/usecases'

export const makeRemoteUserLogged = (): IUserInfo => {
  return new RemoteUserInfo(makeRemoteDatabase())
}
