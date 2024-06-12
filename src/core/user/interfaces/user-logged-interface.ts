import { IUserRepo } from '@/data/factories'

export namespace IUserLogged {
  export type Model = IUserRepo.Model
}

export interface IUserLogged {
  getUserLogged(uid: string): Promise<IUserLogged.Model>
}
