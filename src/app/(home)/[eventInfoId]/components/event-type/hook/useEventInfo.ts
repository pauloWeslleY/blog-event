import { useSelectEvent } from '@/app/events/hook'

export function useEventInfo(eventType: string) {
  const { loadSelectTypeEvent } = useSelectEvent()

  const loadEventType = loadSelectTypeEvent.find(
    (props) => props.value === eventType,
  )

  return {
    loadEventType,
  }
}
