import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'
import * as Select from '@radix-ui/react-select'
import { CheckIcon } from 'lucide-react'
import classNames from 'classnames'
import './styles.css'

interface SelectItemProps extends ComponentPropsWithoutRef<typeof Select.Item> {
  children: ReactNode
  className?: string
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Select.Item
      {...props}
      ref={forwardedRef}
      className={classNames('select--item', className)}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="select--item-indicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  ),
)

SelectItem.displayName = 'SelectItem'
