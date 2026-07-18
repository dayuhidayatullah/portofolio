import { useEffect, useState } from 'react'

// ===== Data from CV =====
const experiences = [
  {
    period: 'May 2023 — Present',
    title: 'Frontend Developer',
    company: 'PT Indonesia Digital Security',
    description:
      'Develop and maintain cross-platform applications using React.js for web and React Native for mobile. Collaborate closely with backend engineers to integrate REST APIs (built with Golang), websockets, and secure authentication flows into the frontend. Optimize application performance, ensure state management efficiency via Redux/React Query and troubleshoot critical system bugs.',
  },
  {
    period: 'Apr 2022 — Feb 2023',
    title: 'Frontend Developer',
    company: 'PT Barrans Global Mandiri',
    description:
      'Engineered web and mobile frontends utilizing React.js and React Native, delivering highly responsive user interfaces. Integrated enterprise-grade REST APIs powered by Java Spring Boot into the frontend layer. Translated Figma design mockups into reusable, pixel-perfect frontend components.',
  },
  {
    period: 'Nov 2021 — Feb 2022',
    title: 'Frontend Developer',
    company: 'PT Infosys Solusi Terpadu',
    description:
      "Built and maintained frontend modules for Bank BTN's Internet Banking System (IBB) using React.js. Developed reusable global UI components utilizing Material UI to speed up development workflows. Identified, debugged, and resolved production-level UI and state management issues.",
  },
  {
    period: 'Apr 2021 — Nov 2021',
    title: 'Full-Stack Developer',
    company: 'PT Majapahit Teknologi',
    description:
      'Developed full-stack web applications by implementing Vue.js for intuitive frontend interfaces and Node.js for scalable backend services. Designed database schemas, built API endpoints, and ensured smooth integration between client-side and server-side components.',
  },
]

const projects = [
  {
    title: 'AKUSIGN',
    company: 'PT Indonesia Digital Security',
    description: 'Secure digital signature platform integrating complex RESTful APIs and real-time webhook mechanisms.',
    icon: '✍️',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'MPIS-GARIS',
    company: 'PT Indonesia Digital Security',
    description: 'Cross-platform mobile application with secure OAuth authentication and Golang APIs.',
    icon: '📱',
    color: 'from-purple-400 to-pink-400',
  },
  {
    title: 'Warehouse Management System',
    company: 'PT Barrans Global Mandiri',
    description: 'Internal web system for inventory tracking, warehouse logistics, and data monitoring.',
    icon: '🏭',
    color: 'from-orange-400 to-amber-400',
  },
  {
    title: 'MYREP',
    company: 'PT Barrans Global Mandiri',
    description: 'Mobile backoffice management application enabling administrators to manage operational data.',
    icon: '📊',
    color: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'IBB BTN',
    company: 'PT Infosys Solusi Terpadu',
    description: 'Internet banking platform for Bank BTN ensuring a secure and seamless user experience.',
    icon: '🏦',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'OSS RBA',
    company: 'PT Majapahit Teknologi',
    description: 'Risk-Based Approach Online Single Submission system built with Vue.js and Node.js.',
    icon: '📋',
    color: 'from-rose-400 to-red-500',
  },
]

const skills = [
  'JavaScript', 'TypeScript', 'React', 'React Native', 'Vue.js', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST API', 'Figma', 'Git', 'Redux', 'React Query'
]

// ===== Icons =====
function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-slate-800 dark:text-white opacity-80 group-hover:opacity-100 transition-opacity">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#0A66C2] opacity-90 group-hover:opacity-100 transition-opacity">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  )
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  )
}


// ===== Component =====
function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Default to dark mode for this specific theme
    document.documentElement.classList.add('dark');
    
    // Check if user explicitly prefers light mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDark(!isDark);
  };


  return (
    <div className="relative min-h-screen overflow-hidden pb-20">
      
      {/* ===== Animated Orbs Background ===== */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        {/* We use mix-blend-multiply in light mode and mix-blend-screen in dark mode */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/50 dark:bg-purple-600/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob transition-colors duration-500"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-400/50 dark:bg-cyan-600/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 transition-colors duration-500"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-pink-400/40 dark:bg-pink-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 transition-colors duration-500"></div>
      </div>

      {/* ===== Top Navbar (Theme Switcher) ===== */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/40 dark:bg-[#111111]/30 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-sm dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] rounded-full px-6 py-3 flex items-center justify-between transition-colors duration-300">
        <div className="font-bold text-slate-900 dark:text-white tracking-tight text-lg transition-colors">
          Dayu.
        </div>
        <div className="flex items-center gap-4">
          <a href="/resume.pdf" target="_blank" className="text-sm font-bold bg-white/60 dark:bg-white/10 px-4 py-1.5 rounded-full text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-white/20 transition-all shadow-sm">
            Resume
          </a>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/60 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-slate-700 dark:text-slate-300 transition-all shadow-sm"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      <div className="max-w-[1100px] mx-auto px-4 pt-32 md:pt-36">
        
        {/* ===== STRICT 4-COLUMN BENTO GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 opacity-0 animate-slide-up">
          
          {/* ----- ROW 1 & 2 ----- */}
          
          {/* HERO BOX (2x2) */}
          <div className="bento-card col-span-1 md:col-span-2 md:row-span-2 p-10 flex flex-col justify-center min-h-[300px] md:min-h-[400px] relative overflow-hidden group">
            {/* Inner background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/10 to-transparent pointer-events-none transition-colors"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 dark:bg-white/10 border border-slate-200 dark:border-white/20 text-xs font-semibold text-slate-700 dark:text-white mb-6 backdrop-blur-md transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for hire
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight mb-2 text-slate-900 dark:text-white transition-colors">
                Dayu <br/> Hidayatullah
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gradient-vibrant">
                Software Developer
              </p>
            </div>
          </div>

          {/* ABOUT BOX (2x1) */}
          <div className="bento-card col-span-1 md:col-span-2 md:row-span-1 p-8 md:p-10 flex flex-col justify-center min-h-[180px]">
            <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3 transition-colors">About Me</h2>
            <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed font-medium transition-colors">
              I specialize in blending beautiful UI design with robust backend integrations. Passionate about scalable web applications, real-time data, and seamless user experiences.
            </p>
          </div>

          {/* SOCIALS BOXES (1x1 each) */}
          <a href="https://github.com/dayuhidayatullah" target="_blank" rel="noopener noreferrer" className="bento-icon-card col-span-1 md:col-span-1 md:row-span-1 min-h-[180px] group cursor-pointer">
            <GithubIcon />
          </a>
          
          <a href="https://www.linkedin.com/in/dayu-hidayatullah" target="_blank" rel="noopener noreferrer" className="bento-icon-card col-span-1 md:col-span-1 md:row-span-1 min-h-[180px] group cursor-pointer">
            <LinkedinIcon />
          </a>


          {/* ----- ROW 3 & 4 ----- */}

          {/* PROJECTS BOX (2x2 Scrollable) */}
          <div className="bento-card col-span-1 md:col-span-2 md:row-span-2 p-8 h-[500px] flex flex-col">
            <div className="flex items-center justify-between mb-6 shrink-0">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">Projects</h2>
              <span className="px-3 py-1 bg-slate-200 dark:bg-white/10 rounded-full text-xs font-bold text-slate-700 dark:text-white transition-colors">{projects.length}</span>
            </div>
            
            {/* Scrollable Area */}
            <div className="overflow-y-auto no-scrollbar flex-1 -mx-2 px-2 space-y-4">
              {projects.map((project, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 hover:bg-white/70 dark:hover:bg-white/10 transition-colors group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${project.color} shadow-lg flex items-center justify-center text-xl text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 transition-colors">{project.company}</div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-2 transition-colors">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE BOX (2x2 Scrollable) */}
          <div className="bento-card col-span-1 md:col-span-2 md:row-span-2 p-8 h-[500px] flex flex-col">
            <div className="flex items-center justify-between mb-8 shrink-0">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">Experience</h2>
            </div>
            
            {/* Scrollable Area */}
            <div className="overflow-y-auto no-scrollbar flex-1 -mx-2 px-2">
              <div className="relative border-l-2 border-pink-300 dark:border-pink-500/30 ml-3 space-y-8 pb-4 transition-colors">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-6">
                    {/* Pink accent timeline dot */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#111] border-[3px] border-pink-500 transition-colors"></div>
                    
                    <span className="block text-pink-500 dark:text-pink-400 text-xs font-bold mb-1 tracking-wide transition-colors">{exp.period}</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 transition-colors">{exp.title}</h3>
                    <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 transition-colors">{exp.company}</div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* ----- ROW 5 ----- */}
          
          {/* SKILLS BOX (4x1) */}
          <div className="bento-card col-span-1 md:col-span-4 p-8 md:p-10 flex flex-col justify-center min-h-[160px]">
            <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6 text-center transition-colors">Tech Arsenal</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, idx) => (
                <span 
                  key={skill} 
                  className="bento-tag hover:scale-110 hover:bg-slate-200 dark:hover:bg-white/20 transition-all cursor-default"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        <footer className="mt-16 text-center opacity-0 animate-slide-up animate-delay-3">
          <p className="text-xs font-bold text-slate-500">
            © {new Date().getFullYear()} Dayu Hidayatullah. Handcrafted layout.
          </p>
        </footer>

      </div>
    </div>
  )
}

export default App
