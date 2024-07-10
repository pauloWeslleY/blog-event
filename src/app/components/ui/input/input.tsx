import { ComponentProps, ElementType, forwardRef } from 'react'
import './input.css'

type InputProps = ComponentProps<'input'> & {
  error?: boolean
  helperText?: string | undefined
  icon?: ElementType
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, helperText, error, ...rest }, ref) => {
    return (
      <fieldset className="fieldset">
        <div className="form-control">
          {Icon && <Icon />}

          <input {...rest} ref={ref} className="input" />
        </div>

        {error && <span>{helperText}</span>}
      </fieldset>
    )
  },
)

Input.displayName = 'Input'

export { Input }
