import { UserCredential } from 'firebase/auth'
import { AccountModel } from '@/domain/models'

export namespace IUser {
  export type Params = {
    data: UserCredential
    username: string
  }

  export type Model = AccountModel
}

export interface IUser {
  create(params: IUser.Params): Promise<IUser.Model>
}
