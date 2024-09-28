import { create } from 'zustand'
import { AccountModel } from '@/data/models'

type UseUserStoreProps = {
  user: AccountModel | null
  isLoading: boolean
  isError: boolean
  error: string | null
  setUserIsError: (loader: boolean) => void
  setUserLoading: (loader: boolean) => void
  setUserError: (err: string | undefined) => void
  setUser: (params: AccountModel) => void
  setLogout: () => void
}

export const useUserStore = create<UseUserStoreProps>((set) => ({
  user: null,
  isLoading: false,
  isError: false,
  error: null,
  setUser: (params) => set({ user: params }),
  setUserError: (params) => set({ error: params }),
  setUserLoading: (params) => set({ isLoading: params }),
  setUserIsError: (params) => set({ isError: params }),
  setLogout: () => set({ user: null }),
}))
