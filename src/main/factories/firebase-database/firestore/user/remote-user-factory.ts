import { IUser, RemoteUser } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export const makeRemoteUser = (): IUser => {
  return new RemoteUser(makeRemoteDatabase())
}
