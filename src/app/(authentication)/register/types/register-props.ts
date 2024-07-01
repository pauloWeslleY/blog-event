import { z } from 'zod'
import { schemaAuthRegister } from '@/validation'

export type SignUpProps = z.infer<typeof schemaAuthRegister>
