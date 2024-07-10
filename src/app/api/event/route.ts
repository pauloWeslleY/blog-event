import { NextRequest, NextResponse } from 'next/server'
import { ICreateEvent } from '@/data/firebase'
import { makeRemoteCreateEvent } from '@/main/factories/usecases'

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ICreateEvent.Params
  const event = makeRemoteCreateEvent()
  const response = await event.create(body)
  return NextResponse.json(response)
}