import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schemaCreateEvent } from '@/validation'
import { FormCreateEventProps } from '@/app/events/create-events-modal/types'
import { ICreateEvent } from '@/data/firebase'
import { useUserAuthStore } from '@/main/store'
import { useCreateEvent } from './index'

export function useFormCreateEvent() {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCreateEventProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaCreateEvent),
    defaultValues: {
      title: '',
      description: '',
      dateEvent: '',
      hourEvent: '',
      typeEvent: '',
      image: undefined,
    },
  })

  const {
    event: { mutate, error, isError, isPending },
  } = useCreateEvent()

  const { userAuth } = useUserAuthStore()

  function handleCreateEvent(params: FormCreateEventProps) {
    const data = {
      title: params.title,
      description: params.description,
      date: params.dateEvent,
      hours: params.hourEvent,
      type: params.typeEvent,
      photoUrl: params.image.item(0),
      ownerId: userAuth.id,
    } satisfies ICreateEvent.Params

    mutate(data)
    reset()
  }

  return {
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
