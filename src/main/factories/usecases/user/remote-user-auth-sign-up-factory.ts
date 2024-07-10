import { IUserSignUp, RemoteUserSignUp } from '@/data/firebase'
import {
  makeRemoteDatabaseAuthSignUp,
  makeRemoteUser,
} from '@/main/factories/usecases'

export const makeRemoteUserAuthSignUp = (): IUserSignUp => {
  return new RemoteUserSignUp(makeRemoteDatabaseAuthSignUp(), makeRemoteUser())
}
