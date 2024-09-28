'use client'

import { useRouter } from 'next/navigation'
import { IconButton } from '@radix-ui/themes'
import { ChevronsLeftIcon } from 'lucide-react'
import './styles.css'

export function HeaderEvent({ title }: { title: string }) {
  const router = useRouter()

  return (
    <header className="edit-event__header">
      <IconButton variant="ghost" onClick={() => router.push('/events')}>
        <ChevronsLeftIcon />
      </IconButton>

      <div className="edit-event__title">
        <span>Event:</span>
        <h3 className="title">{title}</h3>
      </div>
    </header>
  )
}
