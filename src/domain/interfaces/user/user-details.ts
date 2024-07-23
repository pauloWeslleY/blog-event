import { IUserRepo } from '@/data/factories'

export namespace IUserDetails {
  export type Model = IUserRepo.Model
}

export interface IUserDetails {
  getUserDetail(): Promise<IUserDetails.Model>
}
