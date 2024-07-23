import { useEffect } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IRemoveEvent } from '@/domain/interfaces'
import { makeRemoteRemoveEvent } from '@/main/factories/usecases'
import { useLoaderStore } from '@/main/store'

export function useDeleteEventModal() {
  const { setLoader } = useLoaderStore()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: async (params: IRemoveEvent.Params) => {
      const delEvent = makeRemoteRemoveEvent(
        `/event/event-delete/${params.eventId}`,
      )
      const response = delEvent.remove()
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

  useEffect(() => {
    setLoader(isPending)
  }, [isPending, setLoader])

  function handleDeleteEvent(eventId: string) {
    mutate({ eventId })
  }

  return { handleDeleteEvent, isPending }
}
