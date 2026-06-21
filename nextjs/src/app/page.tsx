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

const StarSVG = () => (
  <svg className="t-star" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const testimonials = [
  { i: 'HD', n: 'Hemal Darji', r: 'Sr. UX Designer,\nThinkwik Technologies', q: "Achyut's dedication to user research and his insight-driven designs make him a standout UX professional. He transforms complex requirements into seamless, impactful user experiences." },
  { i: 'ER', n: 'Dr. Elaine Rettger', r: 'Associate Director,\nBus & Fin Comms, ASU', q: "Achyut consistently demonstrated exceptional UX design, research, and digital communication skills, becoming a key contributor to our projects at ASU. His professionalism, creativity, and user-first mindset made him an invaluable asset to our team." },
  { i: 'SC', n: 'Stephen Carradini', r: 'Assistant Professor,\nArizona State University', q: "Achyut's designs are not just visually appealing but also highly functional, ensuring usability and clarity for the end user. His teamwork experience and coordination skills make him a valuable asset to any user experience team." },
  { i: 'NP', n: 'Nikit Patel', r: 'Team Lead Design,\nThinkwik Technologies', q: "Achyut's creative vision and user-centric approach elevate every project he undertakes. His designs are not only visually engaging but also highly intuitive and user-friendly." },
]

export default function Home() {
  useEffect(() => {
    // Intro animation — matches original HTML exactly
    document.body.classList.add('intro-active')
    const iFirst = document.getElementById('iFirst')
    const iLast  = document.getElementById('iLast')
    const d1 = document.getElementById('d1')
    const d2 = document.getElementById('d2')
    const d3 = document.getElementById('d3')
    const iBar  = document.getElementById('iBar')
    const intro = document.getElementById('intro')
    const nav   = document.getElementById('nav')

    const hAvail = document.getElementById('hAvail')
    const hEye   = document.getElementById('hEye')
    const hL1    = document.getElementById('hL1')
    const hL2    = document.getElementById('hL2')
    const hL3    = document.getElementById('hL3')
    const hStats = document.getElementById('hStats')
    const hSub   = document.getElementById('hSub')

    function triggerHero() {
      hAvail?.classList.add('show')
      setTimeout(() => hEye?.classList.add('show'),   80)
      setTimeout(() => hL1?.classList.add('show'),   200)
      setTimeout(() => hL2?.classList.add('show'),   340)
      setTimeout(() => hL3?.classList.add('show'),   480)
      setTimeout(() => hStats?.classList.add('show'), 600)
      setTimeout(() => hSub?.classList.add('show'),  720)
    }

    setTimeout(() => iBar?.classList.add('grow'), 100)
    setTimeout(() => iFirst?.classList.add('show'), 200)
    setTimeout(() => d1?.classList.add('show'), 480)
    setTimeout(() => d2?.classList.add('show'), 560)
    setTimeout(() => d3?.classList.add('show'), 640)
    setTimeout(() => iLast?.classList.add('show'), 720)
    setTimeout(() => intro?.classList.add('exit'), 1900)
    setTimeout(() => {
      if (intro) intro.style.display = 'none'
      document.body.classList.remove('intro-active')
      window.scrollTo({ top: 0, behavior: 'instant' })
      nav?.classList.add('visible')
      triggerHero()
    }, 2750)

    // Scroll progress + nav
    const handleScroll = () => {
      const el = document.getElementById('scroll-progress')
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (el && total > 0) el.style.width = (window.scrollY / total * 100) + '%'
      nav?.classList.toggle('scrolled', window.scrollY > 50)

      // cloud parallax
      document.querySelectorAll<HTMLElement>('.cloud').forEach((c, i) => {
        const speeds = [0.06, 0.04, 0.07, 0.03, 0.05]
        c.style.transform = `translateY(${window.scrollY * speeds[i]}px)`
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Role tabs
    document.querySelectorAll<HTMLButtonElement>('.role-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.role-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false') })
        tab.classList.add('active'); tab.setAttribute('aria-selected','true')
        document.querySelectorAll('.role-panel').forEach(p => p.classList.remove('active'))
        document.getElementById('panel-' + tab.dataset.tab)?.classList.add('active')
      })
    })

    // 3D card tilt
    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach(card => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        const dx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2)
        const dy = (e.clientY - r.top  - r.height / 2) / (r.height / 2)
        card.style.transform = `perspective(1000px) rotateX(${-dy*4}deg) rotateY(${dx*6}deg) translateY(-6px)`
        card.style.boxShadow = `${-dx*12}px ${dy*8+20}px 60px rgba(21,101,192,0.28)`
      })
      card.addEventListener('mouseleave', () => { card.style.transform = ''; card.style.boxShadow = '' })
    })

    // Hero cursor glow
    const heroEl   = document.getElementById('hero')
    const heroGlow = document.getElementById('hero-glow')
    let rafId: number | null = null
    if (heroEl && heroGlow) {
      heroEl.addEventListener('mousemove', (e: MouseEvent) => {
        const x = e.clientX, y = e.clientY + window.scrollY
        if (!rafId) rafId = requestAnimationFrame(() => {
          heroGlow.style.left = x + 'px'
          heroGlow.style.top  = y + 'px'
          rafId = null
        })
      })
    }

    // Testimonial marquee duplicate for seamless loop
    const tTrack = document.getElementById('tTrack')
    if (tTrack) tTrack.innerHTML = tTrack.innerHTML + tTrack.innerHTML

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pills = ['Figma','Claude','Framer','Cursor','Enterprise UX','AI Products','Design Systems','UX Research','Product Strategy','Accessibility']

  return (
    <>
      <div id="scroll-progress" />

      {/* INTRO */}
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

      {/* NAV */}
      <nav id="nav">
        <a href="#hero" className="nav-brand">
          <div className="nav-avatar">
            <img src="/assets/images/profile.png" alt="Achyut" onError={(e) => { const t = e.currentTarget; t.style.display='none'; if(t.parentElement) t.parentElement.innerHTML='AK' }} />
          </div>
          <span className="nav-name">ACHYUT</span>
        </a>
        <div className="nav-sep" />
        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <Link href="/about" className="nav-link">About</Link>
          <a href="#contact" className="nav-link cta">Resume</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div id="hero-glow" />
        {[1,2,3,4,5].map(n => <div key={n} className={`cloud cloud-${n}`} />)}
        {[1,2,3].map(n => <div key={n} className={`hero-ring hero-ring-${n}`} />)}
        {[1,2,3,4,5,6].map(n => <div key={n} className={`hero-dot hd${n}`} />)}
        <div className="hero-inner">
          <div className="hero-available" id="hAvail">
            <span className="avail-dot" />
            Available for Work &nbsp;·&nbsp; Open to Relocate anywhere in the USA
          </div>
          <p className="hero-eyebrow" id="hEye">Hello, I&apos;m Achyut 👋</p>
          <h1 className="hero-h1">
            <span className="hero-line1" id="hL1">Crafting</span>
            <span className="hero-line2" id="hL2">Thoughtful,</span>
            <span className="hero-line3" id="hL3">User <span className="serif-italic">Solutions.</span></span>
          </h1>
          <div className="hero-stats" id="hStats">
            <div className="hstat"><span className="hstat-num">4+</span><span className="hstat-lbl">Years of Experience</span></div>
            <div className="hstat-sep" />
            <div className="hstat"><span className="hstat-num">15+</span><span className="hstat-lbl">Projects Finished</span></div>
            <div className="hstat-sep" />
            <div className="hstat"><span className="hstat-num">10+</span><span className="hstat-lbl">Certifications</span></div>
          </div>
          <p className="hero-sub" id="hSub">
            Designing with curiosity, strategy, and a focus on real impact.
            Obsessed with the <em>why</em>, excited by the <em>how</em>,
            and never settling for &apos;<strong>just fine</strong>&apos;.
          </p>
        </div>
        <div className="hm-glass" aria-hidden="true">
          <div className="hm-track" id="hm-track">
            {[...pills, ...pills].map((label, i) => (
              <span key={i} className="hm-pill"><span className="hm-pill-label">{label}</span></span>
            ))}
          </div>
        </div>
        <div className="hero-bottom-blur" />
      </section>

      {/* WHAT I DO */}
      <section id="whatido">
        <div className="wrap">
          <Reveal><div className="eyebrow">◆ &nbsp;What I Do</div></Reveal>
          <Reveal delay={0.1}>
            <p className="whatido-text">
              I turn messy, real-world problems into products people{' '}
              <span className="acc">actually understand</span>
              {' '}— interfaces that feel obvious, systems that scale, and details that quietly{' '}
              <span className="fade">do the work.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section id="stats">
        <div className="wrap">
          <div className="stats-row">
            <Reveal>
              <div className="stat-num" data-count="4" data-suffix="+">4+</div>
              <div className="stat-title">Years designing</div>
              <div className="stat-desc">enterprise AI products, design systems &amp; research</div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="stat-num">Fortune&nbsp;100</div>
              <div className="stat-title">Clients</div>
              <div className="stat-desc">Citi, AbbVie, Samsung — products that scale</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ROLE TABS */}
      <section id="roles">
        <div className="wrap">
          <Reveal>
            <div className="roles-header">
              <div className="roles-eyebrow">About Me</div>
              <h2 className="roles-title">Three perspectives.<br/>One designer.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="roles-tabs">
              <div className="roles-tab-track" role="tablist" aria-label="Audience perspectives">
                <button className="role-tab active" data-tab="recruiters" role="tab" aria-selected="true" aria-controls="panel-recruiters" id="tab-recruiters">Recruiters &amp; Hiring Teams</button>
                <button className="role-tab" data-tab="designers" role="tab" aria-selected="false" aria-controls="panel-designers" id="tab-designers">Designers</button>
                <button className="role-tab" data-tab="engineers" role="tab" aria-selected="false" aria-controls="panel-engineers" id="tab-engineers">Engineers &amp; PMs</button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="roles-card">
              <div className="role-panel active" id="panel-recruiters" role="tabpanel" aria-labelledby="tab-recruiters">
                <div className="role-panel-title">Dear Recruiters &amp; Hiring team,</div>
                <p className="role-panel-body">I design enterprise products that turn complexity into clarity. From AI-powered platforms to large-scale SaaS systems, I focus on creating experiences that users understand, adopt, and trust. My work connects business goals, user needs, and product strategy—helping teams move faster while delivering measurable impact.</p>
                <span className="role-panel-cta">Looking for someone who can own problems, not just screens?</span>
                <div className="role-stats">
                  <div className="role-stat"><span className="role-stat-num">5+</span><span className="role-stat-lbl">Products Launched</span></div>
                  <div className="role-stat"><span className="role-stat-num">F100</span><span className="role-stat-lbl">Client Work</span></div>
                  <div className="role-stat"><span className="role-stat-num">40%+</span><span className="role-stat-lbl">Workflow Efficiency Gains</span></div>
                </div>
              </div>
              <div className="role-panel" id="panel-designers" role="tabpanel" aria-labelledby="tab-designers">
                <div className="role-panel-title">Dear fellow designers,</div>
                <p className="role-panel-body">I enjoy messy problems, whiteboard debates, and turning ambiguity into something tangible. Whether I&apos;m building design systems, exploring AI-native experiences, or refining the smallest interaction detail, I care about craft, clarity, and systems that scale.</p>
                <span className="role-panel-cta">Always happy to talk design, systems, and what&apos;s next.</span>
                <div className="role-stats">
                  <div className="role-stat"><span className="role-stat-num">0→1</span><span className="role-stat-lbl">Design System Scaled</span></div>
                  <div className="role-stat"><span className="role-stat-num">AI</span><span className="role-stat-lbl">AI-First Workflows</span></div>
                  <div className="role-stat"><span className="role-stat-num">WCAG</span><span className="role-stat-lbl">Accessibility-Aware Craft</span></div>
                </div>
              </div>
              <div className="role-panel" id="panel-engineers" role="tabpanel" aria-labelledby="tab-engineers">
                <div className="role-panel-title">Dear builders,</div>
                <p className="role-panel-body">I care about more than pixels. I think in workflows, constraints, edge cases, and outcomes. My goal is to make collaboration easier by bringing clarity to requirements, aligning stakeholders, and designing solutions that are practical to build and easy to scale.</p>
                <span className="role-panel-cta">Let&apos;s build products users actually love.</span>
                <div className="role-stats">
                  <div className="role-stat"><span className="role-stat-num">0→1</span><span className="role-stat-lbl">Product Thinking</span></div>
                  <div className="role-stat"><span className="role-stat-num">✕</span><span className="role-stat-lbl">Cross-Functional by Default</span></div>
                  <div className="role-stat"><span className="role-stat-num">↑</span><span className="role-stat-lbl">Faster Design-to-Dev Handoffs</span></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <div className="wrap">
          <div className="work-head">
            <Reveal><div className="eyebrow" style={{justifyContent:'center'}}>◆ &nbsp;Selected Work</div></Reveal>
            <Reveal delay={0.1}><h2 className="work-title">check out some of <span className="acc">my work</span></h2></Reveal>
            <Reveal delay={0.2}><p className="work-sub">A few products I&apos;ve helped shape, and the thinking behind them.</p></Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="work-card wc1" data-tilt>
              <div>
                <div className="wc-meta"><span className="wc-badge">01</span><span className="wc-badge">2025</span></div>
                <h3 className="wc-title">Compliance that doesn&apos;t slow you down.</h3>
                <div className="wc-tags"><span className="wc-tag">GRC</span><span className="wc-tag">AI / ML</span><span className="wc-tag">Enterprise</span><span className="wc-tag">B2B</span></div>
                <p className="wc-desc">Built the UX for an AI-powered GRC platform — extraction engine, gap analysis, and architecture scanner — for Fortune 100 clients.</p>
                <Link href="/work/grc" className="wc-cta">View Case Study →</Link>
              </div>
              <div><div className="wc-mockup"><div className="wc-mockup-bar"><div className="wc-dot"/><div className="wc-dot"/><div className="wc-dot"/></div><div className="wc-mockup-body"><div className="mb s"/><div className="mb m"/><div className="mb tall"/><div className="mb s"/><div className="mb m"/></div></div></div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="work-card wc2" data-tilt>
              <div>
                <div className="wc-meta"><span className="wc-badge">02</span><span className="wc-badge">2024–25</span></div>
                <h3 className="wc-title">A design system built to scale across Fortune 100.</h3>
                <div className="wc-tags"><span className="wc-tag">Design Systems</span><span className="wc-tag">Figma</span><span className="wc-tag">Tailwind CSS</span><span className="wc-tag">WCAG 2.2</span></div>
                <p className="wc-desc">Architected WorldKit from scratch — Figma tokens, Storybook, and a component library used across enterprise AI products.</p>
                <span className="wc-cta soon">Coming Soon</span>
              </div>
              <div><div className="wc-mockup"><div className="wc-mockup-bar"><div className="wc-dot"/><div className="wc-dot"/><div className="wc-dot"/></div><div className="wc-mockup-body"><div className="mb m"/><div className="mb s"/><div className="mb tall"/><div className="mb m"/></div></div></div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="work-card wc3" data-tilt>
              <div>
                <div className="wc-meta"><span className="wc-badge">03</span><span className="wc-badge">2025</span></div>
                <h3 className="wc-title">Making store ops feel like a conversation.</h3>
                <div className="wc-tags"><span className="wc-tag">Retail AI</span><span className="wc-tag">Operations</span><span className="wc-tag">Dashboard</span></div>
                <p className="wc-desc">Designed an AI-powered ops platform for 7-Eleven store managers — real-time inventory, anomaly detection, and intelligent alerts.</p>
                <Link href="/work/7eleven" className="wc-cta">View Case Study →</Link>
              </div>
              <div><div className="wc-mockup"><div className="wc-mockup-bar"><div className="wc-dot"/><div className="wc-dot"/><div className="wc-dot"/></div><div className="wc-mockup-body"><div className="mb s"/><div className="mb tall"/><div className="mb m"/><div className="mb s"/></div></div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap">
          <Reveal><div className="eyebrow">◆ &nbsp;About Me</div></Reveal>
          <div className="about-grid">
            <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.65}}>
              <div className="about-photo">
                <img src="/assets/images/profile.png" alt="Achyut Khanpara" />
              </div>
            </motion.div>
            <div>
              <Reveal><h2 className="about-h">a little about <span className="acc">myself</span></h2></Reveal>
              <Reveal delay={0.1}><p className="about-p">My journey into design spans both engineering and UX — I hold a B.E. in Computer Engineering and an M.S. in UX Design from Arizona State University (4.0 GPA). Today I design enterprise AI products at WorldLink, working with Fortune 100 clients to turn complex compliance workflows into experiences people actually want to use.</p></Reveal>
              <Reveal delay={0.2}><p className="about-p">I&apos;m drawn to problems at the intersection of user needs, business goals, and technical constraints — the kind of work where good design genuinely changes outcomes.</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="wrap">
          <Reveal><div className="eyebrow">◆ &nbsp;The Journey So Far</div></Reveal>
          <Reveal delay={0.05}><h2 className="exp-h">roles that shaped the work</h2></Reveal>
          <Reveal delay={0.1}><p className="exp-sub">From computer engineering to enterprise UX — two degrees and counting.</p></Reveal>
          <div className="timeline">
            <Reveal className="titem">
              <div className="tdot"/>
              <span className="tdate">Jun 2025 – Present</span>
              <div className="tcard">
                <div className="ttitle">UX Designer</div>
                <div className="torg">WorldLink Labs — Dallas, TX</div>
                <div className="tdesc">Leading UX for enterprise AI products including GRC platforms, design system (WorldKit), and AI operations dashboards for Fortune 100 clients.</div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="titem">
              <div className="tdot"/>
              <span className="tdate">Jun 2024 – May 2025</span>
              <div className="tcard">
                <div className="ttitle">M.S. UX Design</div>
                <div className="torg">Arizona State University — 4.0 GPA</div>
                <div className="tdesc">Specialized in interaction design, design research, and human-computer interaction with a focus on enterprise software.</div>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="titem">
              <div className="tdot"/>
              <span className="tdate">2020 – 2024</span>
              <div className="tcard">
                <div className="ttitle">B.E. Computer Engineering</div>
                <div className="torg">University</div>
                <div className="tdesc">Foundation in software engineering, UI development, and systems thinking that informs every design decision.</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="t-header">
          <Reveal><div className="t-eyebrow">✦ &nbsp;Recommendations</div></Reveal>
          <Reveal delay={0.1}><h2 className="t-title">What people say about me</h2></Reveal>
          <Reveal delay={0.2}><p className="t-sub">A few words from people I&apos;ve designed with, shipped alongside, and problem-solved next to.</p></Reveal>
        </div>
        <div className="t-marquee-wrap">
          <div className="t-track" id="tTrack">
            {testimonials.map((t, i) => (
              <div key={i} className="t-card">
                <div className="t-photo-col">
                  <div className="t-polaroid"><div className="t-avatar">{t.i}</div></div>
                  <div>
                    <div className="t-name">{t.n}</div>
                    <div className="t-role">{t.r.split('\n').map((line, li) => <span key={li}>{line}{li === 0 && <br/>}</span>)}</div>
                  </div>
                </div>
                <div className="t-quote-col">
                  <div className="t-stars"><StarSVG/><StarSVG/><StarSVG/><StarSVG/><StarSVG/></div>
                  <span className="t-quote-icon">&ldquo;</span>
                  <p className="t-quote-text">{t.q}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact">
        <div className="wrap footer-inner">
          <Reveal><div className="eyebrow footer-eyebrow">◆ &nbsp;Let&apos;s Connect</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="footer-h">let&apos;s design <span className="acc">incredible</span><br/>work together.</h2>
          </Reveal>
          <Reveal delay={0.2}><a href="mailto:achyutkhanpara7@gmail.com" className="footer-email">achyutkhanpara7@gmail.com</a></Reveal>
          <Reveal delay={0.3}>
            <div className="footer-socials">
              <a href="#" className="s-btn" title="LinkedIn">in</a>
              <a href="#" className="s-btn" title="Behance">Be</a>
              <a href="#" className="s-btn" title="Twitter / X">𝕏</a>
            </div>
          </Reveal>
          <p className="footer-copy">© 2026 Achyut Khanpara. All rights reserved.</p>
        </div>
        <div className="footer-wm">ACHYUT</div>
      </footer>
    </>
  )
}
