import { ComponentProps } from 'react'
import './styles.css'
import classNames from 'classnames'

interface HelperTextProps extends ComponentProps<'span'> {
  error?: boolean
  helperText?: string | undefined
}

export function HelperText({
  error = false,
  helperText = '',
  className,
  ...props
}: HelperTextProps) {
  return (
    error && (
      <span
        {...props}
        className={classNames(
          'helper-text',
          { 'helper-text--error': error },
          className,
        )}
      >
        {helperText}
      </span>
    )
  )
}
