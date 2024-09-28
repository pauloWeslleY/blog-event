'use client'
import { useCallback, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useParams } from 'next/navigation'
import { schemaUpdateEvent } from '@/validation'
import { useUpload } from '@/app/hook'
import { useFormEventDefaultValue } from '@/app/events/hook'
import { useUploadURLFileStore } from '@/main/store'
import { makeRemoteEventDetail } from '@/main/factories/usecases'
import { useFormatDataUpdatedEvent } from './useFormatDataUpdatedEvent'
import { useUpdateEvent } from './useUpdatedEvent'
import { FormUpdateEventProps } from '../types/form-update-event-props'

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
    event,
    error,
    isError,
    isLoading,
    isSuccess,
    handlerUpdateEvent,
    setEvent,
  } = useUpdateEvent()
  const { formatDataUpdatedEvent } = useFormatDataUpdatedEvent()
  const { handleStorageFirebase } = useUpload()
  const { URLFile, setURLFile } = useUploadURLFileStore()

  const loadEventDetail = useCallback(async () => {
    const detailsEvent = makeRemoteEventDetail()
    if (typeof eventId !== 'string') {
      return
    }

    const event = await detailsEvent.getDetailEvent({ eventId })
    setEvent(event)
  }, [eventId, setEvent])

  const handleUpdateDataFormEvent = useCallback(async () => {
    if (!event) {
      return
    }

    setValue('title', event.title)
    setValue('description', event.description)
    setValue('dateEvent', event.date)
    setValue('hourEvent', event.hours)
    setValue('public', event.public)
    setValue('typeEvent', event.type)
  }, [event, setValue])

  useEffect(() => {
    loadEventDetail()
  }, [loadEventDetail])

  useEffect(() => {
    handleUpdateDataFormEvent()
  }, [handleUpdateDataFormEvent])

  async function handleUpdatedEvent(params: FormUpdateEventProps) {
    if (!params.image) {
      return
    }

    if (!URLFile) {
      return alert('URL inválida!!')
    }

    if (URLFile === '') {
      return
    }

    if (typeof eventId !== 'string') {
      return
    }

    const dataFormat = formatDataUpdatedEvent({ eventId, URLFile, params })

    await handleStorageFirebase({ name: params.title, file: params.image })
    await handlerUpdateEvent(dataFormat)
    setURLFile('')
  }

  return {
    event,
    error,
    isError,
    isSuccess,
    isLoading,
    errors,
    control,
    register,
    handleSubmit,
    handleUpdatedEvent,
  }
}
