import { IAuthToken, RemoteAuthToken } from '@/infra/firebase'
import { makeRemoteDatabase } from './index'

export const makeRemoteDatabaseAuthToken = (): IAuthToken => {
  return new RemoteAuthToken(makeRemoteDatabase().auth())
}
