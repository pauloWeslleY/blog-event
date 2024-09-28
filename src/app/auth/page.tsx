'use client'
import Link from 'next/link'
import { Tabs } from '@radix-ui/themes'
import { useUserStore } from '@/main/store'
import { useMenuAuth } from './hook/'
import './styles.css'

export default function Auth() {
  const { isLoading } = useUserStore()
  const { loadMenuAuth } = useMenuAuth()

  return (
    <div className="tabs-root">
      <Tabs.Root defaultValue="login">
        <Tabs.List>
          {loadMenuAuth().map(({ value, label }) => (
            <Tabs.Trigger key={value} value={value}>
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <main className="tabs-content">
          {loadMenuAuth().map(({ value, component: Component }) => (
            <Tabs.Content key={value} value={value}>
              <Component />

              {!isLoading && (
                <div className="tabs-actions">
                  <Link href="/">Voltar</Link>

                  {value !== 'register' && (
                    <>
                      <div className="tabs-actions--separator" />
                      <Link href="#">Esqueci minha senha</Link>
                    </>
                  )}
                </div>
              )}
            </Tabs.Content>
          ))}
        </main>
      </Tabs.Root>
    </div>
  )
}
