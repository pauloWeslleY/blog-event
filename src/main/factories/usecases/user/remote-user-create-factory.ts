import { IUserCreate } from '@/data/usecases'
import { RemoteCreateUser } from '@/domain/user'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteUserCreate(): IUserCreate {
  return new RemoteCreateUser({ database: makeRemoteDatabase() })
}
