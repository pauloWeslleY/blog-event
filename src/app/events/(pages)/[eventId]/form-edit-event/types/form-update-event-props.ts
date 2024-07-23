import { z } from 'zod'
import { schemaUpdateEvent } from '@/validation'

export type FormUpdateEventProps = z.infer<typeof schemaUpdateEvent>
