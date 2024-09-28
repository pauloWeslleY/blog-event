import { Timestamp } from 'firebase/firestore'

export interface IUser {
  id: string
  username: string
  email: string
}

export class User implements IUser {
  public id: string
  public username: string
  public email: string
  public created_at: Timestamp | Date = new Date()
  public updated_at: Timestamp | Date | null = null

  constructor({ id, username, email }: IUser) {
    this.id = id
    this.username = username
    this.email = email
  }
}
