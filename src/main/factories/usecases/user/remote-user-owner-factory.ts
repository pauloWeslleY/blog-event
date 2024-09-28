import { IUserOwner } from '@/data/usecases'
import { RemoteUserOwner } from '@/domain/user'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteUserOwner(): IUserOwner {
  return new RemoteUserOwner(makeRemoteDatabase())
}
