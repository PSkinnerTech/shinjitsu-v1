'use client'
import Link from 'next/link'
import { AccountButton } from './AccountButton'
import AuthenticateCard from './AuthenticateCard'
import { useAccount } from 'wagmi'

export default function AuthHeader() {
  const { isConnected } = useAccount()
  return (
    <div className="max-w-7xl w-full items-start justify-between lg:flex">
      <div className="space-y-6 max-lg:flex max-lg:flex-col max-lg:items-center">
        <p className="rounded-md px-3 py-2 font-mono text-sm cursor-default border border-stone-800/50 bg-gray-50/5 backdrop-blur-sm">
          Get started by authenticating your{' '}
          <span className="font-bold text-success-500">DID Session</span> and{' '}
          <span className="font-bold text-success-500">API Key</span>
        </p>
      </div>
      <div className="flex flex-col items-end max-lg:items-center mt-4 max-lg:justify-center gap-4">
        <AuthenticateCard />
      </div>
    </div>
  )
}
