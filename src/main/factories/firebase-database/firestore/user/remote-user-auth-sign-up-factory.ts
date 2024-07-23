import { IUserSignUp, RemoteUserSignUp } from '@/data/firebase'
import {
  makeRemoteDatabaseAuthSignUp,
  makeRemoteUser,
} from '@/main/factories/firebase-database'

export const makeRemoteUserAuthSignUp = (): IUserSignUp => {
  return new RemoteUserSignUp(makeRemoteDatabaseAuthSignUp(), makeRemoteUser())
}
