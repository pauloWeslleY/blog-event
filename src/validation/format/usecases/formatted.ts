import { Timestamp } from 'firebase/firestore'
import dayjs from 'dayjs'
import moment from 'moment'

type FormattedDateProps = {
  date: Timestamp
  hours?: boolean
}

export class Formatted {
  formatDateHour({ date, hours }: FormattedDateProps): string {
    const seconds = date.seconds
    const nanoseconds = date.nanoseconds
    const milliseconds = seconds * 1000 + nanoseconds / 1000000
    const formatString = hours ? 'DD/MM/YYYY [ás] HH:mm' : 'DD/MM/YYYY'

    return dayjs(milliseconds).format(formatString)
  }

  transformarParaTimestamp(data: string): Timestamp {
    // Parse a string da data para um objeto Moment
    const momentDate = moment(data, 'DD/MM/YYYY [às] HH:mm')

    // Verifica se a data é válida
    if (!momentDate.isValid()) {
      throw new Error('Data inválida')
    }

    // Converte o objeto Moment para uma data do JavaScript
    const jsDate = momentDate.toDate()

    // Converte a data do JavaScript para um Timestamp do Firebase
    return Timestamp.fromDate(jsDate)
  }
}
