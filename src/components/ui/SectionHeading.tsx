import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  gradient?: boolean
}

export default function SectionHeading({ title, subtitle, gradient = true }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${gradient ? 'gradient-text' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400" />
      </div>
    </motion.div>
  )
}
