import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Award, BookOpen, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'Spring Boot Mastery',
    provider: 'Enterprise Java',
    description: 'Comprehensive Spring Boot development for enterprise applications',
    icon: BookOpen,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'React Full Stack',
    provider: 'Modern Web Development',
    description: 'Building modern UIs with React, TypeScript, and ecosystem tools',
    icon: BookOpen,
    gradient: 'from-sky-500 to-blue-500',
  },
  {
    title: 'Full Stack Development',
    provider: 'Enterprise Engineering',
    description: 'End-to-end application development with industry best practices',
    icon: Award,
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    title: 'Generative AI',
    provider: 'AI Engineering',
    description: 'LLMs, prompt engineering, and generative AI application development',
    icon: Award,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Google Cloud Platform',
    provider: 'Cloud Architecture',
    description: 'GCP services, cloud architecture, and deployment strategies',
    icon: BookOpen,
    gradient: 'from-cyan-500 to-teal-500',
  },
]

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">Certifications & Learning</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400" />
          </div>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 glass-hover h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cert.gradient} mb-4`}>
                  <cert.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                <p className="text-sm text-indigo-400 font-mono mb-2">{cert.provider}</p>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
