import { getServerSession } from 'next-auth'

import { AuthSession } from '@/types/session'
import { options } from '@/app/api/auth/[...nextauth]/options'

export async function requireAuth() {
  const session = (await getServerSession(options)) as AuthSession
  if (!isAuthSession(session)) {
    throw new Error('You must be logged in.')
  }
  return session!
}

function isAuthSession(session: any): session is AuthSession {
  return (
    session &&
    typeof session.didSession === 'string' &&
    typeof session.apikey === 'string'
  )
}
