import Link from 'next/link'
import { AccountButton } from './AccountButton'
import Intuition from './Intuition'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 ">
      <div className="flex items-center justify-between mx-auto max-w-7xl py-6 sm:py-6">
        <Link href="/">
          <Intuition />
        </Link>

        <div className="flex flex-row items-center gap-x-4 mt-4">
          <AccountButton />
        </div>
      </div>
    </header>
  )
}
