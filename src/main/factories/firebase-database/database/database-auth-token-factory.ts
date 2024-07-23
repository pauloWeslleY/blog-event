import { IAuthToken, RemoteAuthToken } from '@/data/firebase'
import { makeRemoteDatabase } from './index'

export const makeRemoteDatabaseAuthToken = (): IAuthToken => {
  return new RemoteAuthToken(makeRemoteDatabase().auth())
}
