import { IUser, RemoteUser } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/usecases'

export const makeRemoteUser = (): IUser => {
  return new RemoteUser(makeRemoteDatabase())
}
