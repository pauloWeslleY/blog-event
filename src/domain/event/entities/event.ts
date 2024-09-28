import { Timestamp } from 'firebase/firestore'

export interface IEvent {
  title: string
  description: string
  hours: string
  date: string
  photoUrl: string
  type: string
  ownerId: string
}

export class Event implements IEvent {
  public title: string
  public description: string
  public hours: string
  public date: string
  public photoUrl: string
  public type: string
  public ownerId: string
  public views: number = 0
  public public: boolean = true
  public createdAt: Timestamp | Date = new Date()
  public updatedAt: Timestamp | Date | null = null

  constructor(props: IEvent) {
    this.title = props.title
    this.description = props.description
    this.hours = props.hours
    this.date = props.date
    this.photoUrl = props.photoUrl
    this.type = props.type
    this.ownerId = props.ownerId
  }

  set updateAt(value: Timestamp | Date | null) {
    this.updatedAt = value
  }

  get updateAt(): Timestamp | Date | null {
    return this.updatedAt
  }

  set eventPublic(value: boolean) {
    this.public = value
  }

  get eventPublic(): boolean {
    return this.public
  }
}
