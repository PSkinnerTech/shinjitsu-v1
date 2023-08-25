import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ReactNode } from 'react'

export interface ISpotlightOverlayProps {
  children: ReactNode
  spotlightSize?: number
  spotlightColor?: string
}

export default function SpotlightOverlay({
  children,
  spotlightColor = 'rgba(255, 255, 255, .2)',
  spotlightSize = 350,
}: ISpotlightOverlayProps) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget?.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return (
    <div className="group relative w-full h-full overflow-visible" onMouseMove={handleMouseMove}>
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-80 z-40"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${spotlightSize}px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  )
}
