import { z } from 'zod'

export const schemaCreateEvent = z.object({
  title: z.string().min(1, { message: 'Informe o titulo do evento' }),
  description: z.string().min(1, { message: 'Informe a descrição do evento' }),
  hourEvent: z.string().min(1, { message: 'Informe a hora do evento' }),
  typeEvent: z.string().min(1, { message: 'Selecione o tipo do evento' }),
  dateEvent: z.string().min(1, { message: 'Informe a data do evento' }),
})
