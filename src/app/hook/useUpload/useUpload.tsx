import { getDownloadURL } from 'firebase/storage'
import { makeRemoteFirebaseUpload } from '@/main/factories/firebase-database'
import {
  useUploadErrorStore,
  useUploadProgressStore,
  useUploadURLFileStore,
} from '@/main/store'

interface FirebaseStorageParams {
  name: string
  file: File
}

export function useUpload() {
  const { setError } = useUploadErrorStore()
  const { setProgress } = useUploadProgressStore()
  const { setURLFile } = useUploadURLFileStore()

  async function handleStorageFirebase({ file, name }: FirebaseStorageParams) {
    const uploadFiles = makeRemoteFirebaseUpload()
    const uploadTask = uploadFiles.upload({ name, file })

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      (err) => {
        return setError(err.message)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((URLFile) => {
          setURLFile(URLFile)
          setProgress(null)
        })
      },
    )
  }

  return { handleStorageFirebase }
}
