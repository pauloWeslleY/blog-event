import { IUserRepo } from '@/data/factories'

export namespace IUserList {
  export type Model = IUserRepo.Model
}

export interface IUserList {
  getUserList(): Promise<IUserList.Model[]>
}
