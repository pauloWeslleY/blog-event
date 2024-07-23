import { NextRequest, NextResponse } from 'next/server'
import { makeRemoteEditEvent } from '@/main/factories/firebase-database'
import { IEditEvent } from '@/data/firebase'

export async function PUT(request: NextRequest) {
  const body = (await request.json()) as IEditEvent.Params
  const eventUpdated = makeRemoteEditEvent()
  const data = await eventUpdated.update(body)

  return NextResponse.json(data)
}
