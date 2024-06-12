/* eslint-disable @typescript-eslint/no-namespace */
import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from 'firebase/firestore'
import { FirebaseApp } from 'firebase/app'
import { COLLECTIONS } from './index'

export namespace IFirebase {
  export type Params = {
    id: string
    path: COLLECTIONS
    collections: COLLECTIONS
  }

  export type CollectionType = CollectionReference<DocumentData, DocumentData>
}

export interface IFirebase {
  getCollection(path: COLLECTIONS): IFirebase.CollectionType
  collection(path: IFirebase.Params): IFirebase.CollectionType
  getDB(): Firestore
  auth(): Auth
  storage(): FirebaseStorage
  app(): FirebaseApp
}
