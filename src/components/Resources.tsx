'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader } from './ui/card'

export default function Resources() {
  return (
    <div className="grid mb-32 text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-12">
      <Link href="#">
        <Card className="bg-aPrimary-600 glassmorphic border-aPrimary-400">
          <CardHeader className="pb-0">
            <h2 className={`mb-3 text-2xl font-semibold`}>API Client</h2>
          </CardHeader>
          <CardContent>
            <p className={`m-0 max-w-[30ch] text-sm`}>Quick description of API client goes here.</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="#">
        <Card className="bg-aPrimary-600 glassmorphic border-aPrimary-400">
          <CardHeader className="pb-0">
            <h2 className={`mb-3 text-2xl font-semibold`}>Docs</h2>
          </CardHeader>
          <CardContent>
            <p className={`m-0 max-w-[30ch] text-sm`}>Quick description of docs client goes here.</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="#">
        <Card className="bg-aPrimary-600 glassmorphic border-aPrimary-400">
          <CardHeader className="pb-0">
            <h2 className={`mb-3 text-2xl font-semibold`}>Examples</h2>
          </CardHeader>
          <CardContent>
            <p className={`m-0 max-w-[30ch] text-sm`}>Quick description of docs client goes here.</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
