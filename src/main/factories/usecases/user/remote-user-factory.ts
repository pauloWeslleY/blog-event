import { IUser, RemoteUser } from '@/core/user'
import { makeRemoteDatabase } from '@/main/factories/usecases'

export const makeRemoteUser = (): IUser => {
  return new RemoteUser(makeRemoteDatabase())
}
