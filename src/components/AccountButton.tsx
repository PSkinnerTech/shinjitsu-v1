import { ConnectButton } from '@rainbow-me/rainbowkit'
import SpotlightOverlay from './SpotlightOverlay'
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
                  <SpotlightOverlay spotlightColor="rgba(255,255,255, 0.10)">
                    <Button onClick={openConnectModal}>Connect Wallet</Button>
                  </SpotlightOverlay>
                )
              }
              if (chain.unsupported) {
                return (
                  <SpotlightOverlay spotlightColor="rgba(255,255,255, 0.10)">
                    <Button onClick={openChainModal}>Wrong network</Button>
                  </SpotlightOverlay>
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
                  <SpotlightOverlay spotlightColor="rgba(255,255,255, 0.10)">
                    <Button onClick={openAccountModal}>{account.ensName ?? account.displayName}</Button>
                  </SpotlightOverlay>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
