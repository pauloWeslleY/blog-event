import { NextResponse } from 'next/server'
import { makeRemoteDeleteEvent } from '@/main/factories/firebase-database'

interface GetParamsDeleteEventPros {
  params: { eventId: string }
}

export async function DELETE(
  request: Request,
  { params }: GetParamsDeleteEventPros,
) {
  const { eventId } = params
  const eventInfo = makeRemoteDeleteEvent()
  await eventInfo.deleteEvent({ eventId })

  return NextResponse.json({ message: 'Evento Deletado!' })
}
