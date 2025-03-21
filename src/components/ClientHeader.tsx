'use client'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import { useSession } from '@/providers/session'
import Image from 'next/image'
import Link from 'next/link'

export default function ClientHeader() {
  const session = useSession()
  // console.log(session)
  return (
    <header>
      {session?.user && (
        <div className={`flex items-center gap-2`}>
          <Image
            src={session.user.image ?? ''}
            className={`rounded-full`}
            width="25"
            height="25"
            alt={''}
          />
          <div>{session.user.name}</div>
        </div>
      )}
      <nav className={`flex gap-3`}>
        <Link href={'/'}>HOME</Link>
        <Link href={'/about'}>ABOUT</Link>
        {session?.user ? (
          <>
            <SignOutButton />
          </>
        ) : (
          <>
            <SignInButton />
            <Link href={'/signup'}>회원가입</Link>
          </>
        )}
      </nav>
    </header>
  )
}
