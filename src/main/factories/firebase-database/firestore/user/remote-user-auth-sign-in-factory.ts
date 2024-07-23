import { IUserSignIn, RemoteUserSignIn } from '@/data/firebase'
import {
  makeRemoteDatabaseAuthSignIn,
  makeRemoteDatabaseAuthToken,
} from '@/main/factories/firebase-database'

export const makeRemoteUserAuthSignIn = (): IUserSignIn => {
  return new RemoteUserSignIn(
    makeRemoteDatabaseAuthSignIn(),
    makeRemoteDatabaseAuthToken(),
  )
}
