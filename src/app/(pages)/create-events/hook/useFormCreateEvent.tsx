import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schemaCreateEvent } from '@/validation'
import { FormCreateEventProps } from '@/app/(pages)/create-events/types'

const useFormCreateEvent = () => {
  const {
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
    },
  })

  const handleCreateEvent = (params: FormCreateEventProps) => {
    console.log(params)
  }

  return {
    errors,
    control,
    register,
    handleSubmit,
    handleCreateEvent,
  }
}

export { useFormCreateEvent }
