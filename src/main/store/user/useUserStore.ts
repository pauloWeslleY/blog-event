import { create } from 'zustand'
import { IUserRepo } from '@/data/factories'
import { makeRemoteUserDetails } from '@/main/factories/usecases'

type UserStoreProps = {
  user: IUserRepo.Model | null
  loadUser: () => Promise<void>
}

export const useUserStore = create<UserStoreProps>((set) => ({
  user: {} as IUserRepo.Model,
  loadUser: async () => {
    const userLogged = makeRemoteUserDetails('/api/user')
    const data = await userLogged.getUserDetail()
    set({ user: data })
  },
}))
