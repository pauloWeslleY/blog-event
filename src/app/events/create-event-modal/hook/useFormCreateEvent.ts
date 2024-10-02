import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schemaCreatedEvent } from '@/validation'
import { useUploadProgressStore, useUserStore } from '@/main/store'
import { useFormEventDefaultValue, useSelectEvent } from '@/app/events/hook'
import { FormCreatedEventProps } from '@/app/events/create-event-modal/types'
import { useCreateEvent } from './useCreateEvent'

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
  const { loadSelectTypeEvent } = useSelectEvent()
  const { progress } = useUploadProgressStore()

  async function handleCreateEvent(params: FormCreatedEventProps) {
    if (!user || !params.image) {
      return
    }

    await handlerCreateEvent({
      title: params.title,
      description: params.description,
      date: params.dateEvent,
      hours: params.hourEvent,
      type: params.typeEvent,
      photoUrl: params.image,
      ownerId: user.id,
    })

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
