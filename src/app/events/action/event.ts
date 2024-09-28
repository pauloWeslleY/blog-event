import { getCookies } from '@/infra/cache/cookies'
import { makeRemoteListEvent } from '@/main/factories/usecases'

export default async function getEventUserAuth() {
  const event = makeRemoteListEvent()
  const data = await getCookies()
  return await event.getListEvent({ find: data.id })
}
