import * as SwitchUI from '@radix-ui/react-switch'
import './styles.css'

interface SwitchProps extends SwitchUI.SwitchProps {
  labelRight?: string
  labelLeft?: string
}

export function Switch({
  labelLeft = '',
  labelRight = '',
  ...props
}: SwitchProps) {
  return (
    <div className="switch--wrapper">
      {labelLeft && <label className="switch--label">{labelLeft}</label>}
      <SwitchUI.Root {...props} className="switch--root">
        <SwitchUI.Thumb className="switch--thumb" />
      </SwitchUI.Root>
      {labelRight && <label className="switch--label">{labelRight}</label>}
    </div>
  )
}
