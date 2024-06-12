import { IAuthSignIn, RemoteAuthenticationSignIn } from '@/core/authentication'
import {
  makeRemoteDatabase,
  makeRemoteDatabaseAuthSignIn,
} from '@/main/factories/usecases'

export const makeRemoteAuthSignIn = (): IAuthSignIn => {
  return new RemoteAuthenticationSignIn(
    makeRemoteDatabase(),
    makeRemoteDatabaseAuthSignIn(),
  )
}
