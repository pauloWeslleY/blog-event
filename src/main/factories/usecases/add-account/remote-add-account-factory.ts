import { IAddAccount } from '@/data/usecases'
import { RemoteAddAccount } from '@/domain/add-account'
import { makeRemoteDatabaseAuthSignUp } from '@/main/factories/firebase-database'
import { makeRemoteUserCreate } from '@/main/factories/usecases'

export function makeRemoteAddAccount(): IAddAccount {
  return new RemoteAddAccount(
    makeRemoteDatabaseAuthSignUp(),
    makeRemoteUserCreate(),
  )
}
