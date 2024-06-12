import { Auth } from 'firebase/auth'
import { ISignOut } from '@/data/firebase'
import { DBFactory } from '@/data/factories'

type RemoteDatabaseAuthSignOutType = ISignOut<Auth>

const makeRemoteDatabaseAuthSignOut = (): RemoteDatabaseAuthSignOutType => {
  return DBFactory.signOutAuth()
}

export { makeRemoteDatabaseAuthSignOut }
