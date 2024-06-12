import { z } from 'zod'
import { schemaRegister } from '@/app/(authenticated)/register/schema'

export type SignUpProps = z.infer<typeof schemaRegister>
