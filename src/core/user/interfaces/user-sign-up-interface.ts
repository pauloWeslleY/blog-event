import { IAuthSignUp } from '@/core/authentication'
import { IUserRepo } from '@/data/factories'

export namespace IUserSignUp {
  export type Params = IAuthSignUp.Params

  export type Model = string | string | IUserRepo.Model
}

export interface IUserSignUp {
  register(params: IUserSignUp.Params): Promise<IUserSignUp.Model>
}
