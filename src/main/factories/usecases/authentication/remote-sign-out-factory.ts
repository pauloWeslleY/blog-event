import { RemoteSignOut } from '@/core/authentication'
import {
  makeRemoteDatabase,
  makeRemoteDatabaseAuthSignOut,
} from '@/main/factories/usecases'

export const makeRemoteSignOut = () => {
  return new RemoteSignOut(
    makeRemoteDatabase(),
    makeRemoteDatabaseAuthSignOut(),
  )
}
