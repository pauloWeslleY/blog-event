import { z } from 'zod'

export const schemaLogin = z.object({
  email: z.string().email({ message: 'Informe o email valido' }),
  password: z.string().min(1, { message: 'Informe sua senha' }),
})
