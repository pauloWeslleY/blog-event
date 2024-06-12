import { Auth, UserCredential } from 'firebase/auth'
import { IFirebaseAuth } from '@/data/firebase'
import { DBFactory } from '@/data/factories'

const makeRemoteDatabaseAuth = (): IFirebaseAuth<UserCredential, Auth> => {
  return DBFactory.auth()
}

export { makeRemoteDatabaseAuth }
