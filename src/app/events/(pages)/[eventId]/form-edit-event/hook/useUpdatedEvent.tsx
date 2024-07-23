import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IUpdateEvent } from '@/domain/interfaces'
import { makeRemoteUpdatedEvent } from '@/main/factories/usecases'

export function useUpdatedEvent() {
  const queryClient = useQueryClient()

  const updatedEvent = useMutation({
    mutationFn: async (params: IUpdateEvent.Params) => {
      const updateEvent = makeRemoteUpdatedEvent('/event/event-updated')
      const response = await updateEvent.updated(params)
      return response
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['event-details'],
        refetchType: 'active',
      })
    },
    onError: (error) => error.message,
  })

  return {
    updatedEvent,
  }
}
