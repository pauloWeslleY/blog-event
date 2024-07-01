import { LabelHTMLAttributes, ReactNode } from 'react'

export type FormGroupProps = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string
  children: ReactNode
  helperText?: string
  error?: boolean
}
