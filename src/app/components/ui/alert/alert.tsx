import { Callout } from '@radix-ui/themes'
import { BsInfoCircle } from 'react-icons/bs'

const Alert = ({ message }: { message: string }) => (
  <Callout.Root color="red" mb="2">
    <Callout.Icon>
      <BsInfoCircle size={25} />
    </Callout.Icon>
    <Callout.Text weight="bold" size="2">
      {message}
    </Callout.Text>
  </Callout.Root>
)

export { Alert }
