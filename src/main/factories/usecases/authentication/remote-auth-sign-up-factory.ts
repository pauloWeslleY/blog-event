import { IAuthSignUp, RemoteAuthenticationSignUp } from '@/core/authentication'
import {
  makeRemoteDatabase,
  makeRemoteDatabaseAuthSignUp,
} from '@/main/factories/usecases'

export const makeRemoteAuthSignUp = (): IAuthSignUp => {
  return new RemoteAuthenticationSignUp(
    makeRemoteDatabase(),
    makeRemoteDatabaseAuthSignUp(),
  )
}
