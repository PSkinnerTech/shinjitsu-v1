import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button } from './ui/button'

export const AccountButton = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated')
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button variant="outline" onClick={openConnectModal}>
                    Connect Wallet
                  </Button>
                )
              }
              if (chain.unsupported) {
                return (
                  <Button variant="outline" onClick={openChainModal}>
                    Wrong network
                  </Button>
                )
              }
              return (
                <div className="flex gap-12">
                  {/* <Button onClick={openChainModal} variant="outline" size="icon" className="rounded-full">
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                        }}
                      >
                        {chain.iconUrl && (
                          <Image alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} width={24} height={24} />
                        )}
                      </div>
                    )}
                  </Button> */}
                  <Button variant="outline" onClick={openAccountModal}>
                    {account.ensName ?? account.displayName}
                  </Button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
