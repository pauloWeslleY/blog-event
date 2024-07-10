import { DBFirebase, IFirebase } from '@/data/firebase'

export const makeRemoteDatabase = (): IFirebase => {
  return DBFirebase.database()
}
