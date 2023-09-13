'use client'
import Link from 'next/link'
import { AccountButton } from './AccountButton'
import IntuitionLogotype from './svg/intuition-logotype'

export default function Header() {
  return (
    <div className="max-w-7xl w-full items-start justify-between lg:flex">
      <div className="space-y-6 max-lg:flex max-lg:flex-col max-lg:items-center">
        <Link href="/">
          <IntuitionLogotype />
        </Link>
      </div>
      <div className="flex flex-col items-end max-lg:items-center mt-4 max-lg:justify-center gap-4">
        <AccountButton />
      </div>
    </div>
  )
}
