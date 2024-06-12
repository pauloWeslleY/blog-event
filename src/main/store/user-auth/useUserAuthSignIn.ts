import { create } from 'zustand'
import { IUserSignIn } from '@/core/user'

export type UserAuthSignInStoreProps = {
  userAuthSignIn: IUserSignIn.Model
  setUserAuthSignIn: (params: IUserSignIn.Model) => void
}

export const useUserAuthSignInStore = create<UserAuthSignInStoreProps>(
  (set) => ({
    userAuthSignIn: {} as IUserSignIn.Model,
    setUserAuthSignIn: (params) => set({ userAuthSignIn: params }),
  }),
)
