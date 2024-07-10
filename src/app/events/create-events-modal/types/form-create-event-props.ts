import { z } from 'zod'
import { schemaCreateEvent } from '@/validation'

export type FormCreateEventProps = z.infer<typeof schemaCreateEvent>
