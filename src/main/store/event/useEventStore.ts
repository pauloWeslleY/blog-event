import { create } from 'zustand'
import { EventModel } from '@/data/models'

type UseEventStore = {
  event: EventModel | null
  error: string | null
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  setEventIsError: (loader: boolean) => void
  setEventIsLoading: (loader: boolean) => void
  setEventIsSuccess: (loader: boolean) => void
  setEventError: (err: string | undefined) => void
  setEvent: (params: EventModel) => void
}

export const useEventStore = create<UseEventStore>((set) => ({
  event: null,
  error: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  setEvent: (params) => set({ event: params }),
  setEventError: (params) => set({ error: params }),
  setEventIsLoading: (params) => set({ isLoading: params }),
  setEventIsError: (params) => set({ isError: params }),
  setEventIsSuccess: (params) => set({ isSuccess: params }),
}))
