import { makeFormatted } from '@/validation/factories'

export function useFormatted() {
  const formatted = makeFormatted()

  return { formatted }
}
