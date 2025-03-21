import { signInWithGoogle } from '@/app/serverAction/auth'

export default function SignInButton() {
  return (
    <form action={signInWithGoogle}>
      <button type="submit">구글 로그인</button>
    </form>
  )
}
