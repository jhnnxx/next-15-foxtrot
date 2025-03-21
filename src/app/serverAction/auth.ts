'use server'
import { auth, signIn, signOut, update } from '@/auth'

export const signInWithGoogle = async () => {
  await signIn('google', { redirectTo: '/' })
}

export const signOutWithGoogle = async () => {
  await signOut()
}

export { auth as getSession, update as updateSession }
