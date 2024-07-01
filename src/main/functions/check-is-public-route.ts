import { APP_ROUTES } from '@/main/constants'

export const checkIsPublicRoute = (asPath: string): boolean => {
  const appPublicRoute = Object.values(APP_ROUTES.public)

  return appPublicRoute.includes(asPath)
}
