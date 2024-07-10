'use client'
import { ReactNode } from 'react'
import './styles.css'

export default function LayoutAuth({ children }: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <section className="form-banner" />

      <div className="form">{children}</div>
    </div>
  )
}
