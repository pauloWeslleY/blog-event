import { DBFirebase, ISignOut } from '@/data/firebase'
import { makeRemoteDatabase } from './index'

export const makeRemoteDatabaseAuthSignOut = (): ISignOut => {
  return DBFirebase.signOutAuth(makeRemoteDatabase().auth())
}
