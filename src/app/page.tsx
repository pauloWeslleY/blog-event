'use client'
import { useEffect } from 'react'
import { useUserStore } from '@/main/store/user'
import { NavBar } from './components/layout'
import { useDatabase } from './hook'

export default function Home() {
  const { loadUserLogged } = useUserStore()
  const { auth } = useDatabase()

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await loadUserLogged(user.uid)
      }
    })
  }, [loadUserLogged, auth])

  return (
    <main>
      <NavBar />
    </main>
  )
}
