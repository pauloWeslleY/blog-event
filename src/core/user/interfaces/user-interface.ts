import { UserCredential } from 'firebase/auth'
import { IUserRepo } from '@/data/factories'

export namespace IUser {
  export type Params = {
    data: UserCredential
    username: string
  }

  export type Model = IUserRepo.Model
}

export interface IUser {
  create(params: IUser.Params): Promise<IUser.Model>
}
