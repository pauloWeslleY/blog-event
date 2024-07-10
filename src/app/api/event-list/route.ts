import { NextResponse } from 'next/server'
import { makeRemoteListEvent } from '@/main/factories/usecases'

export async function GET() {
  const event = makeRemoteListEvent()
  const response = await event.getListEvent()
  return NextResponse.json(response)
}
