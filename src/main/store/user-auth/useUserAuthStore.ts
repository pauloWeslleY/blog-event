import { create } from 'zustand'
import { AccountModel } from '@/domain/models'

export type UserAuthStoreProps = {
  userAuth: AccountModel
  setUserAuth: (params: AccountModel) => void
  setLogout: () => void
}

export const useUserAuthStore = create<UserAuthStoreProps>((set) => ({
  userAuth: {} as AccountModel,
  setUserAuth: (params) => set({ userAuth: params }),
  setLogout: () => set({ userAuth: {} as AccountModel }),
}))
