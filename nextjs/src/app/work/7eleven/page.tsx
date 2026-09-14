'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import Link from 'next/link'

/* ══════════════════════════════════════════════════════════
   ANIMATION VARIANTS — premium, SaaS-style motion
   Inspired by Linear, Stripe, Apple product portfolios
══════════════════════════════════════════════════════════ */

const ease = [0.16, 1, 0.3, 1] as const // custom spring-like ease

// ── Fade up (general text, paragraphs) ──
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.72, delay, ease }
  })
}

// ── Section header stagger (eyebrow → title → body) ──
const sectionHeader = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } }
}
const headerChild = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease } }
}

// ── Card stagger grid ──
const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
}
const cardItem = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease } }
}

// ── Left-to-right stagger (flow steps) ──
const flowStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } }
}
const flowItem = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease } }
}

// ── Screenshot / mockup reveal (gentle scale) ──
const screenshotReveal = {
  hidden: { opacity: 0, scale: 0.97, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease } }
}

// ── Slide from side (spotlight alternating) ──
const slideLeft  = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }
const slideRight = { hidden: { opacity: 0, x:  40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }

/* ══ Reusable primitives ══ */

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  )
}

function SectionHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={sectionHeader}
    >
      {children}
    </motion.div>
  )
}

function SectionHeaderItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} variants={headerChild}>{children}</motion.div>
}

function StaggerGrid({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerGrid}
    >
      {children}
    </motion.div>
  )
}

function CardItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={cardItem}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.10)', transition: { duration: 0.25, ease: 'easeOut' } }}
    >
      {children}
    </motion.div>
  )
}

function FlowGrid({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={flowStagger}
    >
      {children}
    </motion.div>
  )
}

function FlowItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={flowItem}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
    >
      {children}
    </motion.div>
  )
}

function Screenshot({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={screenshotReveal}
      transition={{ ...screenshotReveal.visible.transition, delay }}
      whileHover={{ scale: 1.015, transition: { duration: 0.35, ease: 'easeOut' } }}
    >
      {children}
    </motion.div>
  )
}

/* ── Animated counter for stats/metrics ── */
function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: 1400, bounce: 0 })

  useEffect(() => {
    if (inView) animate(motionVal, value, { duration: 1.4, ease: 'easeOut' })
  }, [inView, motionVal, value])

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix
    })
  }, [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */

export default function SevenElevenPage() {
  useEffect(() => {
    const handleScroll = () => document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    const scrollEl = document.querySelector<HTMLElement>('.quotes-scroll-outer')
    if (scrollEl) {
      let isDown = false, startX = 0, scrollLeft = 0
      scrollEl.addEventListener('mousedown', (e: MouseEvent) => { isDown = true; scrollEl.style.cursor = 'grabbing'; startX = e.pageX - scrollEl.offsetLeft; scrollLeft = scrollEl.scrollLeft })
      scrollEl.addEventListener('mouseleave', () => { isDown = false; scrollEl.style.cursor = 'grab' })
      scrollEl.addEventListener('mouseup', () => { isDown = false; scrollEl.style.cursor = 'grab' })
      scrollEl.addEventListener('mousemove', (e: MouseEvent) => { if (!isDown) return; e.preventDefault(); scrollEl.scrollLeft = scrollLeft - (e.pageX - scrollEl.offsetLeft - startX) })
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav id="nav">
        <Link href="/" className="nav-back">← Back</Link>
        <div className="nav-avatar"><img src="/assets/images/profile.png" alt="Achyut" /></div>
        <span className="nav-name">ACHYUT</span>
        <Link href="/#work" className="nav-link">Work</Link>
        <Link href="/about" className="nav-link">About</Link>
        <a href="#" className="nav-cta">Resume</a>
      </nav>

      {/* ── HEADER — eyebrow → h1 → sub → meta stagger ── */}
      <section id="header">
        <SectionHeader>
          <SectionHeaderItem>
            <div className="tag-pills">
              <span className="tag-pill">Enterprise UX</span>
              <span className="tag-pill">Design Systems</span>
              <span className="tag-pill">Multi-Persona</span>
              <span className="tag-pill">Web &amp; Responsive</span>
            </div>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <h1 className="page-h1">One design system,<br/>six different jobs.</h1>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <p className="page-sub">Designing a unified AI operations platform for 7-Eleven — serving Store Managers, Area Managers, Corporate leadership, Distributors, and IT Admins from one consistent design system.</p>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <div className="meta-row">
              <div className="meta-cell"><div className="meta-label">Role</div><div className="meta-value">Product Designer</div></div>
              <div className="meta-cell"><div className="meta-label">Platform</div><div className="meta-value">Web (Responsive)</div></div>
              <div className="meta-cell"><div className="meta-label">Status</div><div className="meta-value live"><span className="live-dot"></span> Live</div></div>
              <div className="meta-cell"><div className="meta-label">Year</div><div className="meta-value">2025</div></div>
            </div>
          </SectionHeaderItem>
        </SectionHeader>
      </section>

      {/* ── HERO BANNER — screenshots fan in with stagger ── */}
      <div id="hero-banner">
        <motion.div
          className="hero-banner-inner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease }}
        >
          {[
            { url:'7elevenstoremanager.figma.site', src:'/assets/images/01-store-manager-dashboard.png', alt:'Store Manager' },
            { url:'7elevencorporate.figma.site',    src:'/assets/images/03-corporate-operations-dashboard.png', alt:'Corporate' },
            { url:'7elevenareamanager.figma.site',  src:'/assets/images/02-area-manager-stores.png', alt:'Area Manager' }
          ].map((s, i) => (
            <motion.div
              key={i}
              className="hero-screen"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease }}
            >
              <div className="browser-wrap">
                <div className="browser-bar">
                  <div className="browser-dot r"/><div className="browser-dot y"/><div className="browser-dot g"/>
                  <div className="browser-bar-url">{s.url}</div>
                </div>
                <img className="browser-screen" src={s.src} alt={s.alt} loading="lazy" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── CONTEXT — text slides up, stats stagger with counters ── */}
      <section id="context"><div className="wrap">
        <SectionHeader className="context-text">
          <SectionHeaderItem><div className="eyebrow"><span>◆</span> Context</div></SectionHeaderItem>
          <SectionHeaderItem><h2>six roles, one operational backbone</h2></SectionHeaderItem>
          <SectionHeaderItem>
            <p>7-Eleven&apos;s operations span thousands of store locations, each generating data that multiple roles depend on — but historically, each role used disconnected tools with no shared visual language or interaction model.</p>
            <p>Every operational signal — sales, inventory, appliance health, tickets — flows up through the same underlying system. This made the <strong>design system itself</strong> the highest-leverage surface, where consistency compounds across <strong>six distinct experiences</strong>.</p>
            <p>The business wanted faster issue resolution and clearer accountability, while frontline managers reported alert fatigue and tool-switching fatigue.</p>
          </SectionHeaderItem>
        </SectionHeader>

        <StaggerGrid className="stat-strip">
          {[
            { n: 6,    suffix: '',   l: 'Connected personas' },
            { n: 24,   suffix: '+',  l: 'Store locations represented' },
            { n: 94,   suffix: '.2%',l: 'On-time delivery rate' },
            { n: 22,   suffix: '',   l: 'Active security policies' },
          ].map((s, i) => (
            <motion.div key={i} className="stat-cell" variants={cardItem}>
              <div className="stat-num"><CountUp value={s.n} suffix={s.suffix} /></div>
              <div className="stat-label">{s.l}</div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div></section>

      {/* ── PROBLEM — header stagger, cards stagger with scale ── */}
      <section id="problem"><div className="wrap">
        <SectionHeader>
          <SectionHeaderItem><div className="eyebrow"><span>◆</span> The Problem</div></SectionHeaderItem>
          <SectionHeaderItem><h2 className="section-heading">the cost of disconnected tools</h2></SectionHeaderItem>
        </SectionHeader>

        <div className="problem-layout">
          <StaggerGrid className="problem-col">
            <CardItem className="problem-card">
              <h4>Five products, one team</h4>
              <p>Each role had a separate tool with its own visual language, forcing context-switching even when looking at the same store data.</p>
            </CardItem>
            <CardItem className="problem-card">
              <h4>Inconsistent severity signals</h4>
              <p>A critical alert in one tool looked identical to a low-priority note in another — making it impossible to triage at a glance.</p>
            </CardItem>
          </StaggerGrid>

          <Screenshot className="problem-center" delay={0.2}>
            <div className="browser-wrap">
              <div className="browser-bar"><div className="browser-dot r"/><div className="browser-dot y"/><div className="browser-dot g"/><div className="browser-bar-url">7elevenitadmin.figma.site</div></div>
              <img className="browser-screen" src="/assets/images/06-it-admin-policy-engine.png" alt="IT Admin" loading="lazy" />
            </div>
          </Screenshot>

          <StaggerGrid className="problem-col">
            <CardItem className="problem-card">
              <h4>No shared component logic</h4>
              <p>Cards, tables, and status pills were rebuilt differently in each experience, multiplying design and engineering effort.</p>
            </CardItem>
            <CardItem className="problem-card">
              <h4>Security felt bolted on</h4>
              <p>Password reset and IT admin tools looked nothing like the operational dashboards, breaking trust in the entire system.</p>
            </CardItem>
          </StaggerGrid>
        </div>
      </div></section>

      {/* ── QUOTES — header, then horizontal scroll track ── */}
      <section id="quotes"><div className="wrap">
        <SectionHeader>
          <SectionHeaderItem><div className="eyebrow"><span>◆</span> Research</div></SectionHeaderItem>
          <SectionHeaderItem><h2 className="section-heading">in their own words...</h2></SectionHeaderItem>
          <SectionHeaderItem><p className="section-sub">We ran discovery sessions across all six role types — shadow sessions with store managers, executive briefings with VPs, and deep-dives with IT admins.</p></SectionHeaderItem>
        </SectionHeader>
      </div>
      <div className="quotes-scroll-outer">
        <div className="quotes-track">
          {[
            { q:'I check four different screens before I even know if today is going to be a good day.', r:'Store Manager' },
            { q:'I want to see all my stores at a glance. Right now I have to click into each one just to know if anything needs attention.', r:'Area Manager' },
            { q:'By the time I see a problem in my report, it\'s already cost us money. I need a way to catch risks before they become losses.', r:'Corporate VP of Operations' },
            { q:'Every reset request looks the same to me until I open it. I have no idea if it\'s urgent or routine until I\'m already inside the ticket.', r:'IT Admin' },
            { q:'Delivery tracking is scattered across emails, a spreadsheet, and the old portal. I need one place to see what\'s moving and what\'s stuck.', r:'Distributor Manager' },
          ].map((qt, i) => (
            <motion.div
              key={i}
              className="quote-card"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(0,0,0,0.1)', transition: { duration: 0.22 } }}
            >
              <span className="quote-mark">&ldquo;</span>
              <p className="quote-text">{qt.q}</p>
              <span className="quote-role">{qt.r}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <p className="quotes-disclaimer">Adapted from stakeholder interviews across store, regional, and corporate roles.</p>
      </section>

      {/* ── GOALS — sticky notes stagger with rotation preserved, goals list stagger ── */}
      <section id="goals"><div className="wrap">
        <SectionHeader>
          <SectionHeaderItem><div className="eyebrow"><span>◆</span> Design Goals</div></SectionHeaderItem>
          <SectionHeaderItem><h2 className="section-heading">what we set out to solve</h2></SectionHeaderItem>
        </SectionHeader>

        <div className="goals-grid">
          <motion.div
            className="sticky-notes"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          >
            {[
              { cls: 'sticky-y', text: 'Why does every role feel like a different product?' },
              { cls: 'sticky-b', text: 'How do we cut response time across thousands of stores?' },
              { cls: 'sticky-p', text: 'Can security feel like part of the system, not separate from it?' },
            ].map((s, i) => (
              <motion.div
                key={i}
                className={`sticky ${s.cls}`}
                variants={{ hidden: { opacity: 0, y: 20, rotate: i % 2 === 0 ? -3 : 2 }, visible: { opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 1.5, transition: { duration: 0.65, ease } } }}
                whileHover={{ scale: 1.04, rotate: 0, transition: { duration: 0.22 } }}
              >
                {s.text}
              </motion.div>
            ))}
          </motion.div>

          <StaggerGrid className="goals-list">
            {[
              { icon:'🎯', t:'Unify the visual language across all six experiences', d:'One shared component library: the same card patterns, status pills, and KPI tiles regardless of which persona is looking at them.' },
              { icon:'🎯', t:'Build a severity system that\'s instantly legible', d:'Color, iconography, and hierarchy working together — so a Critical alert reads as critical whether you\'re a store manager or a VP.' },
              { icon:'🎯', t:'Make security and admin tools feel native to the platform', d:'Password Management and the IT Policy Engine should look and feel like part of the same product family, not an afterthought.' },
            ].map((g, i) => (
              <motion.div key={i} className="goal-item" variants={cardItem} whileHover={{ x: 4, transition: { duration: 0.2 } }}>
                <span className="goal-icon">{g.icon}</span>
                <div><h4>{g.t}</h4><p>{g.d}</p></div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </div></section>

      {/* ── DECISIONS — header stagger, cards stagger grid ── */}
      <section id="decisions"><div className="wrap">
        <SectionHeader>
          <SectionHeaderItem><div className="eyebrow"><span>◆</span> Key Decisions</div></SectionHeaderItem>
          <SectionHeaderItem><h2 className="section-heading">four calls that shaped the system</h2></SectionHeaderItem>
        </SectionHeader>

        <StaggerGrid className="decisions-grid">
          {[
            { n:'01', t:'One design system, six personas', b:'Rather than designing each experience independently, we built a shared component library first. The same card tiles, KPI blocks, and navigation sidebar became the common foundation — then role-specific information architecture was layered on top.' },
            { n:'02', t:'Severity should drive color, not decoration', b:'We created a strict semantic color system: red for Critical, orange for High, green for Good/Excellent — applied consistently across every dashboard, table, and status pill.' },
            { n:'03', t:'Corporate needs synthesis, not more data', b:'The Corporate Manager view could easily become a data graveyard. We built a Corporate Action Center that surfaces a prioritized action queue — the highest-impact issues requiring a decision right now.' },
            { n:'04', t:'Security should feel like part of the product', b:'The Password Management portal and IT Admin Policy Engine share the exact same sidebar nav, card patterns, and status system as the operational dashboards.' },
          ].map((d, i) => (
            <CardItem key={i} className="decision-card">
              <span className="decision-pin">📌</span>
              <div className="decision-num">{d.n}</div>
              <div className="decision-title">{d.t}</div>
              <div className="decision-body">{d.b}</div>
            </CardItem>
          ))}
        </StaggerGrid>
      </div></section>

      {/* ── FLOW — screenshots fan in left-to-right with stagger ── */}
      <section id="flow"><div className="wrap">
        <SectionHeader>
          <SectionHeaderItem><div className="eyebrow"><span>◆</span> The System</div></SectionHeaderItem>
          <SectionHeaderItem><h2 className="section-heading">six personas, one shared language</h2></SectionHeaderItem>
        </SectionHeader>

        <FlowGrid className="flow-grid">
          {[
            { persona:'Store Manager',     url:'Store Manager',          src:'/assets/images/01-store-manager-dashboard.png',         desc:'Regional dashboard — appliance health, restock recommendations, daily performance, IoT alerts at a glance.' },
            { persona:'Area Manager',      url:'Area Manager',           src:'/assets/images/02-area-manager-stores.png',              desc:'Store grid — per-location revenue, staffing, restock %, weekly trend across 24 active locations.' },
            { persona:'Corporate Manager', url:'Corporate VP',           src:'/assets/images/03-corporate-operations-dashboard.png',   desc:'Enterprise synthesis — $56.2M total sales, 8 stores at risk, 42 IoT alerts, prioritized action queue.' },
            { persona:'Distributor',       url:'Distributor Manager',    src:'/assets/images/04-distributor-dashboard.png',            desc:'Order queue and active delivery tracking — 15 active deliveries, 94.2% on-time rate, per-store route management.' },
            { persona:'Password Reset',    url:'Self-Service Reset',     src:'/assets/images/05-password-management.png',              desc:'Two-step credential recovery — identity verification, MFA status, expired credential management.' },
            { persona:'IT Admin',          url:'IT Admin — PasswordPilot',src:'/assets/images/06-it-admin-policy-engine.png',          desc:'Policy Engine — 22 active rules, PCI-DSS & SOX compliance controls, IF/THEN condition logic, user directory.' },
          ].map((f, i) => (
            <FlowItem key={i} className="flow-item">
              <div className="browser-wrap">
                <div className="browser-bar"><div className="browser-dot r"/><div className="browser-dot y"/><div className="browser-dot g"/><div className="browser-bar-url">{f.url}</div></div>
                <img className="browser-screen" src={f.src} alt={f.persona} loading="lazy" />
              </div>
              <div className="flow-caption">
                <div className="flow-persona">{f.persona}</div>
                <div className="flow-desc">{f.desc}</div>
              </div>
            </FlowItem>
          ))}
        </FlowGrid>
      </div></section>

      {/* ── SPOTLIGHT — alternating slide-in from left / right ── */}
      <section id="spotlight"><div className="wrap">

        <div className="spotlight-block">
          <motion.div
            className="browser-wrap"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={slideLeft}
            whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
          >
            <div className="browser-bar"><div className="browser-dot r"/><div className="browser-dot y"/><div className="browser-dot g"/><div className="browser-bar-url">7elevencorporate.figma.site</div></div>
            <img className="browser-screen" src="/assets/images/03-corporate-operations-dashboard.png" alt="Corporate" loading="lazy" />
          </motion.div>
          <motion.div
            className="spotlight-text"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={slideRight}
          >
            <div className="eyebrow"><span>◆</span> Multi-Persona System</div>
            <h3>one system, six different jobs</h3>
            <p>The Corporate Manager dashboard aggregates signals from every layer of the operation — store-level IoT alerts, supply chain gaps, sales vs. target variance — into a single synthesized view.</p>
            <p>Rather than building a custom data model for each persona, we asked: <strong>what does this role need to decide right now?</strong> That question shaped the information hierarchy, and the shared design system made each answer feel native to the same product.</p>
          </motion.div>
        </div>

        <div className="spotlight-block reverse">
          <motion.div
            className="browser-wrap"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={slideRight}
            whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
          >
            <div className="browser-bar"><div className="browser-dot r"/><div className="browser-dot y"/><div className="browser-dot g"/><div className="browser-bar-url">7elevenitadmin.figma.site — Policy Engine</div></div>
            <img className="browser-screen" src="/assets/images/06-it-admin-policy-engine.png" alt="IT Admin" loading="lazy" />
          </motion.div>
          <motion.div
            className="spotlight-text"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={slideLeft}
          >
            <div className="eyebrow"><span>◆</span> Security UX</div>
            <h3>security that doesn&apos;t feel like security</h3>
            <p>The IT Admin panel had to enforce strict compliance — PCI-DSS, SOX, MFA mandates — without feeling like a bolted-on enterprise tool.</p>
            <div className="code-callout">
              <span className="kw">IF</span> daysSinceLastChange <span className="kw">&lt;</span> <span className="val">7</span> <span className="kw">THEN</span> BLOCK<br/>
              <span className="kw">IF</span> role <span className="kw">==</span> <span className="val">&quot;executive&quot;</span> <span className="kw">THEN</span> REQUIRE_MFA<br/>
              <span className="kw">IF</span> failedAttempts <span className="kw">&gt;</span> <span className="val">3</span> <span className="kw">THEN</span> LOCK + NOTIFY<br/>
              <span className="cmt">// PCI-DSS Compliance · Critical priority</span>
            </div>
          </motion.div>
        </div>

      </div></section>

      {/* ── BEFORE / AFTER — stagger with scale ── */}
      <section id="beforeafter"><div className="wrap">
        <SectionHeader>
          <SectionHeaderItem><div className="eyebrow"><span>◆</span> Impact</div></SectionHeaderItem>
          <SectionHeaderItem><h2 className="section-heading">from five disconnected tools to one system</h2></SectionHeaderItem>
        </SectionHeader>

        <StaggerGrid className="ba-grid">
          <CardItem className="ba-card ba-before">
            <div className="ba-label"><span className="ba-badge">✕</span> Before</div>
            <div className="ba-title">Five products, no shared language</div>
            <ul className="ba-list">
              <li>Each persona used a separate tool with its own patterns</li>
              <li>Severity levels were inconsistent across tools</li>
              <li>Security and admin portals had a completely different look</li>
              <li>No shared component library — every change required five updates</li>
              <li>Context-switching between tools added friction everywhere</li>
            </ul>
          </CardItem>
          <CardItem className="ba-card ba-after">
            <div className="ba-label"><span className="ba-badge">✓</span> After</div>
            <div className="ba-title" style={{ color:'#fff' }}>One platform, six experiences</div>
            <ul className="ba-list">
              <li>Shared component library across all six portals</li>
              <li>Semantic severity system: red/orange/green reads instantly</li>
              <li>IT Admin and Password Reset match operational dashboards</li>
              <li>Single design token set — update once, applies everywhere</li>
              <li>Role-specific IA layered on top of a shared foundation</li>
            </ul>
            <div className="ba-screenshot">
              <img src="/assets/images/03-corporate-operations-dashboard.png" alt="Unified system" loading="lazy" />
            </div>
          </CardItem>
        </StaggerGrid>
      </div></section>

      {/* ── OUTCOMES — header, then cards stagger with counter numbers ── */}
      <section id="outcomes"><div className="wrap">
        <SectionHeader>
          <SectionHeaderItem><div className="eyebrow"><span>◆</span> Outcomes</div></SectionHeaderItem>
          <SectionHeaderItem><h2 className="section-heading">early signals from the platform</h2></SectionHeaderItem>
        </SectionHeader>

        <StaggerGrid className="outcomes-grid">
          {[
            { metric:'↓ 38%', label:'Estimated time-to-resolution on critical alerts',       note:'Projected · Based on task analysis' },
            { metric:'↑ 2.4×', label:'Manager daily session engagement vs. prior tooling',   note:'Estimated · Usability testing baseline' },
            { metric:'6 / 6',  label:'Personas launching from one shared design system',     note:'Delivered · Production' },
          ].map((o, i) => (
            <motion.div
              key={i}
              className="outcome-card"
              variants={cardItem}
              whileHover={{ y: -5, boxShadow: '0 20px 48px rgba(0,0,0,0.12)', transition: { duration: 0.25 } }}
            >
              <div className="outcome-metric">{o.metric}</div>
              <div className="outcome-label">{o.label}</div>
              <div className="outcome-note">{o.note}</div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div></section>

      {/* ── REFLECTIONS — fade in with slight scale ── */}
      <section id="reflections"><div className="wrap">
        <div className="eyebrow" style={{ justifyContent:'center' }}><span>◆</span> Reflections</div>
        <div className="reflections-inner">
          <motion.div
            className="paper-card"
            initial={{ opacity: 0, y: 28, rotate: 0.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease }}
            whileHover={{ rotate: 0, scale: 1.01, transition: { duration: 0.25 } }}
          >
            <span className="paper-clip">📎</span>
            <h3>What I learned building this</h3>
            <ul className="reflection-list">
              <li>The hardest part wasn&apos;t any single screen — it was making six genuinely different jobs feel like one product.</li>
              <li>Severity and status need one shared visual vocabulary, or trust breaks down fast. When &ldquo;red&rdquo; means different things in different portals, users stop trusting the system.</li>
              <li>Treating security and admin tools with the same design rigor as the &ldquo;real&rdquo; product builds confidence across the entire platform.</li>
              <li>A design system only proves itself once it&apos;s stress-tested across genuinely different user needs.</li>
            </ul>
          </motion.div>
        </div>
      </div></section>

      {/* ── FOOTER ── */}
      <footer id="cs-footer">
        <FadeUp>
          <h3>Want to work together?</h3>
          <p>I&apos;m currently available for new opportunities.</p>
          <div className="footer-btns">
            <a href="mailto:achyutkhanpara7@gmail.com" className="fbtn fbtn-green">Get in Touch</a>
            <Link href="/" className="fbtn fbtn-ghost">← Back to Work</Link>
          </div>
        </FadeUp>
      </footer>
    </>
  )
}
