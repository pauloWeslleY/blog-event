import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ICreateEvent } from '@/data/firebase'
import { makeRemoteAddEvent } from '@/main/factories/usecases'

export function useCreateEvent() {
  const queryClient = useQueryClient()

  const event = useMutation({
    mutationFn: async (params: ICreateEvent.Params) => {
      const newEvent = makeRemoteAddEvent('event')
      const response = await newEvent.add(params)
      return response
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['list-events'],
        refetchType: 'active',
      })
    },
    onError: (error) => error.message,
  })

  return { event }
}
