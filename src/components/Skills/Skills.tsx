import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import {
  Code2, Server, Database, Box, Cloud, Brain
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    gradient: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Python', level: 82 },
      { name: 'FastAPI', level: 80 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    gradient: 'from-teal-500 to-emerald-500',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    title: 'DevOps',
    icon: Box,
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'CI/CD', level: 78 },
    ],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    gradient: 'from-blue-500 to-violet-500',
    skills: [
      { name: 'GCP', level: 60 },
    ],
  },
  {
    title: 'AI & Emerging',
    icon: Brain,
    gradient: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'LLMs', level: 78 },
      { name: 'RAG', level: 72 },
      { name: 'AI Agents', level: 68 },
      { name: 'Prompt Engineering', level: 80 },
    ],
  },
]

function SkillCard({ category, index, isVisible }: { category: typeof skillCategories[0]; index: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group relative"
    >
      <div className="glass rounded-2xl p-6 glass-hover h-full">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.gradient} mb-4`}>
          <category.icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
        <div className="space-y-3">
          {category.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">{skill.name}</span>
                <span className="text-gray-500 font-mono text-xs">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with daily to build production-grade solutions
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400" />
          </div>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
