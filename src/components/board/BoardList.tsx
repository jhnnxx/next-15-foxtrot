'use client'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function BoardList({ postId }: { postId: string }) {
  const [session, setSession] = useState<Session | null>()
  useEffect(() => {
    getSession().then((session) => setSession(session))
  }, [])
  console.log(session)
  return <div>{postId}</div>
}
