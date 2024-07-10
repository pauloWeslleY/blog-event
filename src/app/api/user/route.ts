import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { makeRemoteUserLogged } from '@/main/factories/usecases'

export async function GET() {
  const uid = cookies().get('uid')?.value
  const user = makeRemoteUserLogged()
  const data = await user.getUserInfo(uid || '')

  return NextResponse.json({ data })
}
