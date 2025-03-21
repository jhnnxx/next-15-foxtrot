import { signOutWithGoogle } from '@/app/serverAction/auth'

export default function SignOutButton() {
  return (
    <form action={signOutWithGoogle}>
      <button type="submit">로그아웃</button>
    </form>
  )
}
