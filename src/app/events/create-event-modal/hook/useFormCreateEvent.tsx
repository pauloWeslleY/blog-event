import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schemaCreatedEvent } from '@/validation'
import { useUploadURLFileStore, useUserAuthStore } from '@/main/store'
import { useUpload } from '@/app/hook'
import { useFormEventDefaultValue } from '@/app/events/hook'
import { FormCreatedEventProps } from '@/app/events/create-event-modal/types'
import { useCreateEvent, useFormatDataCreateEvent } from './index'

export function useFormCreateEvent() {
  const { loadFormCreateEventDefaultValue } = useFormEventDefaultValue()

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCreatedEventProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaCreatedEvent),
    defaultValues: loadFormCreateEventDefaultValue(),
  })

  const {
    event: { mutateAsync, error, isError, isPending, isSuccess },
  } = useCreateEvent()

  const { userAuth } = useUserAuthStore()
  const { handleStorageFirebase } = useUpload()
  const { URLFile, setURLFile } = useUploadURLFileStore()
  const { formatDataCreateEvent } = useFormatDataCreateEvent()

  async function handleCreateEvent(params: FormCreatedEventProps) {
    if (params.image) {
      await handleStorageFirebase({ name: params.title, file: params.image })
    }

    if (!URLFile) {
      return alert('URL inválida!!')
    }

    if (URLFile !== '') {
      const data = formatDataCreateEvent(userAuth.id, URLFile, params)
      await mutateAsync(data)
    }

    setURLFile('')
    reset()
  }

  return {
    isSuccess,
    error,
    isError,
    isPending,
    errors,
    control,
    register,
    handleSubmit,
    handleCreateEvent,
  }
}
