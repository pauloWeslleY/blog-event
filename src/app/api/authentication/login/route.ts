import { NextRequest, NextResponse } from 'next/server'
import {
  makeRemoteError,
  makeRemoteUserAuthSignIn,
} from '@/main/factories/usecases'
import { ISignIn } from '@/data/firebase'
import { AccountModel } from '@/domain/models'
import { savedCookies } from '@/infra/cache/cookies'

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ISignIn.Params

  const userAuthSignIn = makeRemoteUserAuthSignIn()
  const isError = makeRemoteError()

  const response = await userAuthSignIn.login(body)
  const errSignIn = isError.isVerifyErrorMessage(response)
  const data = response as AccountModel

  if (errSignIn !== '') {
    return NextResponse.json(errSignIn)
  }

  if (errSignIn === '') {
    savedCookies(data)
  }

  return NextResponse.json(data)
}
