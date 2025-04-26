"use client"

import type { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedLayoutProps {
  children: ReactNode
}

export function AnimatedLayout({ children }: AnimatedLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
