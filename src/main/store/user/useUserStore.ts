import { create } from 'zustand'
import { IUserRepo } from '@/data/factories'
import { makeRemoteUserLogged } from '@/main/factories/usecases'

type UserStoreProps = {
  user: IUserRepo.Model | null
  loadUserLogged: (id: string) => Promise<void>
  setLogout: () => void
}

export const useUserStore = create<UserStoreProps>((set) => ({
  user: {} as IUserRepo.Model,
  loadUserLogged: async (id: string) => {
    const response = makeRemoteUserLogged()
    const data = await response.getUserLogged(id)
    set({ user: data })
  },
  setLogout: () => set({ user: null }),
}))
