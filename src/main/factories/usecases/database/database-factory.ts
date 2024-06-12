import { DBFactory } from '@/data/factories'
import { IFirebase } from '@/data/firebase'

export const makeRemoteDatabase = (): IFirebase => {
  return DBFactory.database()
}
