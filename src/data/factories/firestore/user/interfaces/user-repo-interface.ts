export namespace IUserRepo {
  export type Model = {
    id: string
    email: string
    username: string
  }
}

export interface IUserRepo {
  user: IUserRepo.Model
}
