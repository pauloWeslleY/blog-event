import { IUserSignIn, RemoteUserSignIn } from '@/data/firebase'
import {
  makeRemoteDatabaseAuthSignIn,
  makeRemoteDatabaseAuthToken,
} from '@/main/factories/usecases'

export const makeRemoteUserAuthSignIn = (): IUserSignIn => {
  return new RemoteUserSignIn(
    makeRemoteDatabaseAuthSignIn(),
    makeRemoteDatabaseAuthToken(),
  )
}
