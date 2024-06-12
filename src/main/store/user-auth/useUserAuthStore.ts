import { create } from 'zustand'
import { IUserSignUp } from '@/core/user'

export type UserAuthStoreProps = {
  userAuth: IUserSignUp.Model
  setUserAuth: (params: IUserSignUp.Model) => void
}

export const useUserAuthStore = create<UserAuthStoreProps>((set) => ({
  userAuth: {} as IUserSignUp.Model,
  setUserAuth: (params) => set({ userAuth: params }),
}))
