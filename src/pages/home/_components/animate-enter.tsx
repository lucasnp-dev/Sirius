import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

type AnimateEnterProps = {
  className?: string
  delay?: number
  children: React.ReactNode
}

export function AnimateEnter({
  className,
  delay,
  children,
}: AnimateEnterProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, translateY: 15 }}
      whileInView={{ opacity: 1, translateY: 'none' }}
      transition={{ duration: 0.6, ease: 'easeInOut', delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
