import { IAuthentication } from '@/data/usecases'
import { RemoteAuthentication } from '@/domain/authentication'
import { makeRemoteDatabaseAuthSignIn } from '@/main/factories/firebase-database'

export function makeRemoteAuthentication(): IAuthentication {
  return new RemoteAuthentication(makeRemoteDatabaseAuthSignIn())
}
