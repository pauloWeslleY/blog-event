import { FormGroupProps } from './types'
import Styles from './styles.module.css'

const FormGroup = (props: FormGroupProps) => {
  const { label, children, error, helperText, ...rest } = props

  return (
    <div className={Styles.form_group}>
      <label {...rest}>{label}</label>
      {children}
      {error && <span>{helperText}</span>}
    </div>
  )
}

export { FormGroup }
