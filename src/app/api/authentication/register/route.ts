import { NextRequest, NextResponse } from 'next/server'
import { makeRemoteError } from '@/main/factories/usecases'
import { IUserSignUp } from '@/data/firebase'
import { AccountModel } from '@/domain/models'
import { savedCookies } from '@/infra/cache/cookies'
import { makeRemoteUserAuthSignUp } from '@/main/factories/firebase-database'

export async function POST(request: NextRequest) {
  const body = (await request.json()) as IUserSignUp.Params

  const userAuthSignUp = makeRemoteUserAuthSignUp()
  const isError = makeRemoteError()

  const response = await userAuthSignUp.register(body)
  const errSignUp = isError.isVerifyErrorMessage(response)
  const data = response as AccountModel

  if (errSignUp !== '') {
    return NextResponse.json({ errSignUp })
  }

  if (errSignUp === '') {
    savedCookies(data)
  }

  return NextResponse.json(data)
}
