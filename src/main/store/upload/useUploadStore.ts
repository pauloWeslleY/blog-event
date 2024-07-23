import { create } from 'zustand'

type UseUploadURLFileStoreProps = {
  URLFile: string
  setURLFile: (params: string) => void
}

type UseUploadErrorStoreProps = {
  error: string
  setError: (params: string) => void
}

type UseUploadProgressStoreProps = {
  progress: number | null
  setProgress: (params: number | null) => void
}

export const useUploadURLFileStore = create<UseUploadURLFileStoreProps>(
  (set) => ({
    URLFile: '',
    setURLFile: (params) => set({ URLFile: params }),
  }),
)

export const useUploadProgressStore = create<UseUploadProgressStoreProps>(
  (set) => ({
    progress: null,
    setProgress: (params) => set({ progress: params }),
  }),
)

export const useUploadErrorStore = create<UseUploadErrorStoreProps>((set) => ({
  error: '',
  setError: (params) => set({ error: params }),
}))
