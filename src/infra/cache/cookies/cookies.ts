'use server'
import { cookies } from 'next/headers'
import { AccountModel } from '@/domain/models'

export async function savedCookies(data: AccountModel) {
  cookies().set('uid', data.id)
  cookies().set('email', data.email)
  cookies().set('name', data.username)
  cookies().set('token', data.accessToken)
}

export async function getCookies(): Promise<AccountModel> {
  const uid = cookies().get('uid')?.value
  const email = cookies().get('email')?.value
  const name = cookies().get('name')?.value
  const token = cookies().get('token')?.value

  return {
    id: uid || '',
    email: email || '',
    username: name || '',
    accessToken: token || '',
  }
}

export async function deleteCookies() {
  cookies().delete('uid')
  cookies().delete('name')
  cookies().delete('email')
  cookies().delete('token')
}
