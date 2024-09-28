import { UserCredential } from 'firebase/auth'
import { AccountModel } from '@/data/models'
import { FirebaseResponse } from '@/infra/firebase'

export namespace IUserCreate {
  export type Params = {
    credential: UserCredential | null
    username: string
  }

  export type Model = FirebaseResponse<AccountModel>
}

export interface IUserCreate {
  create(params: IUserCreate.Params): Promise<IUserCreate.Model>
}
