import { getCurrentUserAdapter } from '@/main/adapters/user-logged-adapter'

export const checkUserAuthenticated = () => {
  const userToken = getCurrentUserAdapter()?.accessToken
  return !!userToken
}
