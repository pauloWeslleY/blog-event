import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schemaCreatedEvent } from '@/validation'
import {
  useUploadProgressStore,
  useUploadURLFileStore,
  useUserStore,
} from '@/main/store'
import { useUpload } from '@/app/hook'
import { useFormEventDefaultValue, useSelectEvent } from '@/app/events/hook'
import { FormCreatedEventProps } from '@/app/events/create-event-modal/types'
import { useCreateEvent } from './useCreateEvent'
import { useFormatDataCreateEvent } from './useFormatDataCreateEvent'

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
  const { handlerCreateEvent, isSuccess, error, isError, isLoading } =
    useCreateEvent()
  const { user } = useUserStore()
  const { handleStorageFirebase } = useUpload()
  const { URLFile, setURLFile } = useUploadURLFileStore()
  const { formatDataCreateEvent } = useFormatDataCreateEvent()
  const { loadSelectTypeEvent } = useSelectEvent()
  const { progress } = useUploadProgressStore()

  async function handleCreateEvent(params: FormCreatedEventProps) {
    if (params.image) {
      await handleStorageFirebase({ name: params.title, file: params.image })
    }

    if (!URLFile) {
      alert('URL inválida!!')
      return
    }

    if (URLFile === '') {
      return
    }

    if (!user) {
      return
    }

    const data = formatDataCreateEvent(user.id, URLFile, params)
    await handlerCreateEvent(data)
    setURLFile('')
    reset()
  }

  return {
    progress,
    isSuccess,
    error,
    isError,
    isLoading,
    errors,
    control,
    register,
    handleSubmit,
    handleCreateEvent,
    loadSelectTypeEvent,
  }
}
