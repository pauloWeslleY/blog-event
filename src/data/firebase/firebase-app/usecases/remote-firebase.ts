import { collection, Firestore, getFirestore } from 'firebase/firestore'
import { Auth, getAuth } from 'firebase/auth'
import { FirebaseStorage, getStorage } from 'firebase/storage'
import { FirebaseApp } from 'firebase/app'
import { COLLECTIONS, IFirebase } from '@/data/firebase'

export class RemoteFirebase implements IFirebase {
  // eslint-disable-next-line prettier/prettier
  constructor(private initApp: FirebaseApp) { }

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