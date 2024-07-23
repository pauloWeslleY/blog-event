'use client'
import { ReactNode } from 'react'
import './styles.css'

export default function LayoutAuth({ children }: { children: ReactNode }) {
  return (
    <div className="auth-wrapper">
      <div className="auth-banner" />

      <div className="auth-form">{children}</div>
    </div>
  )
}
