import { DBFirebase, IFirebase } from '@/infra/firebase'

export const makeRemoteDatabase = (): IFirebase => DBFirebase.database()
