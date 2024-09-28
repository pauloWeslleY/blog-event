import { makeRemoteEventDetail } from '@/main/factories/usecases'
import { EditEventProps } from './types/edit-event-props'
import { FormEditEvent } from './form-edit-event/form-edit-event'
import { HeaderEvent } from './header-event'
import './styles.css'

export default async function EditEvent({ params }: EditEventProps) {
  const detailsEvent = makeRemoteEventDetail()
  const event = await detailsEvent.getDetailEvent({ eventId: params.eventId })

  return (
    <div className="edit-event__container">
      <HeaderEvent title={event.title} />

      <div className="edit-event-main__wrapper">
        <FormEditEvent />
      </div>
    </div>
  )
}
