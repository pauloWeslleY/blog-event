/* eslint-disable @typescript-eslint/no-namespace */
import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from 'firebase/firestore'
import { FirebaseApp } from 'firebase/app'
import { COLLECTIONS } from '@/data/firebase'

export namespace IFirebase {
  export type Params = {
    id: string
    path: COLLECTIONS
    collections: COLLECTIONS
  }

  export type CollectionType = CollectionReference<DocumentData, DocumentData>
}

export interface IFirebase {
  app(): FirebaseApp
  auth(): Auth
  getDB(): Firestore
  storage(): FirebaseStorage
  collection(path: COLLECTIONS): IFirebase.CollectionType
  subCollection(path: IFirebase.Params): IFirebase.CollectionType
}
