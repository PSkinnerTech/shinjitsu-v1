import Header from '@/components/Header'
import IdentityForm from './identity-form'
import { IdentityQueryBody } from '../types/types'

export async function getIdentitiesByCreator() {
  const your_did_session = process.env.NEXT_PUBLIC_DID_SESSION
  const your_api_key = process.env.NEXT_PUBLIC_X_API_KEY
  const your_wallet_address = process.env.NEXT_PUBLIC_MY_WALLET_ADDRESS

  if (!your_api_key) {
    throw new Error('API key is undefined')
  }

  const requestBody: IdentityQueryBody = {
    input: {
      creator: { value: your_wallet_address || '', op: '=' },
    },
    options: {
      pagination: { size: 10, page: 0 },
      orderBy: { field: 'created_at', direction: 'desc' },
    },
  }

  const res = await fetch(`http://api.intuition.cafe/query/identities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${your_did_session}`,
      'x-api-key': your_api_key,
    },
    body: JSON.stringify(requestBody),
  })

  const identities = await res.json()
  return identities
}

export default async function Home() {
  const identities = await getIdentitiesByCreator()
  console.log(identities)

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24 gap-y-12">
        <Header />
        <div className="h-full flex flex-col items-center pt-40">
          <p className="rounded-md px-4 py-3 font-mono text-md cursor-default border border-stone-800/50 bg-gray-50/5 backdrop-blur-sm">
            Get started by editing{' '}
            <span className="font-bold text-success-500">src/app/page.tsx</span>
          </p>
        </div>
        <IdentityForm />
      </main>
    </>
  )
}
