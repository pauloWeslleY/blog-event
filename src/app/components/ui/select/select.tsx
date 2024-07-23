import * as SelectUI from '@radix-ui/react-select'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { SelectOptionsProps } from '@/app/components/types'
import { SelectItem } from './select-item'
import './styles.css'

interface SelectProps extends SelectUI.SelectProps {
  label?: string
  placeholder: string
  options: SelectOptionsProps[]
}

export function Select({
  label = '',
  placeholder = '',
  options,
  ...props
}: SelectProps) {
  return (
    <SelectUI.Root {...props}>
      <SelectUI.Trigger className="select--trigger" aria-label="Food">
        <SelectUI.Value placeholder={placeholder} />
        <SelectUI.Icon className="select--icon">
          <ChevronDownIcon />
        </SelectUI.Icon>
      </SelectUI.Trigger>
      <SelectUI.Portal>
        <SelectUI.Content className="select--content">
          <SelectUI.ScrollUpButton className="select--scroll-button">
            <ChevronUpIcon />
          </SelectUI.ScrollUpButton>
          <SelectUI.Viewport className="select--viewport">
            <SelectUI.Group>
              {label && (
                <>
                  <SelectUI.Label className="select--label">
                    {label}
                  </SelectUI.Label>
                  <SelectUI.Separator className="select--separator" />
                </>
              )}

              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectUI.Group>
          </SelectUI.Viewport>
          <SelectUI.ScrollDownButton className="select--scroll-button">
            <ChevronDownIcon />
          </SelectUI.ScrollDownButton>
        </SelectUI.Content>
      </SelectUI.Portal>
    </SelectUI.Root>
  )
}
