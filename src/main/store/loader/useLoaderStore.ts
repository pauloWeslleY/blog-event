import { create } from 'zustand'

type UseLoaderStoreProps = {
  loader: boolean
  setLoader: (params: boolean) => void
}

export const useLoaderStore = create<UseLoaderStoreProps>((set) => ({
  loader: false,
  setLoader: (params) => set({ loader: params }),
}))
