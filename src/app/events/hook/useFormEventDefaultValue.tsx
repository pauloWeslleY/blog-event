import { FormUpdateEventProps } from '@/app/events/(pages)/[eventId]/form-edit-event/types'
import { FormCreatedEventProps } from '@/app/events/create-event-modal/types'

export function useFormEventDefaultValue() {
  const loadFormCreateEventDefaultValue = (): FormCreatedEventProps => ({
    title: '',
    description: '',
    dateEvent: '',
    hourEvent: '',
    typeEvent: '',
    image: null,
  })

  const loadFormUpdateEventDefaultValue = (): FormUpdateEventProps => ({
    title: '',
    description: '',
    dateEvent: '',
    hourEvent: '',
    typeEvent: '',
    public: false,
    image: null,
  })

  return { loadFormUpdateEventDefaultValue, loadFormCreateEventDefaultValue }
}
