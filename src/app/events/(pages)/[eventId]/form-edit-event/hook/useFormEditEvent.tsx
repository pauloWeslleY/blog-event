import { useCallback, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useParams } from 'next/navigation'
import { FormUpdateEventProps } from '@/app/events/(pages)/[eventId]/form-edit-event/types'
import { schemaUpdateEvent } from '@/validation'
import { useDetailsEvent, useUpload } from '@/app/hook'
import { useFormEventDefaultValue } from '@/app/events/hook'
import { useUploadURLFileStore } from '@/main/store'
import { useFormatDataUpdatedEvent, useUpdatedEvent } from './index'

export function useFormEditEvent() {
  const { loadFormUpdateEventDefaultValue } = useFormEventDefaultValue()

  const {
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormUpdateEventProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaUpdateEvent),
    defaultValues: loadFormUpdateEventDefaultValue(),
  })

  const { eventId } = useParams()

  const {
    loadDetailsEvent: { data },
  } = useDetailsEvent({ params: { eventId: eventId as string } })

  const {
    updatedEvent: { mutateAsync, isPending, isSuccess },
  } = useUpdatedEvent()

  const { formatDataUpdatedEvent } = useFormatDataUpdatedEvent()
  const { handleStorageFirebase } = useUpload()
  const { URLFile, setURLFile } = useUploadURLFileStore()

  const handleUpdateDataFormEvent = useCallback(() => {
    if (data) {
      setValue('title', data.title)
      setValue('description', data.description)
      setValue('dateEvent', data.date)
      setValue('hourEvent', data.hours)
      setValue('public', data.public)
    }
  }, [data, setValue])

  useEffect(() => {
    handleUpdateDataFormEvent()
  }, [handleUpdateDataFormEvent])

  async function handleUpdatedEvent(params: FormUpdateEventProps) {
    if (params.image) {
      await handleStorageFirebase({ name: params.title, file: params.image })
    }

    if (!URLFile) {
      return alert('URL inválida!!')
    }

    if (data && URLFile !== '') {
      const dataFormat = formatDataUpdatedEvent({
        eventId: eventId as string,
        URLFile,
        params,
        data,
      })
      await mutateAsync(dataFormat)
    }

    setURLFile('')
  }

  return {
    data,
    isSuccess,
    isPending,
    errors,
    control,
    register,
    handleSubmit,
    handleUpdatedEvent,
  }
}
