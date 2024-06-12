import { IUserSignIn, RemoteUserSignIn } from '@/core/user'
import { makeRemoteAuthSignIn } from '@/main/factories/usecases'

export const makeRemoteUserAuthSignIn = (): IUserSignIn => {
  return new RemoteUserSignIn(makeRemoteAuthSignIn())
}
