import { ComponentProps } from 'react'
import classNames from 'classnames'
import './styles.css'

interface LoaderProps extends ComponentProps<'div'> {
  text?: string
}

export function Loader({ text = '', className, ...props }: LoaderProps) {
  return (
    <div {...props} className={classNames('loader__root-wrapper', className)}>
      <span className="loader" />

      {text && <p className="loader__text">{text}</p>}
    </div>
  )
}
