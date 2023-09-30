import Header from '@/components/Header'
import { getAuthHeaders } from '@/lib/api'
import { requireAuth } from '@/lib/session'

export async function getIdentities() {
  const { didSession, apikey } = await requireAuth()
  const headers = getAuthHeaders(didSession, apikey)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/query/identities`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({}),
    },
  )
  const { data: identities } = await res.json()
  return { identities }
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
      </main>
    </>
  )
}
