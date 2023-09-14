import { Session } from 'next-auth'

export type AuthSession =
  | (Session & {
      didSession: string
      apikey: string
      did: string
      wallet: string
    })
  | undefined
