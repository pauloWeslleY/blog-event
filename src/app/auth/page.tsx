'use client'
import { Tabs } from '@radix-ui/themes'
import { useMenuAuth } from './hook'

export default function Auth() {
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
            </Tabs.Content>
          ))}
        </main>
      </Tabs.Root>
    </div>
  )
}
