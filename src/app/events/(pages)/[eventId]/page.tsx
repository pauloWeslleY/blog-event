'use client'
import { useRouter } from 'next/navigation'
import { IconButton } from '@radix-ui/themes'
import { ChevronsLeft } from 'lucide-react'
import { Alert, Loader } from '@/app/components/ui'
import { useDetailsEvent } from '@/app/hook'
import { EditEventProps } from './types'
import { FormEditEvent } from './form-edit-event'
import './styles.css'

export default function EditEvent({ params }: EditEventProps) {
  const router = useRouter()

  const {
    loadDetailsEvent: { data, isLoading, error, isError },
  } = useDetailsEvent({ params })

  if (isError) {
    return (
      <div className="edit-event__status-wrapper">
        <Alert message={error.message} />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="edit-event__status-wrapper">
        <Loader text="Carregando informações" />
      </div>
    )
  }

  return (
    <div className="edit-event__container">
      <header className="edit-event__header">
        <IconButton variant="ghost" onClick={() => router.push('/events')}>
          <ChevronsLeft />
        </IconButton>

        <div className="edit-event__title">
          <span>Event:</span>
          <h3 className="title">{data?.title}</h3>
        </div>
      </header>

      <div className="edit-event-main__wrapper">
        <FormEditEvent />
      </div>
    </div>
  )
}
