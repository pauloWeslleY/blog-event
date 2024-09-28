import { COLLECTIONS, IFirebase } from '@/infra/firebase'

export interface EventRepositoryDependencies {
  readonly database: IFirebase
  readonly collection: COLLECTIONS
}
