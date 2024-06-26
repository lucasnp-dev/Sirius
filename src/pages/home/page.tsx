import { motion } from 'framer-motion'
// import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

import { TechsSection } from './_components/techs-section'

export function Home() {
  return (
    <div className="container mb-96 space-y-8">
      <div className="relative flex min-h-[600px] items-center justify-center [@media(min-height:793px)]:min-h-[600px]">
        <div className="max-w-96 space-y-4 text-center">
          <TextGenerateEffect words="Sirius" className="font-code text-5xl" />

          <TextGenerateEffect
            words="Library of beautiful components for your applications with elegance and minimal style. Illuminated dark mode and clear light mode."
            className="text-sm text-muted-foreground"
          />

          <div className="">
            <motion.div
              className="flex items-center justify-center space-x-4"
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button asChild size={'sm'}>
                <Link to="/labs" className="text-xs">
                  Get Started
                </Link>
              </Button>

              <Button size={'sm'} variant={'shimmer'} className="gap-2 text-xs">
                {/* <Github size={18} /> 227 */}
                <Link to="/docs" className="text-xs">
                  Docs
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <p className="absolute bottom-2 mx-auto max-w-96 rounded-lg px-4 py-2 font-code text-sm text-foreground">
          {' '}
          Integrated with{' '}
          <Link
            to="https://ui.shadcn.com/"
            className="underline"
            target="_blank"
          >
            shadcn/ui
          </Link>
          .
        </p>
      </div>
      <TechsSection />
    </div>
  )
}
