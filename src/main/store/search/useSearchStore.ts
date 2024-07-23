import { create } from 'zustand'

type UseSearchStore = {
  search: string
  setSearching: (params: string) => void
}

export const useSearchStore = create<UseSearchStore>((set) => ({
  search: '',
  setSearching: (params) => set({ search: params }),
}))
