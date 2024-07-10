import { FormGroupProps } from './types'
import Styles from './styles.module.css'

export function FormGroup({
  label,
  children,
  error,
  helperText,
  className,
  ...rest
}: FormGroupProps) {
  return (
    <div className={[Styles.form_group, className].join(' ')}>
      {label && <label {...rest}>{label}</label>}
      {children}
      {error && <span>{helperText}</span>}
    </div>
  )
}
