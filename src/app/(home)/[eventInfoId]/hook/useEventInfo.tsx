import { useMemo } from 'react'
import { useSelectEvent } from '@/app/events/hook'
import { useUserList } from '@/app/hook'
import { IEventDetailRepo } from '@/data/factories'

export function useEventInfo(params: IEventDetailRepo.Model | undefined) {
  const { loadSelectTypeEvent } = useSelectEvent()

  const {
    loadUserList: { data },
  } = useUserList()

  const loadEventType = useMemo(() => {
    return loadSelectTypeEvent().find((event) => event.value === params?.type)
  }, [loadSelectTypeEvent, params?.type])

  const loadOwnerInfo = useMemo(() => {
    return data?.find((user) => user.id === params?.ownerId)
  }, [data, params?.ownerId])

  return { loadEventType, loadOwnerInfo }
}
