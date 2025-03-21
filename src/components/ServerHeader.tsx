import { auth } from '@/auth'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import Image from 'next/image'
import Link from 'next/link'

export default async function ServerHeader() {
  const session = await auth()
  return (
    <header className={`flex items-center justify-between px-6 py-6 shadow`}>
      <nav className={`flex gap-3`}>
        <Link href={'/'}>HOME</Link>
        <Link href={'/about'}>ABOUT</Link>
        {!session ? <SignInButton /> : <SignOutButton />}
      </nav>
      {session?.user && (
        <div className={`flex gap-2`}>
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
    </header>
  )
}
