'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[60]"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-white block"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-0.5 bg-white block"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-white block"
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-50 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
              <a
                href="#home"
                onClick={handleLinkClick}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={handleLinkClick}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={handleLinkClick}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={handleLinkClick}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                Contact
              </a>

              <div className="mt-8">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform text-lg"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
