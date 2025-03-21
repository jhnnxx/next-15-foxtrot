'use client'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { createContext, ReactNode, use, useEffect, useState } from 'react'

const SessionContext = createContext<Session | null>(null)

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    getSession().then((res) => {
      setSession(res)
    })
  }, [pathname])
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  return use(SessionContext)
}
