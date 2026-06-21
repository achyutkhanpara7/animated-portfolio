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

      <section id="header">
        <Reveal className="tag-pills"><span className="tag-pill">Enterprise UX</span><span className="tag-pill">Design Systems</span><span className="tag-pill">Multi-Persona</span><span className="tag-pill">Web &amp; Responsive</span></Reveal>
        <Reveal delay={0.1}><h1 className="page-h1">One design system,<br/>six different jobs.</h1></Reveal>
        <Reveal delay={0.2}><p className="page-sub">Designing a unified AI operations platform for 7-Eleven — serving Store Managers, Area Managers, Corporate leadership, Distributors, and IT Admins from one consistent design system.</p></Reveal>
        <Reveal delay={0.3}><div className="meta-row">
          <div className="meta-cell"><div className="meta-label">Role</div><div className="meta-value">Product Designer</div></div>
          <div className="meta-cell"><div className="meta-label">Platform</div><div className="meta-value">Web (Responsive)</div></div>
          <div className="meta-cell"><div className="meta-label">Status</div><div className="meta-value live"><span className="live-dot"></span> Live</div></div>
          <div className="meta-cell"><div className="meta-label">Year</div><div className="meta-value">2025</div></div>
        </div></Reveal>
      </section>

      <div id="hero-banner" className="reveal visible">
        <div className="hero-banner-inner">
          {[{url:'7elevenstoremanager.figma.site',src:'/assets/images/01-store-manager-dashboard.png',alt:'Store Manager'},{url:'7elevencorporate.figma.site',src:'/assets/images/03-corporate-operations-dashboard.png',alt:'Corporate'},{url:'7elevenareamanager.figma.site',src:'/assets/images/02-area-manager-stores.png',alt:'Area Manager'}].map((s,i) => (
            <div key={i} className="hero-screen">
              <div className="browser-wrap">
                <div className="browser-bar"><div className="browser-dot r"/><div className="browser-dot y"/><div className="browser-dot g"/><div className="browser-bar-url">{s.url}</div></div>
                <img className="browser-screen" src={s.src} alt={s.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <section id="context"><div className="wrap">
        <Reveal className="context-text"><div className="eyebrow"><span>◆</span> Context</div><h2>six roles, one operational backbone</h2><p>7-Eleven&apos;s operations span thousands of store locations, each generating data that multiple roles depend on — but historically, each role used disconnected tools with no shared visual language or interaction model.</p><p>Every operational signal — sales, inventory, appliance health, tickets — flows up through the same underlying system. This made the <strong>design system itself</strong> the highest-leverage surface, where consistency compounds across <strong>six distinct experiences</strong>.</p><p>The business wanted faster issue resolution and clearer accountability, while frontline managers reported alert fatigue and tool-switching fatigue.</p></Reveal>
        <div className="stat-strip">
          {[{n:'6',l:'Connected personas'},{n:'24+',l:'Store locations represented'},{n:'94.2%',l:'On-time delivery rate'},{n:'22',l:'Active security policies'}].map((s,i) => (
            <Reveal key={i} delay={i*0.1} className="stat-cell"><div className="stat-num">{s.n}</div><div className="stat-label">{s.l}</div></Reveal>
          ))}
        </div>
      </div></section>

      <section id="problem"><div className="wrap">
        <Reveal><div className="eyebrow"><span>◆</span> The Problem</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-heading">the cost of disconnected tools</h2></Reveal>
        <div className="problem-layout">
          <div className="problem-col">
            <Reveal className="problem-card"><h4>Five products, one team</h4><p>Each role had a separate tool with its own visual language, forcing context-switching even when looking at the same store data.</p></Reveal>
            <Reveal delay={0.1} className="problem-card"><h4>Inconsistent severity signals</h4><p>A critical alert in one tool looked identical to a low-priority note in another — making it impossible to triage at a glance.</p></Reveal>
          </div>
          <Reveal delay={0.2} className="problem-center">
            <div className="browser-wrap"><div className="browser-bar"><div className="browser-dot r"/><div className="browser-dot y"/><div className="browser-dot g"/><div className="browser-bar-url">7elevenitadmin.figma.site</div></div><img className="browser-screen" src="/assets/images/06-it-admin-policy-engine.png" alt="IT Admin" loading="lazy" /></div>
          </Reveal>
          <div className="problem-col">
            <Reveal className="problem-card"><h4>No shared component logic</h4><p>Cards, tables, and status pills were rebuilt differently in each experience, multiplying design and engineering effort.</p></Reveal>
            <Reveal delay={0.1} className="problem-card"><h4>Security felt bolted on</h4><p>Password reset and IT admin tools looked nothing like the operational dashboards, breaking trust in the entire system.</p></Reveal>
          </div>
        </div>
      </div></section>

      <section id="quotes"><div className="wrap">
        <Reveal><div className="eyebrow"><span>◆</span> Research</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-heading">in their own words...</h2></Reveal>
        <Reveal delay={0.2}><p className="section-sub">We ran discovery sessions across all six role types — shadow sessions with store managers, executive briefings with VPs, and deep-dives with IT admins.</p></Reveal>
      </div>
      <div className="quotes-scroll-outer">
        <div className="quotes-track">
          {[{q:"I check four different screens before I even know if today is going to be a good day.",r:'Store Manager'},{q:"I want to see all my stores at a glance. Right now I have to click into each one just to know if anything needs attention.",r:'Area Manager'},{q:"By the time I see a problem in my report, it's already cost us money. I need a way to catch risks before they become losses.",r:'Corporate VP of Operations'},{q:"Every reset request looks the same to me until I open it. I have no idea if it's urgent or routine until I'm already inside the ticket.",r:'IT Admin'},{q:"Delivery tracking is scattered across emails, a spreadsheet, and the old portal. I need one place to see what's moving and what's stuck.",r:'Distributor Manager'}].map((qt,i) => (
            <div key={i} className="quote-card"><span className="quote-mark">&ldquo;</span><p className="quote-text">{qt.q}</p><span className="quote-role">{qt.r}</span></div>
          ))}
        </div>
      </div>
      <p className="quotes-disclaimer">Adapted from stakeholder interviews across store, regional, and corporate roles.</p>
      </section>

      <section id="goals"><div className="wrap">
        <Reveal><div className="eyebrow"><span>◆</span> Design Goals</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-heading">what we set out to solve</h2></Reveal>
        <div className="goals-grid">
          <div className="sticky-notes">
            <Reveal className="sticky sticky-y">Why does every role feel like a different product?</Reveal>
            <Reveal delay={0.1} className="sticky sticky-b">How do we cut response time across thousands of stores?</Reveal>
            <Reveal delay={0.2} className="sticky sticky-p">Can security feel like part of the system, not separate from it?</Reveal>
          </div>
          <div className="goals-list">
            {[{icon:'🎯',t:'Unify the visual language across all six experiences',d:'One shared component library: the same card patterns, status pills, and KPI tiles regardless of which persona is looking at them.'},{icon:'🎯',t:'Build a severity system that\'s instantly legible',d:'Color, iconography, and hierarchy working together — so a Critical alert reads as critical whether you\'re a store manager or a VP.'},{icon:'🎯',t:'Make security and admin tools feel native to the platform',d:'Password Management and the IT Policy Engine should look and feel like part of the same product family, not an afterthought.'}].map((g,i) => (
              <Reveal key={i} delay={i*0.1} className="goal-item"><span className="goal-icon">{g.icon}</span><div><h4>{g.t}</h4><p>{g.d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </div></section>

      <section id="decisions"><div className="wrap">
        <Reveal><div className="eyebrow"><span>◆</span> Key Decisions</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-heading">four calls that shaped the system</h2></Reveal>
        <div className="decisions-grid">
          {[{n:'01',t:'One design system, six personas',b:'Rather than designing each experience independently, we built a shared component library first. The same card tiles, KPI blocks, and navigation sidebar became the common foundation — then role-specific information architecture was layered on top.'},{n:'02',t:'Severity should drive color, not decoration',b:'We created a strict semantic color system: red for Critical, orange for High, green for Good/Excellent — applied consistently across every dashboard, table, and status pill.'},{n:'03',t:'Corporate needs synthesis, not more data',b:'The Corporate Manager view could easily become a data graveyard. We built a Corporate Action Center that surfaces a prioritized action queue — the highest-impact issues requiring a decision right now.'},{n:'04',t:'Security should feel like part of the product',b:'The Password Management portal and IT Admin Policy Engine share the exact same sidebar nav, card patterns, and status system as the operational dashboards.'}].map((d,i) => (
            <Reveal key={i} delay={i*0.1} className="decision-card"><span className="decision-pin">📌</span><div className="decision-num">{d.n}</div><div className="decision-title">{d.t}</div><div className="decision-body">{d.b}</div></Reveal>
          ))}
        </div>
      </div></section>

      <section id="flow"><div className="wrap">
        <Reveal><div className="eyebrow"><span>◆</span> The System</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-heading">six personas, one shared language</h2></Reveal>
        <div className="flow-grid">
          {[{persona:'Store Manager',url:'Store Manager',src:'/assets/images/01-store-manager-dashboard.png',desc:'Regional dashboard — appliance health, restock recommendations, daily performance, IoT alerts at a glance.'},{persona:'Area Manager',url:'Area Manager',src:'/assets/images/02-area-manager-stores.png',desc:'Store grid — per-location revenue, staffing, restock %, weekly trend across 24 active locations.'},{persona:'Corporate Manager',url:'Corporate VP of Operations',src:'/assets/images/03-corporate-operations-dashboard.png',desc:'Enterprise synthesis — $56.2M total sales, 8 stores at risk, 42 IoT alerts, prioritized action queue.'},{persona:'Distributor Manager',url:'Distributor Manager',src:'/assets/images/04-distributor-dashboard.png',desc:'Order queue and active delivery tracking — 15 active deliveries, 94.2% on-time rate, per-store route management.'},{persona:'Password Reset',url:'Self-Service Reset',src:'/assets/images/05-password-management.png',desc:'Two-step credential recovery — identity verification, MFA status, expired credential management.'},{persona:'IT Admin',url:'IT Admin — PasswordPilot',src:'/assets/images/06-it-admin-policy-engine.png',desc:'Policy Engine — 22 active rules, PCI-DSS & SOX compliance controls, IF/THEN condition logic, user directory.'}].map((f,i) => (
            <Reveal key={i} delay={(i%3)*0.1} className="flow-item">
              <div className="browser-wrap"><div className="browser-bar"><div className="browser-dot r"/><div className="browser-dot y"/><div className="browser-dot g"/><div className="browser-bar-url">{f.url}</div></div><img className="browser-screen" src={f.src} alt={f.persona} loading="lazy" /></div>
              <div className="flow-caption"><div className="flow-persona">{f.persona}</div><div className="flow-desc">{f.desc}</div></div>
            </Reveal>
          ))}
        </div>
      </div></section>

      <section id="spotlight"><div className="wrap">
        <div className="spotlight-block">
          <Reveal className="browser-wrap"><div className="browser-bar"><div className="browser-dot r"/><div className="browser-dot y"/><div className="browser-dot g"/><div className="browser-bar-url">7elevencorporate.figma.site</div></div><img className="browser-screen" src="/assets/images/03-corporate-operations-dashboard.png" alt="Corporate" loading="lazy" /></Reveal>
          <Reveal delay={0.2} className="spotlight-text"><div className="eyebrow"><span>◆</span> Multi-Persona System</div><h3>one system, six different jobs</h3><p>The Corporate Manager dashboard aggregates signals from every layer of the operation — store-level IoT alerts, supply chain gaps, sales vs. target variance — into a single synthesized view.</p><p>Rather than building a custom data model for each persona, we asked: <strong>what does this role need to decide right now?</strong> That question shaped the information hierarchy, and the shared design system made each answer feel native to the same product.</p></Reveal>
        </div>
        <div className="spotlight-block reverse">
          <Reveal className="browser-wrap"><div className="browser-bar"><div className="browser-dot r"/><div className="browser-dot y"/><div className="browser-dot g"/><div className="browser-bar-url">7elevenitadmin.figma.site — Policy Engine</div></div><img className="browser-screen" src="/assets/images/06-it-admin-policy-engine.png" alt="IT Admin" loading="lazy" /></Reveal>
          <Reveal delay={0.2} className="spotlight-text"><div className="eyebrow"><span>◆</span> Security UX</div><h3>security that doesn&apos;t feel like security</h3><p>The IT Admin panel had to enforce strict compliance — PCI-DSS, SOX, MFA mandates — without feeling like a bolted-on enterprise tool.</p><div className="code-callout"><span className="kw">IF</span> daysSinceLastChange <span className="kw">&lt;</span> <span className="val">7</span> <span className="kw">THEN</span> BLOCK<br/><span className="kw">IF</span> role <span className="kw">==</span> <span className="val">&quot;executive&quot;</span> <span className="kw">THEN</span> REQUIRE_MFA<br/><span className="kw">IF</span> failedAttempts <span className="kw">&gt;</span> <span className="val">3</span> <span className="kw">THEN</span> LOCK + NOTIFY<br/><span className="cmt">// PCI-DSS Compliance · Critical priority</span></div></Reveal>
        </div>
      </div></section>

      <section id="beforeafter"><div className="wrap">
        <Reveal><div className="eyebrow"><span>◆</span> Impact</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-heading">from five disconnected tools to one system</h2></Reveal>
        <div className="ba-grid">
          <Reveal className="ba-card ba-before"><div className="ba-label"><span className="ba-badge">✕</span> Before</div><div className="ba-title">Five products, no shared language</div><ul className="ba-list"><li>Each persona used a separate tool with its own patterns</li><li>Severity levels were inconsistent across tools</li><li>Security and admin portals had a completely different look</li><li>No shared component library — every change required five updates</li><li>Context-switching between tools added friction everywhere</li></ul></Reveal>
          <Reveal delay={0.2} className="ba-card ba-after"><div className="ba-label"><span className="ba-badge">✓</span> After</div><div className="ba-title" style={{color:'#fff'}}>One platform, six experiences</div><ul className="ba-list"><li>Shared component library across all six portals</li><li>Semantic severity system: red/orange/green reads instantly</li><li>IT Admin and Password Reset match operational dashboards</li><li>Single design token set — update once, applies everywhere</li><li>Role-specific IA layered on top of a shared foundation</li></ul><div className="ba-screenshot"><img src="/assets/images/03-corporate-operations-dashboard.png" alt="Unified system" loading="lazy" /></div></Reveal>
        </div>
      </div></section>

      <section id="outcomes"><div className="wrap">
        <Reveal><div className="eyebrow"><span>◆</span> Outcomes</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-heading">early signals from the platform</h2></Reveal>
        <div className="outcomes-grid">
          {[{m:'↓ 38%',l:'Estimated time-to-resolution on critical alerts',n:'Projected · Based on task analysis'},{m:'↑ 2.4×',l:'Manager daily session engagement vs. prior tooling',n:'Estimated · Usability testing baseline'},{m:'6 / 6',l:'Personas launching from one shared design system',n:'Delivered · Production'}].map((o,i) => (
            <Reveal key={i} delay={i*0.1} className="outcome-card"><div className="outcome-metric">{o.m}</div><div className="outcome-label">{o.l}</div><div className="outcome-note">{o.n}</div></Reveal>
          ))}
        </div>
      </div></section>

      <section id="reflections"><div className="wrap"><div className="eyebrow" style={{justifyContent:'center'}}><span>◆</span> Reflections</div>
        <div className="reflections-inner"><Reveal delay={0.1} className="paper-card">
          <span className="paper-clip">📎</span>
          <h3>What I learned building this</h3>
          <ul className="reflection-list">
            <li>The hardest part wasn&apos;t any single screen — it was making six genuinely different jobs feel like one product.</li>
            <li>Severity and status need one shared visual vocabulary, or trust breaks down fast. When &ldquo;red&rdquo; means different things in different portals, users stop trusting the system.</li>
            <li>Treating security and admin tools with the same design rigor as the &ldquo;real&rdquo; product builds confidence across the entire platform.</li>
            <li>A design system only proves itself once it&apos;s stress-tested across genuinely different user needs.</li>
          </ul>
        </Reveal></div>
      </div></section>

      <footer id="cs-footer">
        <h3>Want to work together?</h3>
        <p>I&apos;m currently available for new opportunities.</p>
        <div className="footer-btns">
          <a href="mailto:achyutkhanpara7@gmail.com" className="fbtn fbtn-green">Get in Touch</a>
          <Link href="/" className="fbtn fbtn-ghost">← Back to Work</Link>
        </div>
      </footer>
    </>
  )
}
