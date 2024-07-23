import { NextRequest, NextResponse } from 'next/server'
import { makeRemoteUserLogged } from '@/main/factories/firebase-database'

export async function GET(request: NextRequest) {
  const uid = request.cookies.get('uid')?.value
  const user = makeRemoteUserLogged()
  const data = await user.getUserInfo(uid || '')

  return NextResponse.json({ data })
}
