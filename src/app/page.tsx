import Header from '@/components/Header'
import IdentityForm from './identity-form'

export async function getIdentities() {
  const apiKey = process.env.NEXT_PUBLIC_X_API_KEY
  const didSession = process.env.NEXT_PUBLIC_DID_SESSION
  const creatorAddress = process.env.NEXT_PUBLIC_MY_WALLET_ADDRESS

  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${didSession}`,
    ...(apiKey ? { 'x-api-key': apiKey } : {}),
  }

  const body = {
    input: {
      creator: { value: creatorAddress, op: '=' },
    },
  }

  // Logging the request details
  console.log('URL:', `http://api.intuition.cafe/query/identities`)
  console.log('Headers:', headers)
  console.log('Body:', JSON.stringify(body))

  const res = await fetch(`http://api.intuition.cafe/query/identities`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  const { data: identities } = await res.json()
  return identities
}

export default async function Home() {
  const identities = await getIdentities()
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
