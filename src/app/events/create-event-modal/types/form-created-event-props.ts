import { z } from 'zod'
import { schemaCreatedEvent } from '@/validation'

export type FormCreatedEventProps = z.infer<typeof schemaCreatedEvent>
