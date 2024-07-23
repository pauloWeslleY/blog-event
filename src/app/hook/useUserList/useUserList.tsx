import { useQuery } from '@tanstack/react-query'
import { makeRemoteListUser } from '@/main/factories/usecases'

export function useUserList() {
  const loadUserList = useQuery({
    queryKey: ['user-list'],
    queryFn: () => {
      const user = makeRemoteListUser('/user/user-list')
      return user.getUserList()
    },
  })

  return { loadUserList }
}
