import { z } from 'zod'
import { schemaAuthLogin } from '@/validation'

export type SignInProps = z.infer<typeof schemaAuthLogin>
