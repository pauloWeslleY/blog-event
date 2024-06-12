import { IUserSignUp, RemoteUserSignUp } from '@/core/user'
import { makeRemoteAuthSignUp, makeRemoteUser } from '@/main/factories/usecases'

export const makeRemoteUserAuthSignUp = (): IUserSignUp => {
  return new RemoteUserSignUp(makeRemoteAuthSignUp(), makeRemoteUser())
}
