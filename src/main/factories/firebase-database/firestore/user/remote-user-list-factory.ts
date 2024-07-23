import { IUserList, RemoteUserList } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export const makeRemoteUserList = (): IUserList => {
  return new RemoteUserList(makeRemoteDatabase())
}
