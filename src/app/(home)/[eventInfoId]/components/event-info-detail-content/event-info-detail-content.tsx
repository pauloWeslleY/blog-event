import { ComponentProps } from 'react'
import classNames from 'classnames'
import './styles.css'

interface EventInfoDetailContentProps extends ComponentProps<'div'> {
  title: string
  description: string
}

export function EventInfoDetailContent({
  title,
  description,
  className,
  ...props
}: EventInfoDetailContentProps) {
  return (
    <div
      {...props}
      className={classNames('event-info__detail-content', className)}
    >
      <span>{title}</span> <h3>{description}</h3>
    </div>
  )
}
