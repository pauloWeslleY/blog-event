import { ComponentProps, ElementType, forwardRef } from 'react'
import classNames from 'classnames'
import './input.css'

type InputProps = ComponentProps<'input'> & {
  icon?: ElementType
  className?: string
  error?: boolean
  helperText?: string | undefined
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, helperText = '', error = false, className, ...rest }, ref) => {
    return (
      <fieldset className={classNames('fieldset', className)}>
        <div
          className={classNames('fieldset--control', {
            'fieldset--control-error': error,
          })}
        >
          {Icon && <Icon className="fieldset--icon" />}

          <input {...rest} ref={ref} className="fieldset--input" />
        </div>

        {error && <span className="fieldset--helper-text">{helperText}</span>}
      </fieldset>
    )
  },
)

Input.displayName = 'Input'
