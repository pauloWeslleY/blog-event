import { QueryClient } from '@tanstack/react-query'

export const makeQueryClient = (): QueryClient => new QueryClient()
