import { FirebaseError } from 'firebase/app'

export type FirebaseResponse<T> = {
  data: T | null
  error: FirebaseError | null
}
