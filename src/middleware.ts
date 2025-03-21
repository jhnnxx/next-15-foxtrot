import { auth } from '@/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const session = await auth()
  console.log('middleware:', request.url)
  console.log('mid session:', session)
  return NextResponse.next()
}

// export const config = {
//   matcher: '/',
// }
