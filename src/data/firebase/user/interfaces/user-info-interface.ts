import { IUserRepo } from '@/data/factories'

export namespace IUserInfo {
  export type Model = IUserRepo.Model
}

export interface IUserInfo {
  getUserInfo(uid: string): Promise<IUserInfo.Model>
}
