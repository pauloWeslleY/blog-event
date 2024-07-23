import { NextResponse } from 'next/server'
import { makeRemoteUpdatedViewEvent } from '@/main/factories/firebase-database'
import { IEventUpdatedView } from '@/domain/interfaces'

interface GetParamsUpdateViewEventPros {
  params: { eventId: string }
}

export async function PUT(
  request: Request,
  { params }: GetParamsUpdateViewEventPros,
) {
  const body = (await request.json()) as IEventUpdatedView.Params
  const { eventId } = params
  const eventInfoUpdateView = makeRemoteUpdatedViewEvent()
  await eventInfoUpdateView.updatedViewEvent({
    eventId,
    views: body.views,
  })

  return NextResponse.json({ message: 'Visualização do evento atualizada!' })
}
