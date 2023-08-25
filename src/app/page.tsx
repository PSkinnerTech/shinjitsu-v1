'use client'

import Header from '@/components/Header'
import { Onboarding } from '@/components/Onboarding'
import Resources from '@/components/Resources'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="flex h-10 rounded-md px-3 py-2 text-sm cursor-default glassmorphic border-2 border-gray-600">
            <p>Get started by editing <span className='font-bold'>src/app/page.tsx</span></p>
          </div>
        </div>
        <Onboarding />
        <Resources />
      </main>
    </>
  )
}
