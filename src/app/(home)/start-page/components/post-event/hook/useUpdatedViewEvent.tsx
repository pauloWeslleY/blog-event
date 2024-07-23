import { useEffect } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { IUpdatedViewEvent } from '@/data/firebase'
import { makeRemoteEventViewUpdated } from '@/main/factories/usecases'

interface UseUpdatedViewEventProps {
  eventId: string
}

export function useUpdatedViewEvent({ eventId }: UseUpdatedViewEventProps) {
  const queryClient = useQueryClient()
  const router = useRouter()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (params: IUpdatedViewEvent.Params) => {
      const updateView = makeRemoteEventViewUpdated(
        `/event/event-updated-view/${params.eventId}`,
      )
      await updateView.updated({ views: params.views })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['list-events'],
        refetchType: 'active',
      })
    },
  })

  useEffect(() => {
    if (isSuccess) {
      router.push(`/${eventId}`)
    }
  }, [isSuccess, router, eventId])

  function handleUpdatedViewEvent(params: IUpdatedViewEvent.Params) {
    mutate(params)
  }

  return { handleUpdatedViewEvent, isPending }
}
