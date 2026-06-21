'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  useEffect(() => {
    document.body.classList.add('intro-active')
    const first = document.getElementById('iFirst')
    const last = document.getElementById('iLast')
    const dots = ['d1','d2','d3'].map(id => document.getElementById(id))
    const bar = document.getElementById('iBar')
    const intro = document.getElementById('intro')

    setTimeout(() => first?.classList.add('show'), 200)
    setTimeout(() => last?.classList.add('show'), 500)
    dots.forEach((d, i) => setTimeout(() => d?.classList.add('show'), 800 + i * 120))
    if (bar) setTimeout(() => { bar.style.transition = 'width 1.2s cubic-bezier(0.4,0,0.2,1)'; bar.style.width = '100%' }, 400)
    setTimeout(() => {
      if (intro) { intro.style.transition = 'opacity 0.5s ease'; intro.style.opacity = '0' }
      setTimeout(() => { if (intro) intro.style.display = 'none'; document.body.classList.remove('intro-active') }, 500)
    }, 2000)

    const handleScroll = () => {
      const el = document.getElementById('scroll-progress')
      if (el) el.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%'
      document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)

    document.querySelectorAll<HTMLButtonElement>('.role-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.role-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false') })
        tab.classList.add('active'); tab.setAttribute('aria-selected','true')
        document.querySelectorAll('.role-panel').forEach(p => p.classList.remove('active'))
        document.getElementById('panel-' + tab.dataset.tab)?.classList.add('active')
      })
    })

    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach(card => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
        card.style.transform = `perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) scale(1.01)`
      })
      card.addEventListener('mouseleave', () => { card.style.transform = '' })
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pills = ['Figma','Claude','Framer','Cursor','Enterprise UX','AI Products','Design Systems','UX Research','Product Strategy','Accessibility']

  return (
    <>
      <div id="scroll-progress" />

      <div id="intro">
        <div className="intro-name">
          <span className="intro-first" id="iFirst">ACHYUT</span>
          <div className="intro-dots">
            <div className="intro-dot" id="d1" />
            <div className="intro-dot" id="d2" />
            <div className="intro-dot" id="d3" />
          </div>
          <span className="intro-last" id="iLast">KHANPARA</span>
        </div>
        <div className="intro-scrollbar"><div className="intro-scrollbar-thumb" id="iBar" /></div>
      </div>

      <nav id="nav">
        <a href="#hero" className="nav-brand">
          <div className="nav-avatar"><img src="/assets/images/profile.png" alt="Achyut" /></div>
          <span className="nav-name">ACHYUT</span>
        </a>
        <div className="nav-sep" />
        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <Link href="/about" className="nav-link">About</Link>
          <a href="#contact" className="nav-link cta">Resume</a>
        </div>
      </nav>

      <section id="hero">
        <div id="hero-glow" />
        {[1,2,3,4,5].map(n => <div key={n} className={`cloud cloud-${n}`} />)}
        {[1,2,3].map(n => <div key={n} className={`hero-ring hero-ring-${n}`} />)}
        {[1,2,3,4,5,6].map(n => <div key={n} className={`hero-dot hd${n}`} />)}
        <div className="hero-inner">
          <div className="hero-available"><span className="avail-dot" />Available for Work &nbsp;·&nbsp; Open to Relocate anywhere in the USA</div>
          <p className="hero-eyebrow">Hello, I&apos;m Achyut 👋</p>
          <h1 className="hero-h1">
            <span className="hero-line1">Crafting</span>
            <span className="hero-line2">Thoughtful,</span>
            <span className="hero-line3">User <span className="serif-italic">Solutions.</span></span>
          </h1>
          <div className="hero-stats">
            <div className="hstat"><span className="hstat-num">4+</span><span className="hstat-lbl">Years of Experience</span></div>
            <div className="hstat-sep" />
            <div className="hstat"><span className="hstat-num">15+</span><span className="hstat-lbl">Projects Finished</span></div>
            <div className="hstat-sep" />
            <div className="hstat"><span className="hstat-num">10+</span><span className="hstat-lbl">Certifications</span></div>
          </div>
          <p className="hero-sub">Designing with curiosity, strategy, and a focus on real impact. Obsessed with the <em>why</em>, excited by the <em>how</em>, and never settling for &apos;<strong>just fine</strong>&apos;.</p>
        </div>
        <div className="hm-glass" aria-hidden="true">
          <div className="hm-track">
            {[...pills,...pills].map((label,i) => (
              <span key={i} className="hm-pill"><span className="hm-pill-label">{label}</span></span>
            ))}
          </div>
        </div>
        <div className="hero-bottom-blur" />
      </section>

      <section id="whatido">
        <div className="wrap">
          <Reveal><div className="eyebrow">◆ &nbsp;What I Do</div></Reveal>
          <Reveal delay={0.1}><p className="whatido-text">I turn messy, real-world problems into products people <span className="acc">actually understand</span> — interfaces that feel obvious, systems that scale, and details that quietly <span className="fade">do the work.</span></p></Reveal>
        </div>
      </section>

      <section id="stats">
        <div className="wrap">
          <div className="stats-row">
            <Reveal className="r-left"><div className="stat-num">4+</div><div className="stat-title">Years designing</div><div className="stat-desc">enterprise AI products, design systems &amp; research</div></Reveal>
            <Reveal delay={0.15} className="r-right"><div className="stat-num">Fortune&nbsp;100</div><div className="stat-title">Clients</div><div className="stat-desc">Citi, AbbVie, Samsung — products that scale</div></Reveal>
          </div>
        </div>
      </section>

      <section id="roles">
        <div className="wrap">
          <Reveal><div className="roles-header"><div className="roles-eyebrow">About Me</div><h2 className="roles-title">Three perspectives.<br/>One designer.</h2></div></Reveal>
          <Reveal delay={0.1}>
            <div className="roles-tabs"><div className="roles-tab-track" role="tablist">
              <button className="role-tab active" data-tab="recruiters" role="tab" aria-selected="true" aria-controls="panel-recruiters" id="tab-recruiters">Recruiters &amp; Hiring Teams</button>
              <button className="role-tab" data-tab="designers" role="tab" aria-selected="false" aria-controls="panel-designers" id="tab-designers">Designers</button>
              <button className="role-tab" data-tab="engineers" role="tab" aria-selected="false" aria-controls="panel-engineers" id="tab-engineers">Engineers &amp; PMs</button>
            </div></div>
          </Reveal>
          <Reveal delay={0.2}><div className="roles-card">
            <div className="role-panel active" id="panel-recruiters"><div className="role-panel-title">Dear Recruiters &amp; Hiring team,</div><p className="role-panel-body">I design enterprise products that turn complexity into clarity. From AI-powered platforms to large-scale SaaS systems, I focus on creating experiences that users understand, adopt, and trust.</p><span className="role-panel-cta">Looking for someone who can own problems, not just screens?</span><div className="role-stats"><div className="role-stat"><span className="role-stat-num">5+</span><span className="role-stat-lbl">Products Launched</span></div><div className="role-stat"><span className="role-stat-num">F100</span><span className="role-stat-lbl">Client Work</span></div><div className="role-stat"><span className="role-stat-num">40%+</span><span className="role-stat-lbl">Workflow Efficiency Gains</span></div></div></div>
            <div className="role-panel" id="panel-designers"><div className="role-panel-title">Dear fellow designers,</div><p className="role-panel-body">I enjoy messy problems, whiteboard debates, and turning ambiguity into something tangible. Whether I&apos;m building design systems, exploring AI-native experiences, or refining the smallest interaction detail, I care about craft, clarity, and systems that scale.</p><span className="role-panel-cta">Always happy to talk design, systems, and what&apos;s next.</span><div className="role-stats"><div className="role-stat"><span className="role-stat-num">0→1</span><span className="role-stat-lbl">Design System Scaled</span></div><div className="role-stat"><span className="role-stat-num">AI</span><span className="role-stat-lbl">AI-First Workflows</span></div><div className="role-stat"><span className="role-stat-num">WCAG</span><span className="role-stat-lbl">Accessibility-Aware Craft</span></div></div></div>
            <div className="role-panel" id="panel-engineers"><div className="role-panel-title">Dear builders,</div><p className="role-panel-body">I care about more than pixels. I think in workflows, constraints, edge cases, and outcomes. My goal is to make collaboration easier by bringing clarity to requirements, aligning stakeholders, and designing solutions that are practical to build and easy to scale.</p><span className="role-panel-cta">Let&apos;s build products users actually love.</span><div className="role-stats"><div className="role-stat"><span className="role-stat-num">0→1</span><span className="role-stat-lbl">Product Thinking</span></div><div className="role-stat"><span className="role-stat-num">✕</span><span className="role-stat-lbl">Cross-Functional by Default</span></div><div className="role-stat"><span className="role-stat-num">↑</span><span className="role-stat-lbl">Faster Design-to-Dev Handoffs</span></div></div></div>
          </div></Reveal>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="work-head">
            <Reveal><div className="eyebrow" style={{justifyContent:'center'}}>◆ &nbsp;Selected Work</div></Reveal>
            <Reveal delay={0.1}><h2 className="work-title">check out some of <span className="acc">my work</span></h2></Reveal>
            <Reveal delay={0.2}><p className="work-sub">A few products I&apos;ve helped shape, and the thinking behind them.</p></Reveal>
          </div>
          <Reveal delay={0.1}><div className="work-card wc1" data-tilt>
            <div><div className="wc-meta"><span className="wc-badge">01</span><span className="wc-badge">2025</span></div><h3 className="wc-title">Compliance that doesn&apos;t slow you down.</h3><div className="wc-tags"><span className="wc-tag">GRC</span><span className="wc-tag">AI / ML</span><span className="wc-tag">Enterprise</span><span className="wc-tag">B2B</span></div><p className="wc-desc">Built the UX for an AI-powered GRC platform — extraction engine, gap analysis, and architecture scanner — for Fortune 100 clients.</p><Link href="/work/grc" className="wc-cta">View Case Study →</Link></div>
            <div><div className="wc-mockup"><div className="wc-mockup-bar"><div className="wc-dot"/><div className="wc-dot"/><div className="wc-dot"/></div><div className="wc-mockup-body"><div className="mb s"/><div className="mb m"/><div className="mb tall"/><div className="mb s"/><div className="mb m"/></div></div></div>
          </div></Reveal>
          <Reveal delay={0.2}><div className="work-card wc2" data-tilt>
            <div><div className="wc-meta"><span className="wc-badge">02</span><span className="wc-badge">2024–25</span></div><h3 className="wc-title">A design system built to scale across Fortune 100.</h3><div className="wc-tags"><span className="wc-tag">Design Systems</span><span className="wc-tag">Figma</span><span className="wc-tag">Tailwind CSS</span><span className="wc-tag">WCAG 2.2</span></div><p className="wc-desc">Architected WorldKit from scratch — Figma tokens, Storybook, and a component library used across enterprise AI products.</p><span className="wc-cta soon">Coming Soon</span></div>
            <div><div className="wc-mockup"><div className="wc-mockup-bar"><div className="wc-dot"/><div className="wc-dot"/><div className="wc-dot"/></div><div className="wc-mockup-body"><div className="mb m"/><div className="mb s"/><div className="mb tall"/><div className="mb m"/></div></div></div>
          </div></Reveal>
          <Reveal delay={0.3}><div className="work-card wc3" data-tilt>
            <div><div className="wc-meta"><span className="wc-badge">03</span><span className="wc-badge">2025</span></div><h3 className="wc-title">Making store ops feel like a conversation.</h3><div className="wc-tags"><span className="wc-tag">Retail AI</span><span className="wc-tag">Operations</span><span className="wc-tag">Dashboard</span></div><p className="wc-desc">Designed an AI-powered ops platform for 7-Eleven store managers — real-time inventory, anomaly detection, and intelligent alerts.</p><Link href="/work/7eleven" className="wc-cta">View Case Study →</Link></div>
            <div><div className="wc-mockup"><div className="wc-mockup-bar"><div className="wc-dot"/><div className="wc-dot"/><div className="wc-dot"/></div><div className="wc-mockup-body"><div className="mb s"/><div className="mb tall"/><div className="mb m"/></div></div></div>
          </div></Reveal>
        </div>
      </section>

      <section id="about">
        <div className="wrap"><div className="about-grid">
          <Reveal><div className="about-photo"><img src="/assets/images/profile.png" alt="Achyut Khanpara" /></div></Reveal>
          <Reveal delay={0.15}><h2 className="about-h">I design systems that feel <span className="acc">human.</span></h2><p className="about-p">I&apos;m Achyut — a UX &amp; Product Designer who blends research, strategy, and craft to build products people actually want to use.</p><p className="about-p">I&apos;ve worked on enterprise AI products, design systems, and research-heavy 0→1 builds — always with a focus on clarity, usability, and outcomes that matter.</p><Link href="/about" className="wc-cta" style={{display:'inline-block',marginTop:'24px'}}>More about me →</Link></Reveal>
        </div></div>
      </section>

      <section id="experience">
        <div className="wrap">
          <Reveal><h2 className="exp-h">Where I&apos;ve worked</h2><p className="exp-sub">A snapshot of my professional journey.</p></Reveal>
          <div className="timeline">
            {[{date:'2024 – Present',title:'Senior UX Designer',org:'Freelance / Consulting',desc:'Designing AI-powered platforms for enterprise clients including GRC systems, design system architecture, and multi-persona dashboards.'},{date:'2022 – 2024',title:'UX Designer',org:'Product Agency',desc:'Led end-to-end design for B2B SaaS products, Fortune 100 client work, and design system builds across Figma and Storybook.'},{date:'2020 – 2022',title:'Junior UX Designer',org:'Design Studio',desc:'Research, wireframing, and visual design for mobile apps and web platforms across retail and fintech verticals.'}].map((item,i) => (
              <Reveal key={i} delay={i*0.1} className="titem"><div className="tdot"/><span className="tdate">{item.date}</span><div className="tcard"><div className="ttitle">{item.title}</div><div className="torg">{item.org}</div><div className="tdesc">{item.desc}</div></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="t-header wrap">
          <Reveal><div className="t-eyebrow">◆ &nbsp;Testimonials</div></Reveal>
          <Reveal delay={0.1}><h2 className="t-title">What people say</h2></Reveal>
          <Reveal delay={0.2}><p className="t-sub">Kind words from people I&apos;ve worked with.</p></Reveal>
        </div>
        <div className="t-marquee-wrap"><div className="t-track">
          {[{i:'SR',n:'Sarah R.',r:'Product Manager',q:'Achyut has an incredible ability to translate complex requirements into intuitive interfaces. His attention to detail and strategic thinking elevated our entire product.'},{i:'MK',n:'Michael K.',r:'Engineering Lead',q:'Working with Achyut is a pleasure. He thinks deeply about edge cases and delivers designs that are actually buildable — a rare combination.'},{i:'JP',n:'Jessica P.',r:'VP of Design',q:"Achyut brings both craft and clarity to every project. His design systems work saved us months of engineering time."},{i:'DT',n:'David T.',r:'Startup Founder',q:"He took our vague idea and turned it into a product people love. The UX quality is miles ahead of what we expected."},{i:'SR',n:'Sarah R.',r:'Product Manager',q:'Achyut has an incredible ability to translate complex requirements into intuitive interfaces.'},{i:'MK',n:'Michael K.',r:'Engineering Lead',q:'Working with Achyut is a pleasure. He thinks deeply about edge cases and delivers designs that are actually buildable.'}].map((t,i) => (
            <div key={i} className="t-card"><div className="t-photo-col"><div className="t-polaroid"><div className="t-avatar">{t.i}</div></div><div><div className="t-name">{t.n}</div><div className="t-role">{t.r}</div></div></div><div className="t-quote-col"><div className="t-stars">{[...Array(5)].map((_,si) => <svg key={si} className="t-star" viewBox="0 0 20 20"><path d="M10 1l2.39 7.26H19l-5.19 3.76 1.99 7.26L10 14.77l-5.8 4.51 1.99-7.26L1 8.26h6.61z"/></svg>)}</div><span className="t-quote-icon">&ldquo;</span><p className="t-quote-text">{t.q}</p></div></div>
          ))}
        </div></div>
      </section>

      <section id="contact">
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
