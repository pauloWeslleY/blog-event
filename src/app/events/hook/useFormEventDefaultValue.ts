import { FormCreatedEventProps } from '@/app/events/create-event-modal/types'
import { FormUpdateEventProps } from '@/app/events/(pages)/[eventId]/form-edit-event/types/form-update-event-props'

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
