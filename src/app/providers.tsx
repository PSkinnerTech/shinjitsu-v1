'use client'

import * as React from 'react'

import { RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { chains, config } from '../wagmi'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains} theme={midnightTheme()} modalSize={'compact'}>
          {mounted && children}
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  )
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
