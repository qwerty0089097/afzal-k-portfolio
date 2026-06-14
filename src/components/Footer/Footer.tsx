import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> by{' '}
            <span className="text-gray-300 font-medium">Afzal Rahman K</span>
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/qwerty0089097', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/afzal-rahman-k-679a34241/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:afzalrah997@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-400 transition-colors p-2"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
