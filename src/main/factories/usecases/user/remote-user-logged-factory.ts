import { IUserLogged, RemoteUserLogged } from '@/core/user'
import { makeRemoteDatabase } from '@/main/factories/usecases'

export const makeRemoteUserLogged = (): IUserLogged => {
  return new RemoteUserLogged(makeRemoteDatabase())
}
