import { z } from 'zod'

export const schemaAuthRegister = z.object({
  username: z.string().min(1, { message: 'Informe seu username' }),
  email: z
    .string()
    .min(1, { message: 'Informe seu email' })
    .email({ message: 'Informe o email valido' }),
  password: z.string().min(6, { message: 'Sua senha deve conter 6 dígitos' }),
})
