import { User } from 'firebase/auth'
import { IUserRepo } from '@/data/factories/user'

export namespace IUserAuth {
  export type SignUpParams = {
    username: string
    email: string
    password: string
  }

  export type SignInParams = {
    email: string
    password: string
  }

  export type RegisterModel =
    | IUserRepo.Model
    | 'Email já cadastrado'
    | 'Ops! Aconteceu um erro inesperado'

  export type LoginModel =
    | User
    | 'Usuário inválido'
    | 'Ops! Aconteceu um erro inesperado'
}

export interface IUserAuth {
  register(params: IUserAuth.SignUpParams): Promise<IUserAuth.RegisterModel>
  login(params: IUserAuth.SignInParams): Promise<IUserAuth.LoginModel>
  logout(): Promise<void>
}
