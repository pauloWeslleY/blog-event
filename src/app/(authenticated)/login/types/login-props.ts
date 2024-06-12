import { z } from 'zod'
import { schemaLogin } from '@/app/(authenticated)/login/schema'

export type SignInProps = z.infer<typeof schemaLogin>
