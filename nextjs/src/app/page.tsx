'use client'

import { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import './ax.css'

/* ══════════════════════════ icons ══════════════════════════ */
const I = {
  lock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>,
  reload: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>,
  side: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/></svg>,
  left: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>,
  right: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>,
  share: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 16V4"/><path d="M8 8l4-4 4 4"/><path d="M4 15v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3"/></svg>,
  plus: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  copy: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="12" height="12" rx="2.5"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>,
  search: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>,
  bell: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10.5 21a2 2 0 0 0 3 0"/></svg>,
  help: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.6 2.6 0 1 1 3.4 2.5c-.6.2-.9.8-.9 1.4v.3"/><path d="M12 17.2h.01"/></svg>,
  chat: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12z"/></svg>,
  gear: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 14.6a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 14.6a2 2 0 1 1 0-4 1.6 1.6 0 0 0 1.7-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7 2 2 0 1 1 0 4h-.2z"/></svg>,
  bolt: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>,
  arrow: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>,
  pin: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>,
  globe: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15 0 18M12 3c-2.5 2.6-2.5 15 0 18"/></svg>,
  user: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>,
  clock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2"/><path d="M9 2h6"/></svg>,
  mic: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 12a7 7 0 0 0 14 0M12 19v2"/></svg>,
  wave: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 10v4M8 6v12M12 3v18M16 6v12M20 10v4"/></svg>,
  spark: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/></svg>,
  mail: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>,
  star: () => <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
}

/* ══════════════════════════ data (all Achyut's) ══════════════════════════ */
const FOCUS = [
  { k: 'Enterprise AI Products', v: 42, c: '#dff3ff' },
  { k: 'Design Systems',         v: 28, c: '#b9e6ff' },
  { k: 'UX Research',            v: 18, c: '#8fd6ff' },
  { k: 'Product Strategy',       v: 12, c: '#63c4ff' },
]

const WORK = [
  {
    cls: 'w1', n: '01', year: '2025', href: '/work/grc', cta: 'View Case Study',
    title: 'Compliance that doesn’t slow you down.',
    desc: 'UX for an AI-powered GRC platform — extraction engine, gap analysis and architecture scanner — shipped to Fortune 100 clients.',
    tags: ['GRC', 'AI / ML', 'Enterprise', 'B2B'],
  },
  {
    cls: 'w2', n: '02', year: '2024–25', href: null, cta: 'Coming Soon',
    title: 'A design system built to scale across Fortune 100.',
    desc: 'Architected WorldKit from scratch — Figma tokens, Storybook and a component library now used across enterprise AI products.',
    tags: ['Design Systems', 'Figma', 'Tailwind CSS', 'WCAG 2.2'],
  },
  {
    cls: 'w3', n: '03', year: '2025', href: '/work/7eleven', cta: 'View Case Study',
    title: 'Making store ops feel like a conversation.',
    desc: 'An AI-powered operations platform for 7-Eleven store managers — real-time inventory, anomaly detection and intelligent alerts.',
    tags: ['Retail AI', 'Operations', 'Dashboard'],
  },
]

const PERSPECTIVES = [
  {
    id: 'recruiters', label: 'Recruiters & Hiring Teams',
    title: 'Dear recruiters & hiring teams,',
    body: 'I design enterprise products that turn complexity into clarity. From AI-powered platforms to large-scale SaaS systems, I focus on experiences that people understand, adopt and trust. My work connects business goals, user needs and product strategy — helping teams move faster while delivering measurable impact.',
    note: 'Looking for someone who can own problems, not just screens?',
    stats: [['5+', 'Products launched'], ['F100', 'Client work'], ['40%+', 'Workflow efficiency gains']],
  },
  {
    id: 'designers', label: 'Designers',
    title: 'Dear fellow designers,',
    body: 'I enjoy messy problems, whiteboard debates and turning ambiguity into something tangible. Whether I’m building design systems, exploring AI-native experiences or refining the smallest interaction detail, I care about craft, clarity and systems that scale.',
    note: 'Always happy to talk design, systems and what’s next.',
    stats: [['0→1', 'Design system scaled'], ['AI', 'AI-first workflows'], ['WCAG', 'Accessibility-aware craft']],
  },
  {
    id: 'engineers', label: 'Engineers & PMs',
    title: 'Dear builders,',
    body: 'I care about more than pixels. I think in workflows, constraints, edge cases and outcomes. My goal is to make collaboration easier by bringing clarity to requirements, aligning stakeholders and designing solutions that are practical to build and easy to scale.',
    note: 'Let’s build products users actually love.',
    stats: [['0→1', 'Product thinking'], ['✕', 'Cross-functional by default'], ['↑', 'Faster design-to-dev handoffs']],
  },
]

const JOURNEY = [
  { date: 'Jun 2025 — Present', title: 'UX Designer', org: 'WorldLink Labs — Dallas, TX', desc: 'Leading UX for enterprise AI products including GRC platforms, the WorldKit design system and AI operations dashboards for Fortune 100 clients.' },
  { date: 'Jun 2024 — May 2025', title: 'M.S. UX Design', org: 'Arizona State University — 4.0 GPA', desc: 'Specialized in interaction design, design research and human-computer interaction, with a focus on enterprise software.' },
  { date: '2020 — 2024', title: 'B.E. Computer Engineering', org: 'Gujarat Technological University', desc: 'Foundation in software engineering, UI development and systems thinking that informs every design decision I make today.' },
]

const SKILLS_A = ['Figma', 'Design Systems', 'Enterprise UX', 'UX Research', 'Framer', 'Prototyping', 'Design Tokens', 'Usability Testing', 'Storybook']
const SKILLS_B = ['AI Products', 'Claude', 'Cursor', 'Product Strategy', 'WCAG 2.2', 'Journey Mapping', 'Tailwind CSS', 'Design Sprints', 'Information Architecture']

const TESTIMONIALS = [
  { i: 'HD', n: 'Hemal Darji', r: 'Sr. UX Designer, Thinkwik Technologies', q: 'Achyut’s dedication to user research and his insight-driven designs make him a standout UX professional. He transforms complex requirements into seamless, impactful user experiences.' },
  { i: 'ER', n: 'Dr. Elaine Rettger', r: 'Associate Director, Bus & Fin Comms, ASU', q: 'Achyut consistently demonstrated exceptional UX design, research and digital communication skills, becoming a key contributor to our projects at ASU. His professionalism, creativity and user-first mindset made him an invaluable asset to our team.' },
  { i: 'SC', n: 'Stephen Carradini', r: 'Assistant Professor, Arizona State University', q: 'Achyut’s designs are not just visually appealing but also highly functional, ensuring usability and clarity for the end user. His teamwork experience and coordination skills make him a valuable asset to any user experience team.' },
  { i: 'NP', n: 'Nikit Patel', r: 'Team Lead Design, Thinkwik Technologies', q: 'Achyut’s creative vision and user-centric approach elevate every project he undertakes. His designs are not only visually engaging but also highly intuitive and user-friendly.' },
]

const TABS = [
  { id: 'overview', label: 'Overview', to: 'ax-top' },
  { id: 'work', label: 'Work', to: 'ax-work' },
  { id: 'about', label: 'About', to: 'ax-about' },
  { id: 'journey', label: 'Journey', to: 'ax-journey' },
  { id: 'voices', label: 'Recommendations', to: 'ax-voices' },
  { id: 'contact', label: 'Contact', to: 'ax-connect' },
]

/* ══════════════════════════ small helpers ══════════════════════════ */
function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen] as const
}

function Rise({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.12)
  return (
    <div ref={ref} className={`ax-rise ${seen ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

/** counts up to `to` once scrolled into view */
function Count({ to, decimals = 0, prefix = '', suffix = '' }: { to: number; decimals?: number; prefix?: string; suffix?: string }) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.4)
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!seen) return
    let raf = 0
    const t0 = performance.now()
    const dur = 1400
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur)
      setN(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to])
  return <span ref={ref}>{prefix}{n.toFixed(decimals)}{suffix}</span>
}

/** generic sliding-pill segmented control */
function useSlidingPill(active: number, count: number) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState({ left: 0, width: 0 })
  const measure = useCallback(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const btn = wrap.querySelectorAll('button')[active] as HTMLElement | undefined
    if (!btn) return
    setBox({ left: btn.offsetLeft, width: btn.offsetWidth })
  }, [active])
  useLayoutEffect(() => { measure() }, [measure, count])
  useEffect(() => {
    const onR = () => measure()
    window.addEventListener('resize', onR)
    const t = setTimeout(measure, 400) // after webfonts settle
    return () => { window.removeEventListener('resize', onR); clearTimeout(t) }
  }, [measure])
  return [wrapRef, box] as const
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

/* ══════════════════════════ page ══════════════════════════ */
export default function Home() {
  const [booted, setBooted] = useState(false)
  const [bootGo, setBootGo] = useState(false)
  const [navOn, setNavOn] = useState(false)
  const [tab, setTab] = useState(0)
  const [persp, setPersp] = useState(0)

  const [tabsRef, tabPill] = useSlidingPill(tab, TABS.length)
  const [segRef, segPill] = useSlidingPill(persp, PERSPECTIVES.length)

  const barRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const spotRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [gaugeRef, gaugeIn] = useInView<HTMLDivElement>(0.3)

  /* boot sequence */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setBootGo(true), 90)
    const t2 = setTimeout(() => {
      setBooted(true)
      document.body.style.overflow = ''
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      setNavOn(true)
    }, 2200)
    return () => { clearTimeout(t1); clearTimeout(t2); document.body.style.overflow = '' }
  }, [])

  /* scroll progress + nav state + active tab tracking */
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const total = document.documentElement.scrollHeight - window.innerHeight
        if (barRef.current && total > 0) barRef.current.style.width = `${(window.scrollY / total) * 100}%`
        navRef.current?.classList.toggle('stuck', window.scrollY > 40)

        // sync the app tab pill with the section in view
        const mid = window.scrollY + window.innerHeight * 0.35
        let idx = 0
        TABS.forEach((t, i) => {
          const el = document.getElementById(t.to)
          if (el && el.offsetTop <= mid) idx = i
        })
        setTab(idx)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  /* cursor spotlight in hero */
  useEffect(() => {
    const hero = heroRef.current, spot = spotRef.current
    if (!hero || !spot) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const r = hero.getBoundingClientRect()
        spot.style.left = `${e.clientX - r.left}px`
        spot.style.top = `${e.clientY - r.top}px`
      })
    }
    hero.addEventListener('mousemove', onMove)
    return () => { hero.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  /* 3D tilt on [data-tilt] cards */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'))
    const cleanups = cards.map(card => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2)
        const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2)
        card.style.transform = `perspective(1100px) rotateX(${-dy * 3.2}deg) rotateY(${dx * 5}deg) translateY(-6px)`
      }
      const leave = () => { card.style.transform = '' }
      card.addEventListener('mousemove', move)
      card.addEventListener('mouseleave', leave)
      return () => { card.removeEventListener('mousemove', move); card.removeEventListener('mouseleave', leave) }
    })
    return () => cleanups.forEach(fn => fn())
  }, [booted])

  const gaugeLen = 2 * Math.PI * 92 * 0.5 // half circle, r = 92

  return (
    <div className="ax">
      {/* ── living background ── */}
      <div className="ax-canvas" aria-hidden="true">
        <div className="ax-blob b1" /><div className="ax-blob b2" />
        <div className="ax-blob b3" /><div className="ax-blob b4" />
        <div className="ax-grain" />
      </div>

      <div className="ax-progress" ref={barRef} />

      {/* ── boot ── */}
      <div className={`ax-boot ${bootGo ? 'go' : ''} ${booted ? 'done' : ''}`} aria-hidden={booted}>
        <div className="ax-boot-name">
          <span>ACHYUT</span>
          <div className="ax-boot-dots"><i /><i /><i /></div>
          <span>KHANPARA</span>
        </div>
        <div className="ax-boot-bar"><i /></div>
        <div className="ax-boot-label">Loading portfolio</div>
      </div>

      {/* ── floating nav ── */}
      <nav className={`ax-topnav ${navOn ? 'show' : ''}`} ref={navRef}>
        <a href="#ax-top" className="ax-topnav-brand" onClick={e => { e.preventDefault(); scrollTo('ax-top') }}>
          <span className="ax-avatar-chip"><img src="/assets/images/profile.png" alt="" /></span>
          <span className="ax-topnav-name">ACHYUT</span>
        </a>
        <div className="ax-topnav-links">
          <a href="#ax-work" onClick={e => { e.preventDefault(); scrollTo('ax-work') }}>Work</a>
          <Link href="/about">About</Link>
          <Link href="/classic">Classic</Link>
          <a href="#ax-connect" className="solid" onClick={e => { e.preventDefault(); scrollTo('ax-connect') }}>Let&rsquo;s Talk</a>
        </div>
      </nav>

      {/* ══════════════ HERO: the app window ══════════════ */}
      <section className="ax-hero" id="ax-top" ref={heroRef}>
        <div className="ax-spot" ref={spotRef} />
        <div className="ax-window">
          {/* browser chrome */}
          <div className="ax-chrome">
            <div className="ax-lights"><i /><i /><i /></div>
            <div className="ax-chrome-icons hide-sm"><I.side /><I.left /><I.right /></div>
            <div className="ax-urlbar"><I.lock /> achyutkhanpara.design <I.reload /></div>
            <div className="ax-chrome-icons" style={{ marginLeft: 'auto' }}><I.share /><I.plus /><I.copy /></div>
          </div>

          {/* app top bar */}
          <div className="ax-appbar">
            <div className="ax-logo">
              <span className="ax-logo-mark">AK</span>
              <span className="ax-logo-text">Achyut Khanpara</span>
            </div>

            <div className="ax-tabs" ref={tabsRef} role="tablist" aria-label="Sections">
              <span className="ax-tab-pill" style={{ left: tabPill.left, width: tabPill.width }} />
              {TABS.map((t, i) => (
                <button key={t.id} role="tab" aria-selected={tab === i}
                  className={`ax-tab ${tab === i ? 'on' : ''}`}
                  onClick={() => { setTab(i); scrollTo(t.to) }}>
                  {t.label}
                </button>
              ))}
            </div>

            <div className="ax-appbar-right">
              <div className="ax-icon-group">
                <button className="ax-icon-btn" aria-label="Search" onClick={() => scrollTo('ax-work')}><I.search /></button>
                <button className="ax-icon-btn" aria-label="Updates" onClick={() => scrollTo('ax-journey')}><I.bell /></button>
                <button className="ax-icon-btn" aria-label="About" onClick={() => scrollTo('ax-about')}><I.help /></button>
              </div>
              <span className="ax-avatar-chip"><img src="/assets/images/profile.png" alt="Achyut Khanpara" /></span>
            </div>
          </div>

          {/* title row */}
          <div className="ax-title-row">
            <div>
              <h1 className="ax-h1">UX &amp; Product <em>Designer</em></h1>
              <p className="ax-h1-sub">
                Available for work &nbsp;·&nbsp; Open to relocate anywhere in the USA &nbsp;·&nbsp; Dallas, TX
              </p>
            </div>
            <div className="ax-appbar-right">
              <div className="ax-icon-group">
                <button className="ax-icon-btn" aria-label="Recommendations" onClick={() => scrollTo('ax-voices')}><I.chat /></button>
                <button className="ax-icon-btn" aria-label="Toolkit" onClick={() => scrollTo('ax-toolkit')}><I.gear /></button>
                <button className="ax-icon-btn" aria-label="Highlights" onClick={() => scrollTo('ax-intro')}><I.bolt /></button>
              </div>
              <a href="mailto:achyutkhanpara7@gmail.com" className="ax-share">
                <span className="ax-stack"><span>HD</span><span>ER</span><span>SC</span></span>
                <I.share /> Hire me
              </a>
            </div>
          </div>

          {/* ── the dashboard ── */}
          <div className="ax-board">
            <div className="ax-metrics">

              {/* big blue focus card */}
              <div className="ax-card blue" data-tilt ref={gaugeRef}>
                <button className="ax-arrow-btn" aria-label="See selected work" onClick={() => scrollTo('ax-work')}><I.arrow /></button>
                <div className="ax-card-label">Experience<br />Overview</div>
                <div className="ax-card-value"><Count to={4} suffix="+ Years" /></div>
                <div className="ax-card-delta"><i>▲</i> 15+ projects shipped end-to-end</div>

                <div className="ax-gauge">
                  <svg viewBox="0 0 220 118">
                    <defs>
                      <linearGradient id="axGaugeGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#bff0ff" /><stop offset="100%" stopColor="#3fa9ff" />
                      </linearGradient>
                    </defs>
                    <path className="ax-gauge-track" d="M18 110 A92 92 0 0 1 202 110" />
                    <path className="ax-gauge-fill" d="M18 110 A92 92 0 0 1 202 110"
                      style={{
                        strokeDasharray: gaugeLen,
                        strokeDashoffset: gaugeIn ? gaugeLen * (1 - 0.89) : gaugeLen,
                        transition: 'stroke-dashoffset 1.8s cubic-bezier(.22,1,.36,1) .2s',
                      }} />
                  </svg>
                  <div className="ax-gauge-cap">
                    <span>Enterprise &amp; AI focus</span>
                    <b><Count to={89} suffix="%" /></b>
                  </div>
                </div>

                <div className="ax-legend">
                  {FOCUS.map(f => (
                    <div className="ax-legend-row" key={f.k}>
                      <b style={{ background: f.c }} /><span>{f.k}</span><span>{f.v}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* white activity card */}
              <div className="ax-card white" data-tilt>
                <div className="ax-pill-dark">Overview</div>
                <div className="ax-blobart" />
                <div className="ax-white-head">Design output</div>
                <div className="ax-white-title">Case studies</div>
                <div className="ax-ticks">
                  <div className="ax-tick-num">15+</div>
                  <div className="ax-tick-bars">
                    {Array.from({ length: 34 }).map((_, i) => (
                      <i key={i} className={i === 8 ? 'hi' : ''} style={{ height: `${28 + ((i * 37) % 62)}%`, animationDelay: `${(i % 8) * 0.12}s` }} />
                    ))}
                  </div>
                  <div className="ax-tick-labels"><span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>2025</span></div>
                </div>
              </div>

              {/* purple reach card */}
              <div className="ax-card purple" data-tilt>
                <div className="ax-card-label">People reached</div>
                <div className="ax-card-value"><Count to={12} suffix="K+" /></div>
                <div className="ax-card-delta"><i>▲</i> across 5 enterprise products</div>
                <div className="ax-wave">
                  <svg viewBox="0 0 320 60" preserveAspectRatio="none">
                    <path d="M0,42 C34,10 62,10 96,34 C130,58 158,58 192,30 C226,4 254,4 288,26 L320,34" />
                    <circle className="ax-wave-dot" cx="288" cy="26" r="5" />
                  </svg>
                </div>
                <div className="ax-yaxis"><span>100</span><span>70</span><span>50</span><span>20</span></div>
                <div className="ax-xaxis"><span>Citi</span><span>AbbVie</span><span>Samsung</span><span>7-Eleven</span><span>WorldKit</span></div>
              </div>

              {/* trio */}
              <div className="ax-trio">
                <div className="ax-card mini m1" data-tilt>
                  <div className="ax-card-label">Certifications<br />earned</div>
                  <div className="ax-dots-num">10+</div>
                  <div className="ax-mini-art">
                    <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                      <path d="M0,32 C18,30 26,14 44,16 C62,18 70,6 88,9 C100,11 110,6 120,4" />
                      <path className="dash" d="M0,38 L120,38" />
                    </svg>
                  </div>
                </div>
                <div className="ax-card mini m2" data-tilt>
                  <div className="ax-card-label">Research<br />sessions</div>
                  <div className="ax-dots-num">50+</div>
                  <div className="ax-mini-art">
                    <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                      <path d="M0,20 C12,4 24,36 36,20 C48,4 60,36 72,20 C84,4 96,36 108,20 C114,12 118,16 120,18" />
                    </svg>
                  </div>
                </div>
                <div className="ax-card mini m3" data-tilt>
                  <div className="ax-card-label">Master&rsquo;s<br />GPA</div>
                  <div className="ax-dots-num">4.0</div>
                  <div className="ax-dotgrid">
                    {Array.from({ length: 36 }).map((_, i) => <i key={i} className={i % 5 === 2 || i > 27 ? 'on' : ''} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* ── profile panel ── */}
            <div className="ax-profile">
              <span className="ax-portrait-tag">Placeholder photo</span>
              <div className="ax-profile-name">Achyut Khanpara</div>
              <div className="ax-profile-role">UX &amp; Product Designer · WorldLink Labs</div>

              <div className="ax-profile-body">
                <div className="ax-chip c1">
                  <span className="ax-chip-ico"><I.globe /></span>
                  <span><span className="ax-chip-k">Based in</span><span className="ax-chip-v">Dallas, TX</span></span>
                </div>
                <div className="ax-chip c2">
                  <span className="ax-chip-ico"><I.spark /></span>
                  <span><span className="ax-chip-k">Focus</span><span className="ax-chip-v">Enterprise AI UX</span></span>
                </div>
                <div className="ax-chip c3">
                  <span className="ax-chip-ico"><I.user /></span>
                  <span><span className="ax-chip-k">Role</span><span className="ax-chip-v">UX Designer</span></span>
                </div>
                <div className="ax-chip c4">
                  <span className="ax-chip-ico"><I.clock /></span>
                  <span><span className="ax-chip-k">Replies in</span><span className="ax-chip-v">Under 24 hrs</span></span>
                </div>

                <div className="ax-portrait">
                  <img src="/assets/images/profile.png" alt="Achyut Khanpara" />
                </div>

                <div className="ax-papers">
                  <div className="ax-paper"><b>GRC Platform</b><i style={{ width: '90%' }} /><i style={{ width: '70%' }} /><i style={{ width: '80%' }} /><i style={{ width: '52%' }} /></div>
                  <div className="ax-paper"><b>WorldKit DS</b><i style={{ width: '78%' }} /><i style={{ width: '92%' }} /><i style={{ width: '60%' }} /><i style={{ width: '84%' }} /></div>
                  <div className="ax-paper"><b>7-Eleven Ops</b><i style={{ width: '86%' }} /><i style={{ width: '64%' }} /><i style={{ width: '88%' }} /><i style={{ width: '58%' }} /></div>
                </div>
              </div>

              <div className="ax-askbar">
                <div className="ax-ask-input"><b>Ask about my process, case studies or availability…</b><span className="ax-caret" /></div>
                <div className="ax-ask-row">
                  <button className="ax-ask-chip" onClick={() => scrollTo('ax-work')}><I.spark /> See the work</button>
                  <button className="ax-ask-chip" onClick={() => scrollTo('ax-about')}>How I think</button>
                  <span className="ax-ask-spacer" />
                  <button className="ax-icon-btn" aria-label="Recommendations" onClick={() => scrollTo('ax-voices')}><I.mic /></button>
                  <button className="ax-icon-btn" aria-label="Contact" onClick={() => scrollTo('ax-connect')}><I.wave /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATEMENT ══════════════ */}
      <section className="ax-section" id="ax-intro">
        <div className="ax-wrap">
          <Rise><div className="ax-eyebrow"><b />What I do</div></Rise>
          <div className="ax-statement-grid" style={{ marginTop: 28 }}>
            <Rise delay={0.08}>
              <p className="ax-statement">
                I turn messy, real-world problems into products people <span className="g">actually understand</span> — interfaces that feel obvious, systems that scale, and details that quietly <span className="dim">do the work.</span>
              </p>
            </Rise>
            <Rise delay={0.18}>
              <div className="ax-kpis">
                <div className="ax-kpi"><b><Count to={4} suffix="+" /></b><span>Years designing enterprise AI products, design systems &amp; research</span></div>
                <div className="ax-kpi"><b>F100</b><span>Citi, AbbVie, Samsung — products built to scale</span></div>
                <div className="ax-kpi"><b><Count to={40} suffix="%+" /></b><span>Workflow efficiency gains across shipped products</span></div>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* ══════════════ WORK ══════════════ */}
      <section className="ax-section" id="ax-work">
        <div className="ax-wrap">
          <Rise><div className="ax-eyebrow"><b />Selected work</div></Rise>
          <Rise delay={0.06}><h2 className="ax-h2">Products I&rsquo;ve helped <em>shape</em>.</h2></Rise>
          <Rise delay={0.12}><p className="ax-lead">Three enterprise problems, three very different answers — and the thinking behind each one.</p></Rise>

          <div className="ax-works">
            {WORK.map((w, i) => (
              <Rise key={w.n} delay={0.06 * i}>
                <article className={`ax-work ${w.cls}`} data-tilt>
                  <div>
                    <div className="ax-work-meta">
                      <span className="ax-badge">{w.n}</span><span className="ax-badge">{w.year}</span>
                    </div>
                    <h3 className="ax-work-title">{w.title}</h3>
                    <p className="ax-work-desc">{w.desc}</p>
                    <div className="ax-tags">{w.tags.map(t => <span className="ax-tag" key={t}>{t}</span>)}</div>
                    {w.href
                      ? <Link href={w.href} className="ax-work-cta">{w.cta} <I.arrow /></Link>
                      : <span className="ax-work-cta soon">{w.cta}</span>}
                  </div>
                  <div className="ax-preview">
                    <div className="ax-preview-bar"><i /><i /><i /></div>
                    <div className="ax-preview-body"><i /><i /><i /><i /></div>
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ ABOUT / PERSPECTIVES ══════════════ */}
      <section className="ax-section" id="ax-about">
        <div className="ax-wrap">
          <Rise><div className="ax-eyebrow"><b />About me</div></Rise>
          <Rise delay={0.06}><h2 className="ax-h2">Three perspectives.<br />One <em>designer</em>.</h2></Rise>
          <Rise delay={0.12}><p className="ax-lead">Engineering degree, UX master&rsquo;s, Fortune 100 clients. Pick the lens that matches you.</p></Rise>

          <Rise delay={0.16}>
            <div className="ax-seg" ref={segRef} role="tablist" aria-label="Perspectives">
              <span className="ax-seg-pill" style={{ left: segPill.left, width: segPill.width }} />
              {PERSPECTIVES.map((p, i) => (
                <button key={p.id} role="tab" aria-selected={persp === i}
                  className={`ax-seg-btn ${persp === i ? 'on' : ''}`} onClick={() => setPersp(i)}>
                  {p.label}
                </button>
              ))}
            </div>
          </Rise>

          <Rise delay={0.2}>
            <div className="ax-panel-card">
              {PERSPECTIVES.map((p, i) => (
                <div key={p.id} className={`ax-panel ${persp === i ? 'on' : ''}`} role="tabpanel">
                  <div className="ax-panel-title">{p.title}</div>
                  <p className="ax-panel-body">{p.body}</p>
                  <span className="ax-panel-note">{p.note}</span>
                  <div className="ax-panel-stats">
                    {p.stats.map(([b, s]) => (
                      <div className="ax-panel-stat" key={s}><b>{b}</b><span>{s}</span></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Rise>
        </div>
      </section>

      {/* ══════════════ JOURNEY ══════════════ */}
      <section className="ax-section" id="ax-journey">
        <div className="ax-wrap">
          <Rise><div className="ax-eyebrow"><b />The journey so far</div></Rise>
          <Rise delay={0.06}><h2 className="ax-h2">Roles that shaped <em>the work</em>.</h2></Rise>
          <div className="ax-feed">
            {JOURNEY.map((j, i) => (
              <Rise key={j.title} delay={0.06 * i}>
                <div className="ax-feed-row">
                  <div className="ax-feed-date"><b />{j.date}</div>
                  <div>
                    <div className="ax-feed-title">{j.title}</div>
                    <div className="ax-feed-org">{j.org}</div>
                    <p className="ax-feed-desc">{j.desc}</p>
                  </div>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TOOLKIT ══════════════ */}
      <section className="ax-section" id="ax-toolkit">
        <div className="ax-wrap">
          <Rise><div className="ax-eyebrow"><b />Toolkit</div></Rise>
          <Rise delay={0.06}><h2 className="ax-h2">What I work <em>with</em>.</h2></Rise>
        </div>
        <div className="ax-marquee">
          <div className="ax-marquee-track">
            {[...SKILLS_A, ...SKILLS_A].map((s, i) => <span key={i} className={`ax-skill ${i % 4 === 1 ? 'hot' : ''}`}>{s}</span>)}
          </div>
        </div>
        <div className="ax-marquee rev" style={{ marginTop: 10 }}>
          <div className="ax-marquee-track">
            {[...SKILLS_B, ...SKILLS_B].map((s, i) => <span key={i} className={`ax-skill ${i % 5 === 2 ? 'hot' : ''}`}>{s}</span>)}
          </div>
        </div>
      </section>

      {/* ══════════════ RECOMMENDATIONS ══════════════ */}
      <section className="ax-section" id="ax-voices">
        <div className="ax-wrap">
          <Rise><div className="ax-eyebrow"><b />Recommendations</div></Rise>
          <Rise delay={0.06}><h2 className="ax-h2">What people say <em>about me</em>.</h2></Rise>
          <Rise delay={0.12}><p className="ax-lead">A few words from people I&rsquo;ve designed with, shipped alongside and problem-solved next to.</p></Rise>
        </div>
        <div className="ax-tmarquee">
          <div className="ax-ttrack">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div className="ax-tcard" key={i}>
                <div className="ax-tcard-top">
                  <span className="ax-tavatar">{t.i}</span>
                  <div>
                    <div className="ax-tname">{t.n}</div>
                    <div className="ax-trole">{t.r}</div>
                  </div>
                </div>
                <div className="ax-stars">{Array.from({ length: 5 }).map((_, s) => <I.star key={s} />)}</div>
                <p className="ax-tquote">&ldquo;{t.q}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CONTACT ══════════════ */}
      <section className="ax-section" id="ax-connect">
        <div className="ax-wrap">
          <Rise>
            <div className="ax-contact">
              <div className="ax-eyebrow"><b />Let&rsquo;s connect</div>
              <h2 className="ax-contact-h" style={{ marginTop: 22 }}>Let&rsquo;s design incredible<br />work together.</h2>
              <a href="mailto:achyutkhanpara7@gmail.com" className="ax-mail"><I.mail /> achyutkhanpara7@gmail.com</a>
              <div className="ax-socials">
                <a className="ax-social" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                <a className="ax-social" href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" aria-label="Behance">Be</a>
                <a className="ax-social" href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">Db</a>
                <a className="ax-social" href="https://github.com/achyutkhanpara7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">Gh</a>
              </div>
            </div>
          </Rise>

          <footer className="ax-footer">
            <div className="ax-footer-row">
              <span>© 2026 Achyut Khanpara. All rights reserved.</span>
              <span>
                <Link href="/classic">Classic design</Link> &nbsp;·&nbsp; <Link href="/about">About</Link> &nbsp;·&nbsp;{' '}
                <a href="#ax-top" onClick={e => { e.preventDefault(); scrollTo('ax-top') }}>Back to top ↑</a>
              </span>
            </div>
          </footer>
        </div>
      </section>
    </div>
  )
}
