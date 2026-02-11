'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor glow - small and subtle */}
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      >
        <div className="relative w-[60px] h-[60px]">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-white/12 rounded-full blur-[25px]" />
          {/* Inner glow */}
          <div className="absolute inset-[8px] bg-white/15 rounded-full blur-[15px]" />
        </div>
      </motion.div>

      {/* Secondary trailing effect */}
      <motion.div
        className="pointer-events-none fixed z-40 mix-blend-screen"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 150,
          mass: 0.8,
        }}
      >
        <div className="w-[50px] h-[50px] bg-gradient-radial from-white/8 via-white/3 to-transparent rounded-full blur-[20px]" />
      </motion.div>
    </>
  )
}
