import { z } from 'zod'

export const schemaAuthRegister = z.object({
  username: z.string().min(1, { message: 'Informe seu username' }),
  email: z.string().email({ message: 'Informe o email valido' }),
  password: z.string().min(1, { message: 'Informe sua senha' }),
})
