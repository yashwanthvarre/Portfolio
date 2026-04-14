import { useEffect, useState } from 'react'
import './App.css'
import { ContactSection } from './components/sections/ContactSection'
import { EducationSection } from './components/sections/EducationSection'
import { ExpertiseSection } from './components/sections/ExpertiseSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { GitHubSection } from './components/sections/GitHubSection'
import { HeroSection } from './components/sections/HeroSection'
import { MetricsSection } from './components/sections/MetricsSection'
import { SummarySection } from './components/sections/SummarySection'
import {
  aiTools,
  contactDetails,
  experience,
  githubProfile,
  githubProjects,
  heroProfile,
  highlights,
  impactMetrics,
  skillGroups,
} from './data/resumeData'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

const navigableSections = ['hero', 'github', 'experience', 'expertise', 'education']

const App = () => {
  useRevealOnScroll()
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sectionElements = navigableSections
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: '-18% 0px -45% 0px',
      },
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="page-shell min-h-screen antialiased">
      <div className="page-shell__canvas" aria-hidden="true" />
      <div className="page-shell__plant" aria-hidden="true" />

      <header className="topbar px-6 md:px-8">
        <span className="brand">Yashwanth Varre</span>
        <nav className="topnav items-center" aria-label="Section navigation">
          <a href="#hero">Home</a>
          <a href="#github">GitHub</a>
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
          <a href="#education">Education</a>
        </nav>
      </header>

      <aside className="content-dots" aria-label="Section navigation">
        <a
          href="#hero"
          aria-label="Go to hero"
          aria-current={activeSection === 'hero' ? 'true' : undefined}
        />
        <a
          href="#github"
          aria-label="Go to github"
          aria-current={activeSection === 'github' ? 'true' : undefined}
        />
        <a
          href="#experience"
          aria-label="Go to experience"
          aria-current={activeSection === 'experience' ? 'true' : undefined}
        />
        <a
          href="#expertise"
          aria-label="Go to expertise"
          aria-current={activeSection === 'expertise' ? 'true' : undefined}
        />
        <a
          href="#education"
          aria-label="Go to education"
          aria-current={activeSection === 'education' ? 'true' : undefined}
        />
      </aside>

      <HeroSection heroProfile={heroProfile} />
      <SummarySection highlights={highlights} />
      <GitHubSection githubProfile={githubProfile} githubProjects={githubProjects} />
      <ExperienceSection experience={experience} />
      <MetricsSection impactMetrics={impactMetrics} />
      <div id="expertise">
        <ExpertiseSection aiTools={aiTools} skillGroups={skillGroups} />
      </div>
      <EducationSection />
      <ContactSection contactDetails={contactDetails} />
    </main>
  )
}

export default App
