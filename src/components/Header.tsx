import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AccountButton } from './AccountButton'

const Header = () => {
  return (
    <div
      className="flex flex-col h-full border-r bg-#111315 fixed left-0 top-0 w-64"
      style={{ borderColor: '#272B30', borderWidth: '3px' }}
    >
      {/* Logo Section */}
      <div
        className="flex items-center justify-center py-8 border-b"
        style={{ borderBottomColor: '#272B30', borderBottomWidth: '3px' }}
      >
        <Link href="/">
          <div style={{ maxWidth: '150px', position: 'relative' }}>
            <Image
              src="https://arweave.net/iQyPiOZ3SNb7PbBZtiGjUNdMH4IW1Io7HqvdsAi1nOU"
              alt="Shinjitsu Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col items-start space-y-4 flex-grow pl-7 pt-16">
        <Link href="/">
          <span className="cursor-pointer text-lg font-semibold hover:text-gray-300 text-gray-400 py-12">
            Make a Claim
          </span>
        </Link>
        <Link href="/search">
          <span className="cursor-pointer text-lg font-semibold hover:text-gray-300 text-gray-400 py-12">
            Search
          </span>
        </Link>
        <Link href="/comp-calendar">
          <span className="cursor-pointer text-lg font-semibold hover:text-gray-300 text-gray-400 py-12">
            Comp Calendar
          </span>
        </Link>
        <Link href="/analytics">
          <span className="cursor-pointer text-lg font-semibold hover:text-gray-300 text-gray-400 py-12">
            Analytics
          </span>
        </Link>
        <Link href="/settings">
          <span className="cursor-pointer text-lg font-semibold hover:text-gray-300 text-gray-400 py-12">
            Settings
          </span>
        </Link>
      </nav>

      {/* New Div */}
      <div
        className="flex items-center justify-center mb-4 rounded-3xl p-1 m-1"
        style={{
          width: '240px',
          height: '140px',
          backgroundColor: '#272B30',
          border: '1px solid #2C323C',
        }}
      >
        {/* Content of the new div can go here */}
      </div>

      {/* Separator */}
      <div style={{ borderTop: '3px solid #272B30' }} />

      {/* Account Button */}
      <div
        className="flex flex-col items-center justify-center py-8 rounded-3xl p-7 m-7"
        style={{
          width: '190px',
          height: '190px',
          backgroundColor: '#272B30',
          border: '1px solid #2C323C',
          padding: `50px`,
        }}
      >
        <AccountButton />
        <p className="text-white mt-2 text-xs">Patrick Skinner</p>{' '}
        <p className="text-gray-400 mt-2 text-xs">BJJ Purple Belt</p>{' '}
      </div>
    </div>
  )
}

export default Header
