import { Formatted } from '@/validation/format/usecases'

export function makeFormatted(): Formatted {
  return new Formatted()
}
