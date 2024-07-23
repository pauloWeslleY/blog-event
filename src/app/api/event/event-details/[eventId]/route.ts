import { NextResponse } from 'next/server'
import { makeRemoteEventInfo } from '@/main/factories/firebase-database'

interface GetParamsEventDetailsPros {
  params: { eventId: string }
}

export async function GET(
  request: Request,
  { params }: GetParamsEventDetailsPros,
) {
  const { eventId } = params
  const eventInfo = makeRemoteEventInfo()
  const data = await eventInfo.getInfoEvent({ eventId })

  return NextResponse.json(data)
}
