import { ISignUp } from '@/data/firebase'
import { AccountModel } from '@/domain/models'

export namespace IUserSignUp {
  export type Params = ISignUp.Params & {
    username: string
  }

  export type Model = string | string | AccountModel
}

export interface IUserSignUp {
  register(params: IUserSignUp.Params): Promise<IUserSignUp.Model>
}
