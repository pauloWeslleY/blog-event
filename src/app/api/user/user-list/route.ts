import { NextResponse } from 'next/server'
import { makeRemoteUserList } from '@/main/factories/firebase-database'

export async function GET() {
  const users = makeRemoteUserList()
  const response = await users.getUserList()
  return NextResponse.json(response)
}
