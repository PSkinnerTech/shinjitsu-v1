import Link from 'next/link'
import { AccountButton } from './AccountButton'
import IntuitionLogotype from './svg/intuition-logotype'

export default function Header() {
  return (
    <div className="max-w-7xl w-full items-center justify-between lg:flex">
      <div className="space-y-6 max-lg:flex max-lg:flex-col max-lg:items-center">
        <Link href="/">
          <IntuitionLogotype />
        </Link>
        <p className="rounded-md px-3 py-2 font-mono text-sm cursor-default border border-primary-700 bg-gray-100/5 backdrop-blur-sm">
          Get started by editing <span className="font-bold">src/app/page.tsx</span>
        </p>
      </div>
      <div className="flex flex-row items-center mt-4 max-lg:justify-center">
        <AccountButton />
      </div>
    </div>
  )
}
