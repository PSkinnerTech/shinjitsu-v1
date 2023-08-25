'use client'

import Link from 'next/link'
import { SpotlightBorder } from './SpotlightBorder'
import SpotlightOverlay from './SpotlightOverlay'
import { Card, CardContent, CardHeader } from './ui/card'

export default function Resources() {
  return (
    <div className="grid mb-32 text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-12">
      <SpotlightOverlay spotlightColor="rgba(255,255,255, 0.10)">
        <SpotlightBorder radialGradientSize="40% 320px" borderWidth="2px">
          <Link href="#">
            <Card>
              <CardHeader>
                <h2 className={`mb-3 text-2xl font-semibold`}>Docs</h2>
              </CardHeader>
              <CardContent>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Quick description of API client goes here.</p>
              </CardContent>
            </Card>
          </Link>
        </SpotlightBorder>
      </SpotlightOverlay>

      <SpotlightOverlay spotlightColor="rgba(255,255,255, 0.10)">
        <SpotlightBorder radialGradientSize="40% 320px" borderWidth="2px">
          <Link href="#">
            <Card>
              <CardHeader>
                <h2 className={`mb-3 text-2xl font-semibold`}>API</h2>
              </CardHeader>
              <CardContent>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Quick description of docs client goes here.</p>
              </CardContent>
            </Card>
          </Link>
        </SpotlightBorder>
      </SpotlightOverlay>

      <SpotlightOverlay spotlightColor="rgba(255,255,255, 0.10)">
        <SpotlightBorder radialGradientSize="40% 320px" borderWidth="2px">
          <Link href="#">
            <Card>
              <CardHeader>
                <h2 className={`mb-3 text-2xl font-semibold`}>Examples</h2>
              </CardHeader>
              <CardContent>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Quick description of docs client goes here.</p>
              </CardContent>
            </Card>
          </Link>
        </SpotlightBorder>
      </SpotlightOverlay>
    </div>
  )
}
