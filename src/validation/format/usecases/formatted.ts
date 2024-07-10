import { Timestamp } from 'firebase/firestore'
import dayjs from 'dayjs'

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
}
