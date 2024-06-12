import { FirebaseApp } from 'firebase/app'

export interface IFirebaseConfig {
  initializeApp(): FirebaseApp
}
