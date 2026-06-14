import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Briefcase, Building2, Calendar, CheckCircle2, ArrowRight } from 'lucide-react'

const highlights = [
  'Delivered enterprise-grade applications for Ford',
  'Built scalable frontend and backend systems',
  'Developed REST APIs and integrations',
  'Worked in Agile teams',
  'Contributed to production deployments and maintenance',
  'Collaborated with cross-functional teams',
]

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey in enterprise software development
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400" />
          </div>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-teal-500/50 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative pl-20 md:pl-28 pb-12"
            >
              <div className="absolute left-6 md:left-10 top-1 w-5 h-5 rounded-full bg-[#0a0a0f] border-2 border-indigo-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
              </div>

              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm font-medium text-indigo-300">Current Role</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2024 - Present</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">AI Full Stack Developer</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <Building2 className="w-4 h-4" />
                  <span>Enterprise Projects · Ford Client</span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Working on enterprise-scale applications for Ford, delivering robust full-stack solutions
                  using Java Spring Boot and React. Building REST APIs, dashboards, and automation systems
                  while integrating AI capabilities into production environments.
                </p>

                <div className="space-y-3">
                  {highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
