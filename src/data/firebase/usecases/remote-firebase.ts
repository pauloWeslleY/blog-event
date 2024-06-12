import { collection, Firestore, getFirestore } from 'firebase/firestore'
import { Auth, getAuth } from 'firebase/auth'
import { FirebaseStorage, getStorage } from 'firebase/storage'
import { FirebaseApp } from 'firebase/app'
import { COLLECTIONS, IFirebase } from '@/data/firebase'
import { initApp } from './index'

export class RemoteFirebase implements IFirebase {
  private initApp: FirebaseApp = initApp.initializeApp()

  app(): FirebaseApp {
    return this.initApp
  }

  auth(): Auth {
    return getAuth(this.initApp)
  }

  storage(): FirebaseStorage {
    return getStorage(this.initApp)
  }

  getDB(): Firestore {
    return getFirestore(this.initApp)
  }

  getCollection(path: COLLECTIONS): IFirebase.CollectionType {
    return collection(this.getDB(), path)
  }

  collection({
    path,
    id,
    collections,
  }: IFirebase.Params): IFirebase.CollectionType {
    return collection(this.getDB(), path, id, collections)
  }
}
