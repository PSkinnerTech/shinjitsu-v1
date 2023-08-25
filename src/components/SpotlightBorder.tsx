import { ReactNode, useRef, useState } from 'react'

export const SpotlightBorder = ({
  color = '#fff',
  borderWidth = '2px',
  bgImage = `linear-gradient(0deg,
  rgb(var(--dark-gray) / .8) 0%,
  rgb(var(--dark-gray) / .2) 15%,
  rgb(var(--dark-gray) / .1) 50%,
  rgb(var(--dark-gray) / .2) 85%,
  rgb(var(--dark-gray) / 0.8) 100%), url(/images/investor-card-bg2.png)`,
  radialGradientSize = '40% 200px',
  children,
}: {
  color?: string
  borderWidth?: string
  bgImage?: string
  radialGradientSize?: string
  children: ReactNode
}) => {
  const divRef = useRef<HTMLButtonElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <>
      <div className="group relative overflow-hidden">
        <div
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="transition h-full w-full cursor-default rounded-lg border-2 border-gray-700 text-gray-300 group-hover:text-gray-100 duration-200 focus:border-blue-300 focus:outline-none"
        >
          {children}
        </div>
        <button
          ref={divRef}
          disabled
          style={{
            transition: 'borderColor 0.2s ease-in-out',
            border: `${borderWidth} solid ${color}`,
            opacity,
            WebkitMaskImage: `radial-gradient(${radialGradientSize} at ${position.x}px ${position.y}px, black 45%, transparent)`,
          }}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-md border bg-[transparent] opacity-0  transition-opacity duration-500 placeholder:select-none text-white"
        />
      </div>
    </>
  )
}
