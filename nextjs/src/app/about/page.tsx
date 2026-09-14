'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.65, delay }} className={className}>
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  useEffect(() => {
    const handleScroll = () => document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav id="nav">
        <Link href="/" className="nav-brand">
          <div className="nav-avatar"><img src="/assets/images/profile.png" alt="Achyut" /></div>
          <span className="nav-name">ACHYUT</span>
        </Link>
        <div className="nav-sep" />
        <div className="nav-links">
          <Link href="/#work" className="nav-link">Work</Link>
          <Link href="/about" className="nav-link">About</Link>
          <a href="#" className="nav-link cta">Resume</a>
        </div>
      </nav>

      <section className="about-hero-section">
        <div className="wrap about-hero-grid">
          <Reveal className="about-hero-text">
            <h1 className="about-hero-h1">Designer. Thinker.<br/><span className="acc">Problem solver.</span></h1>
            <p className="about-hero-sub">I&apos;m Achyut Khanpara — a UX &amp; Product Designer focused on enterprise AI products, design systems, and experiences that turn complexity into clarity.</p>
          </Reveal>
          <Reveal delay={0.2} className="about-hero-photo">
            <div className="about-photo"><img src="/assets/images/profile.png" alt="Achyut Khanpara" /></div>
          </Reveal>
        </div>
      </section>

      <section className="about-bio-section">
        <div className="wrap">
          <div className="about-bio-grid">
            <Reveal>
              <div className="eyebrow">◆ &nbsp;Who I am</div>
              <h2 className="about-bio-h">Building products that feel <span className="acc">inevitable.</span></h2>
              <p className="about-p">I&apos;m a UX and Product Designer with 4+ years of experience building enterprise-grade products from 0 to 1. My work spans AI-powered platforms, design systems, and multi-persona dashboards — always grounded in research and a relentless focus on usability.</p>
              <p className="about-p">I&apos;ve worked with Fortune 100 companies including Citi, AbbVie, and Samsung, bringing the same level of craft to a startup&apos;s first screen as to a platform serving thousands of enterprise users.</p>
              <p className="about-p">Outside of work: I&apos;m experimenting with AI tools, obsessing over type systems, and occasionally writing about design thinking and what makes products feel <em>right</em>.</p>
            </Reveal>
            <div className="about-vals">
              {[{icon:'🔭',t:'Research first',d:"Every good design decision starts with understanding the real problem. I don't guess."},{icon:'⚙️',t:'Systems thinking',d:'I build components that scale, not one-off screens that need to be redesigned the moment requirements change.'},{icon:'🤝',t:'Cross-functional by default',d:'Design happens in collaboration — with engineers, PMs, stakeholders, and the people who actually use the product.'},{icon:'✂️',t:'Subtract before you add',d:"The best design decision is often removing something. Clarity beats comprehensiveness."}].map((v,i) => (
                <Reveal key={i} delay={i*0.1} className="val-card"><span className="val-icon">{v.icon}</span><div><div className="val-title">{v.t}</div><p className="val-desc">{v.d}</p></div></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-skills-section">
        <div className="wrap">
          <Reveal><div className="eyebrow">◆ &nbsp;Skills &amp; Tools</div><h2 className="about-skills-h">What I work with</h2></Reveal>
          <div className="skills-grid">
            {[{cat:'Design',items:['Figma','Framer','Adobe XD','Principle','Protopie']},{cat:'Research',items:['User Interviews','Usability Testing','Journey Mapping','Card Sorting','Heuristic Evaluation']},{cat:'Systems',items:['Design Tokens','Component Libraries','WCAG 2.2 Accessibility','Storybook','Tailwind CSS']},{cat:'Strategy',items:['Product Thinking','0→1 Product Design','Stakeholder Alignment','Design Sprints','Competitive Analysis']},{cat:'AI & Dev',items:['Claude / Cursor / V0','HTML · CSS · JS','Next.js Basics','Framer Motion','Prompt Engineering']},{cat:'Soft Skills',items:['Cross-functional Collaboration','Presentation & Storytelling','Rapid Iteration','Ambiguity Navigation','Documentation']}].map((skill,i) => (
              <Reveal key={i} delay={i*0.05} className="skill-cat"><div className="skill-cat-label">{skill.cat}</div><div className="skill-items">{skill.items.map((item,j) => <span key={j} className="skill-pill">{item}</span>)}</div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-exp-section">
        <div className="wrap">
          <Reveal><div className="eyebrow">◆ &nbsp;Experience</div><h2 className="exp-h">Where I&apos;ve worked</h2></Reveal>
          <div className="timeline">
            {[{date:'2024 – Present',title:'Senior UX Designer',org:'Freelance / Consulting',desc:'Designing AI-powered platforms for enterprise clients — GRC systems, multi-persona dashboards, design system architecture. Clients include WorldLink Labs and startups in fintech and retail AI.'},{date:'2022 – 2024',title:'UX Designer',org:'Digital Product Agency',desc:'Led end-to-end design for B2B SaaS products across multiple verticals. Delivered Fortune 100 client work and architected a company-wide design system (WorldKit) used across 5+ products.'},{date:'2020 – 2022',title:'Junior UX Designer',org:'Design Studio',desc:'Research, wireframing, and visual design for mobile apps and web platforms. Conducted 50+ user interviews and contributed to 0→1 product launches in retail and fintech.'}].map((item,i) => (
              <Reveal key={i} delay={i*0.1} className="titem"><div className="tdot"/><span className="tdate">{item.date}</span><div className="tcard"><div className="ttitle">{item.title}</div><div className="torg">{item.org}</div><div className="tdesc">{item.desc}</div></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ marginTop:'0' }}>
        <div className="footer-wm">ACHYUT</div>
        <div className="wrap footer-inner">
          <Reveal><div className="eyebrow footer-eyebrow">◆ &nbsp;Let&apos;s Connect</div></Reveal>
          <Reveal delay={0.1}><h2 className="footer-h">Got a problem worth <span className="acc">solving?</span></h2></Reveal>
          <Reveal delay={0.2}><a href="mailto:achyutkhanpara7@gmail.com" className="footer-email">achyutkhanpara7@gmail.com</a></Reveal>
          <Reveal delay={0.3}><div className="footer-socials"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="s-btn">in</a><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="s-btn">Db</a><a href="https://github.com/achyutkhanpara7" target="_blank" rel="noopener noreferrer" className="s-btn">Gh</a></div></Reveal>
          <div className="footer-copy">© 2025 Achyut Khanpara · Designed &amp; built with care</div>
        </div>
      </section>
    </>
  )
}
