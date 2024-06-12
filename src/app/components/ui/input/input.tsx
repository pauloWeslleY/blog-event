import { forwardRef, InputHTMLAttributes } from 'react'
import './input.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: boolean
  helperText?: string | undefined
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, ...rest }, ref) => {
    return (
      <div className={error ? 'field error' : 'field'}>
        <label>{label}</label>
        <input {...rest} ref={ref} />

        {error && <span>{helperText}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
