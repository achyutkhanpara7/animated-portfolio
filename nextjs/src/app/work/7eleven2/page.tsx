'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay }} className={className}>
      {children}
    </motion.div>
  )
}

export default function SevenElevenV2Page() {
  useEffect(() => {
    const handleScroll = () => document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="se2-page">
      {/* ─── NAV ─── */}
      <nav id="nav" style={{ opacity: 1 }}>
        <Link href="/" className="nav-back">← Back</Link>
        <div className="nav-avatar"><img src="/assets/images/profile.png" alt="Achyut" /></div>
        <span className="nav-name">ACHYUT</span>
        <Link href="/#work" className="nav-link">Work</Link>
        <Link href="/about" className="nav-link">About</Link>
        <a href="#" className="nav-link cta">Resume</a>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="se2-header">
        <Reveal className="se2-tag-pills">
          <span className="se2-tag-pill">AI Operations</span>
          <span className="se2-tag-pill">Enterprise SaaS</span>
          <span className="se2-tag-pill">Multi-Persona</span>
          <span className="se2-tag-pill">IoT Monitoring</span>
          <span className="se2-tag-pill">Design Systems</span>
        </Reveal>
        <Reveal delay={0.1}><h1 className="se2-h1">Designing an AI-Powered<br/>Operations Intelligence<br/>Platform for 7-Eleven</h1></Reveal>
        <Reveal delay={0.2}><p className="se2-sub">Transforming fragmented store operations, inventory management, IoT monitoring, and supply chain workflows into a unified intelligence platform for frontline teams and enterprise leaders.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="se2-meta-row">
            <div className="se2-meta-cell"><div className="se2-meta-label">Role</div><div className="se2-meta-value">Product Designer</div></div>
            <div className="se2-meta-cell"><div className="se2-meta-label">Timeline</div><div className="se2-meta-value">3 Months</div></div>
            <div className="se2-meta-cell"><div className="se2-meta-label">Team</div><div className="se2-meta-value">Product, Engineering, Stakeholders</div></div>
            <div className="se2-meta-cell"><div className="se2-meta-label">Platform</div><div className="se2-meta-value">Enterprise SaaS</div></div>
            <div className="se2-meta-cell"><div className="se2-meta-label">Focus</div><div className="se2-meta-value">AI · Operations · IoT · Supply Chain</div></div>
            <div className="se2-meta-cell"><div className="se2-meta-label">Tools</div><div className="se2-meta-value">Figma · FigJam · AI-Assisted Design</div></div>
          </div>
        </Reveal>
      </section>

      {/* ─── HERO BANNER (copied animation from existing 7-Eleven case study) ─── */}
      <div id="hero-banner" className="reveal visible se2-banner-override">
        <div className="hero-banner-inner">
          {[
            { url: '7elevenstoremanager.figma.site', src: '/assets/images/01-store-manager-dashboard.png', alt: 'Store Manager Dashboard' },
            { url: '7elevencorporate.figma.site', src: '/assets/images/03-corporate-operations-dashboard.png', alt: 'Corporate Operations Dashboard' },
            { url: '7elevenareamanager.figma.site', src: '/assets/images/02-area-manager-stores.png', alt: 'Area Manager Dashboard' },
          ].map((s, i) => (
            <div key={i} className="hero-screen">
              <div className="browser-wrap">
                <div className="browser-bar">
                  <div className="browser-dot r" /><div className="browser-dot y" /><div className="browser-dot g" />
                  <div className="browser-bar-url">{s.url}</div>
                </div>
                <img className="browser-screen" src={s.src} alt={s.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PROJECT OVERVIEW ─── */}
      <section className="se2-section se2-overview">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow"><span className="se2-diamond">◆</span> Project Overview</div></Reveal>
          <div className="se2-overview-grid">
            <div className="se2-overview-text">
              <Reveal delay={0.1}><h2 className="se2-h2">What is this product?</h2></Reveal>
              <Reveal delay={0.15}><p className="se2-body">7-Eleven operates thousands of stores that generate large volumes of operational, inventory, sales, and IoT data every day. Critical information lived across multiple disconnected systems, making it difficult for teams to quickly identify issues, monitor performance, and make informed decisions.</p></Reveal>
              <Reveal delay={0.2}><p className="se2-body">The goal was to design a centralized <strong>AI-powered platform</strong> that could serve multiple operational roles while providing real-time visibility and actionable insights.</p></Reveal>
              <Reveal delay={0.25}><div className="se2-responsibilities">
                <div className="se2-resp-label">My Responsibilities</div>
                <div className="se2-resp-grid">
                  {['Product Strategy', 'UX Design', 'Information Architecture', 'Dashboard Design', 'Design System Application', 'AI Experience Design'].map((r, i) => (
                    <span key={i} className="se2-resp-tag">{r}</span>
                  ))}
                </div>
              </div></Reveal>
            </div>
            <div className="se2-highlight-cards">
              {[
                { icon: '📈', label: 'Multi-Persona Platform', sub: '4 distinct user roles served' },
                { icon: '🏪', label: 'Store Operations', sub: 'Thousands of locations' },
                { icon: '📡', label: 'IoT Monitoring', sub: 'Real-time device health' },
                { icon: '🤖', label: 'AI-Powered Insights', sub: 'Intelligent recommendations' },
              ].map((h, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08} className="se2-highlight-card">
                  <div className="se2-hl-icon">{h.icon}</div>
                  <div className="se2-hl-label">{h.label}</div>
                  <div className="se2-hl-sub">{h.sub}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE CHALLENGE ─── */}
      <section className="se2-section se2-challenge">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow"><span className="se2-diamond">◆</span> The Challenge</div></Reveal>
          <Reveal delay={0.1}><h2 className="se2-h2">Disconnected systems, reactive decisions</h2></Reveal>
          <div className="se2-challenge-grid">
            <div>
              <Reveal delay={0.15}><h3 className="se2-h3">Business Challenges</h3></Reveal>
              {['Operational data scattered across systems', 'Limited visibility into store performance', 'Delayed identification of operational issues', 'Reactive rather than proactive decision making', 'Complex reporting workflows'].map((c, i) => (
                <Reveal key={i} delay={0.2 + i * 0.05} className="se2-challenge-item">
                  <span className="se2-challenge-x">❌</span> {c}
                </Reveal>
              ))}
            </div>
            <div>
              <Reveal delay={0.15}><h3 className="se2-h3">User Challenges</h3></Reveal>
              <Reveal delay={0.2}><p className="se2-body" style={{ marginBottom: 24 }}>Different teams required different information but relied on fragmented tools and manual reporting.</p></Reveal>
              {[
                { role: 'Store Managers', need: 'needed store-level insights' },
                { role: 'Area Managers', need: 'needed regional visibility' },
                { role: 'Distributor Managers', need: 'needed supply chain intelligence' },
                { role: 'Corporate Leaders', need: 'needed enterprise-wide performance' },
              ].map((u, i) => (
                <Reveal key={i} delay={0.25 + i * 0.05} className="se2-user-need">
                  <span className="se2-role-badge">{u.role}</span>
                  <span className="se2-need-text">{u.need}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── UNDERSTANDING USERS ─── */}
      <section className="se2-section se2-users">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow"><span className="se2-diamond">◆</span> Understanding Users</div></Reveal>
          <Reveal delay={0.1}><h2 className="se2-h2">Discovery process</h2></Reveal>
          <div className="se2-discovery-flow">
            {['Stakeholder Workshops', 'Business Requirement Analysis', 'Operational Workflow Mapping', 'Persona Definition', 'Experience Strategy'].map((step, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08} className="se2-flow-step">
                <div className="se2-flow-step-inner">
                  <div className="se2-flow-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="se2-flow-label">{step}</div>
                </div>
                {i < 4 && <div className="se2-flow-arrow">→</div>}
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.6}><h3 className="se2-h3" style={{ marginTop: 64, marginBottom: 28 }}>Key Findings</h3></Reveal>
          <div className="se2-findings-grid">
            {[
              { n: '01', title: 'Information fragmentation', body: 'Managers spend significant time gathering information from multiple systems before they can take any action.' },
              { n: '02', title: 'Late issue detection', body: 'Operational issues are often discovered too late — after they have already impacted store performance or customer experience.' },
              { n: '03', title: 'Role-based visibility gaps', body: 'Different user groups require fundamentally different levels of visibility and detail from the same underlying data.' },
              { n: '04', title: 'Data without direction', body: 'Users need actionable recommendations instead of raw data — they have too much information and not enough insight.' },
            ].map((f, i) => (
              <Reveal key={i} delay={0.65 + i * 0.08} className="se2-finding-card">
                <div className="se2-finding-num">Finding {f.n}</div>
                <div className="se2-finding-title">{f.title}</div>
                <div className="se2-finding-body">{f.body}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USER PERSONAS ─── */}
      <section className="se2-section se2-personas">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow"><span className="se2-diamond">◆</span> User Personas</div></Reveal>
          <Reveal delay={0.1}><h2 className="se2-h2">One platform, four different jobs</h2></Reveal>
          <div className="se2-personas-grid">
            {[
              {
                role: 'Store Manager',
                icon: '🏪',
                color: '#E8F5E9',
                accent: '#2E7D32',
                goals: ['Monitor store performance', 'Manage inventory', 'Resolve operational issues quickly'],
                pains: ['Too many systems to check', 'Manual monitoring burden', 'Missed critical alerts'],
              },
              {
                role: 'Area Manager',
                icon: '📊',
                color: '#E3F2FD',
                accent: '#1565C0',
                goals: ['Monitor multiple stores at once', 'Compare regional performance', 'Escalate operational risks'],
                pains: ['Limited cross-store visibility', 'Slow and fragmented reporting'],
              },
              {
                role: 'Distributor Manager',
                icon: '🚚',
                color: '#FFF3E0',
                accent: '#E65100',
                goals: ['Track inventory movement', 'Monitor supply chain health', 'Optimize distribution routes'],
                pains: ['Inventory bottlenecks', 'Delivery delays and missed signals'],
              },
              {
                role: 'Corporate Manager',
                icon: '🏢',
                color: '#F3E5F5',
                accent: '#6A1B9A',
                goals: ['Enterprise-wide visibility', 'Strategic decision making', 'Performance tracking at scale'],
                pains: ['Fragmented reporting', 'Delayed insights that are already stale'],
              },
            ].map((p, i) => (
              <div key={i} style={{ '--persona-bg': p.color, '--persona-accent': p.accent } as React.CSSProperties}>
              <Reveal delay={0.15 + i * 0.1} className="se2-persona-card">
                <div className="se2-persona-icon">{p.icon}</div>
                <div className="se2-persona-role">{p.role}</div>
                <div className="se2-persona-section-label">Goals</div>
                <ul className="se2-persona-list">
                  {p.goals.map((g, j) => <li key={j}>{g}</li>)}
                </ul>
                <div className="se2-persona-section-label">Pain Points</div>
                <ul className="se2-persona-list se2-persona-pains">
                  {p.pains.map((pain, j) => <li key={j}>{pain}</li>)}
                </ul>
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNEY & OPPORTUNITIES ─── */}
      <section className="se2-section se2-journey">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow"><span className="se2-diamond">◆</span> Journey & Opportunities</div></Reveal>
          <Reveal delay={0.1}><h2 className="se2-h2">Current state → future state</h2></Reveal>
          <div className="se2-journey-grid">
            <div>
              <Reveal delay={0.15}><h3 className="se2-h3 se2-pain-head">🔴 Current Pain Points</h3></Reveal>
              {['Data siloed across disconnected systems', 'Slow issue detection and response', 'Multiple tools creating context switching', 'Limited real-time visibility'].map((p, i) => (
                <Reveal key={i} delay={0.2 + i * 0.06} className="se2-journey-item se2-pain">
                  <span className="se2-journey-dot red" />
                  {p}
                </Reveal>
              ))}
            </div>
            <div className="se2-journey-arrow-col">
              <div className="se2-journey-arrow-big">→</div>
            </div>
            <div>
              <Reveal delay={0.15}><h3 className="se2-h3 se2-opp-head">🟢 Opportunities</h3></Reveal>
              {['Unified platform with role-based views', 'AI recommendations surfacing risks proactively', 'Real-time IoT and operational monitoring', 'Automated insights replacing manual reporting'].map((o, i) => (
                <Reveal key={i} delay={0.2 + i * 0.06} className="se2-journey-item se2-opp">
                  <span className="se2-journey-dot green" />
                  {o}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DESIGN STRATEGY ─── */}
      <section className="se2-section se2-strategy">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow"><span className="se2-diamond">◆</span> Design Strategy</div></Reveal>
          <Reveal delay={0.1}><h2 className="se2-h2">Four principles that shaped every decision</h2></Reveal>
          <div className="se2-principles-grid">
            {[
              { n: '01', title: 'Role-Based Experiences', body: 'Show users only what matters most to their job. Each persona sees a tailored view built on a shared design system.' },
              { n: '02', title: 'Actionable Intelligence', body: 'Transform raw data into recommendations. Every insight should drive a clear next action — not just display more information.' },
              { n: '03', title: 'Operational Visibility', body: 'Surface critical information instantly. No digging, no system switching — the most important signals are always front and center.' },
              { n: '04', title: 'Scalable Architecture', body: 'Support thousands of stores and users without complexity compounding. One shared foundation, infinite extensibility.' },
            ].map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.1} className="se2-principle-card">
                <div className="se2-principle-num">{p.n}</div>
                <div className="se2-principle-title">{p.title}</div>
                <div className="se2-principle-body">{p.body}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INFORMATION ARCHITECTURE ─── */}
      <section className="se2-section se2-ia">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow"><span className="se2-diamond">◆</span> Information Architecture</div></Reveal>
          <Reveal delay={0.1}><h2 className="se2-h2">From complex ecosystem to scalable navigation</h2></Reveal>
          <Reveal delay={0.15}><p className="se2-body" style={{ maxWidth: 640, marginBottom: 48 }}>The new structure reduces complexity while creating a scalable foundation for future AI capabilities — every module accessible in two clicks or fewer.</p></Reveal>
          <Reveal delay={0.2}>
            <div className="se2-ia-diagram">
              <div className="se2-ia-root">Platform</div>
              <div className="se2-ia-connector" />
              <div className="se2-ia-modules">
                {['Dashboard', 'Sales', 'Inventory', 'IoT Health', 'Supply Chain', 'Operations', 'Alerts', 'AI Insights', 'Settings'].map((m, i) => (
                  <div key={i} className="se2-ia-module">{m}</div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FINAL SOLUTION ─── */}
      <section className="se2-section se2-solution">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow"><span className="se2-diamond">◆</span> Final Solution</div></Reveal>
          <Reveal delay={0.1}><h2 className="se2-h2">Designing for multiple personas</h2></Reveal>
          <Reveal delay={0.15}><p className="se2-body" style={{ maxWidth: 680, marginBottom: 64 }}>One platform needed to serve four completely different user groups. The solution was role-specific experiences built on a shared design system — every persona gets exactly what they need, nothing more.</p></Reveal>

          {/* Feature 01 */}
          <div className="se2-feature">
            <div className="se2-feature-screens">
              <Reveal>
                <div className="browser-wrap">
                  <div className="browser-bar"><div className="browser-dot r" /><div className="browser-dot y" /><div className="browser-dot g" /><div className="browser-bar-url">7elevenstoremanager.figma.site</div></div>
                  <img className="browser-screen" src="/assets/images/01-store-manager-dashboard.png" alt="Unified Operations Dashboard" loading="lazy" />
                </div>
              </Reveal>
            </div>
            <div className="se2-feature-content">
              <Reveal delay={0.1}><div className="se2-feature-label">Feature 01</div></Reveal>
              <Reveal delay={0.15}><h3 className="se2-h3">Unified Operations Dashboard</h3></Reveal>
              <Reveal delay={0.2}><div className="se2-psi-grid">
                <div className="se2-psi"><div className="se2-psi-label">Problem</div><p className="se2-psi-body">Critical information was spread across multiple systems — no single place to see the full operational picture.</p></div>
                <div className="se2-psi"><div className="se2-psi-label">Solution</div><p className="se2-psi-body">Designed a centralized operational command center that surfaces the most important KPIs, alerts, and AI recommendations.</p></div>
                <div className="se2-psi"><div className="se2-psi-label">Impact</div><p className="se2-psi-body">Faster visibility into business performance — managers start each day with a complete picture in seconds.</p></div>
              </div></Reveal>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="se2-feature se2-feature-reverse">
            <div className="se2-feature-screens">
              <Reveal>
                <div className="browser-wrap">
                  <div className="browser-bar"><div className="browser-dot r" /><div className="browser-dot y" /><div className="browser-dot g" /><div className="browser-bar-url">7elevenareamanager.figma.site</div></div>
                  <img className="browser-screen" src="/assets/images/02-area-manager-stores.png" alt="Multi-Store Performance" loading="lazy" />
                </div>
              </Reveal>
            </div>
            <div className="se2-feature-content">
              <Reveal delay={0.1}><div className="se2-feature-label">Feature 02</div></Reveal>
              <Reveal delay={0.15}><h3 className="se2-h3">Multi-Store Performance Management</h3></Reveal>
              <Reveal delay={0.2}><div className="se2-psi-grid">
                <div className="se2-psi"><div className="se2-psi-label">Problem</div><p className="se2-psi-body">Regional managers lacked a unified view across locations — comparing stores required opening multiple tools.</p></div>
                <div className="se2-psi"><div className="se2-psi-label">Solution</div><p className="se2-psi-body">Built comparative performance dashboards across multiple stores and regions with at-a-glance health indicators.</p></div>
                <div className="se2-psi"><div className="se2-psi-label">Impact</div><p className="se2-psi-body">Faster issue detection and prioritization — area managers can triage across 24+ locations in a single view.</p></div>
              </div></Reveal>
            </div>
          </div>

          {/* Feature 03 */}
          <div className="se2-feature">
            <div className="se2-feature-screens">
              <Reveal>
                <div className="browser-wrap">
                  <div className="browser-bar"><div className="browser-dot r" /><div className="browser-dot y" /><div className="browser-dot g" /><div className="browser-bar-url">7elevencorporate.figma.site</div></div>
                  <img className="browser-screen" src="/assets/images/03-corporate-operations-dashboard.png" alt="AI Insights" loading="lazy" />
                </div>
              </Reveal>
            </div>
            <div className="se2-feature-content">
              <Reveal delay={0.1}><div className="se2-feature-label">Feature 03</div></Reveal>
              <Reveal delay={0.15}><h3 className="se2-h3">AI-Powered Insights</h3></Reveal>
              <Reveal delay={0.2}><div className="se2-psi-grid">
                <div className="se2-psi"><div className="se2-psi-label">Problem</div><p className="se2-psi-body">Users struggled to identify trends hidden within large volumes of operational data — insights were buried.</p></div>
                <div className="se2-psi"><div className="se2-psi-label">Solution</div><p className="se2-psi-body">Designed AI-generated recommendations that proactively surface inventory risks, device failure predictions, and performance anomalies.</p></div>
                <div className="se2-psi"><div className="se2-psi-label">Impact</div><p className="se2-psi-body">More proactive decision making — teams act on risks before they become losses.</p></div>
              </div></Reveal>
            </div>
          </div>

          {/* Feature 04 */}
          <div className="se2-feature se2-feature-reverse">
            <div className="se2-feature-screens">
              <Reveal>
                <div className="browser-wrap">
                  <div className="browser-bar"><div className="browser-dot r" /><div className="browser-dot y" /><div className="browser-dot g" /><div className="browser-bar-url">7elevendistributor.figma.site</div></div>
                  <img className="browser-screen" src="/assets/images/04-distributor-dashboard.png" alt="IoT Health Monitoring" loading="lazy" />
                </div>
              </Reveal>
            </div>
            <div className="se2-feature-content">
              <Reveal delay={0.1}><div className="se2-feature-label">Feature 04</div></Reveal>
              <Reveal delay={0.15}><h3 className="se2-h3">IoT Health Monitoring</h3></Reveal>
              <Reveal delay={0.2}><div className="se2-psi-grid">
                <div className="se2-psi"><div className="se2-psi-label">Problem</div><p className="se2-psi-body">Device failures were often discovered too late — after the failure had already impacted store operations.</p></div>
                <div className="se2-psi"><div className="se2-psi-label">Solution</div><p className="se2-psi-body">Created real-time monitoring dashboards with cluster-level visibility, health indicators, and failure prediction alerts.</p></div>
                <div className="se2-psi"><div className="se2-psi-label">Impact</div><p className="se2-psi-body">Improved operational awareness — teams detect and resolve device issues before they escalate.</p></div>
              </div></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DESIGN SYSTEM ─── */}
      <section className="se2-section se2-ds">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow"><span className="se2-diamond">◆</span> Design System</div></Reveal>
          <Reveal delay={0.1}><h2 className="se2-h2">Creating consistency at scale</h2></Reveal>
          <Reveal delay={0.15}><p className="se2-body" style={{ maxWidth: 640, marginBottom: 48 }}>A shared design system ensured consistency across all user experiences while accelerating design and development — update once, applies everywhere.</p></Reveal>
          <div className="se2-ds-grid">
            {['KPI Cards', 'Tables', 'Alert Banners', 'Charts & Graphs', 'Filter Controls', 'Navigation Patterns', 'Forms & Inputs', 'Status Indicators'].map((c, i) => (
              <Reveal key={i} delay={0.2 + i * 0.05} className="se2-ds-card">
                <div className="se2-ds-icon">◻</div>
                <div className="se2-ds-name">{c}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS & IMPACT ─── */}
      <section className="se2-section se2-impact">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow"><span className="se2-diamond">◆</span> Results & Impact</div></Reveal>
          <Reveal delay={0.1}><h2 className="se2-h2">Early signals from the platform</h2></Reveal>
          <div className="se2-impact-grid">
            {[
              { metric: '↑', value: 'Operational Visibility', body: 'Improved access to critical information across all store locations and operational layers.' },
              { metric: '↑', value: 'Decision Speed', body: 'Faster issue identification — managers no longer need to aggregate data manually before acting.' },
              { metric: '↑', value: 'Platform Scalability', body: 'Established a shared design foundation ready to scale across thousands of stores.' },
              { metric: '↑', value: 'User Experience', body: 'Simplified operational workflows across four distinct user roles from one unified platform.' },
              { metric: '↑', value: 'Stakeholder Alignment', body: 'Unified experience brought cross-functional teams onto a single, consistent platform.' },
            ].map((im, i) => (
              <Reveal key={i} delay={0.15 + i * 0.08} className="se2-impact-card">
                <div className="se2-impact-arrow">{im.metric}</div>
                <div className="se2-impact-value">{im.value}</div>
                <div className="se2-impact-body">{im.body}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REFLECTION ─── */}
      <section className="se2-section se2-reflection">
        <div className="se2-wrap">
          <Reveal><div className="se2-eyebrow" style={{ justifyContent: 'center' }}><span className="se2-diamond">◆</span> Reflection</div></Reveal>
          <div className="se2-reflection-inner">
            <Reveal delay={0.1} className="se2-reflection-card">
              <span className="se2-paper-clip">📎</span>
              <h3>What I learned</h3>
              <ul className="se2-reflection-list">
                <li>Designing for enterprise operations is less about showing more data and more about helping users understand what actions they should take next.</li>
                <li>AI works best when it is paired with context — users didn't need more dashboards, they needed intelligent recommendations tied directly to operational decisions.</li>
                <li>Role-based experiences require deep empathy for each persona's daily workflow, not just their data needs.</li>
                <li>A scalable design system is what makes multi-persona platforms actually manageable — without it, every role becomes a separate product.</li>
              </ul>
              <h3 style={{ marginTop: 32 }}>What I'd improve</h3>
              <ul className="se2-reflection-list">
                <li>Conduct usability testing with additional operational teams across more store formats.</li>
                <li>Expand AI recommendation capabilities to include predictive inventory forecasting.</li>
                <li>Introduce advanced operational analytics and trend modeling.</li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="se2-takeaway">
              <p>This project strengthened my ability to design large-scale enterprise platforms that balance the needs of frontline teams, operational leaders, and executives — while leveraging AI to transform complex operational data into actionable intelligence.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer id="cs-footer">
        <h3>Want to work together?</h3>
        <p>I&apos;m currently available for new opportunities.</p>
        <div className="footer-btns">
          <a href="mailto:achyutkhanpara7@gmail.com" className="fbtn fbtn-green">Get in Touch</a>
          <Link href="/" className="fbtn fbtn-ghost">← Back to Work</Link>
        </div>
      </footer>

      <style>{`
        .se2-page {
          font-family: var(--font-manrope, sans-serif);
          color: #0b0b0b;
          background: #fff;
          --green: #00875a;
          --blue: #1565C0;
          --border: #e5e7eb;
          --muted: #6b7280;
          --bg: #f9fafb;
        }

        /* ── BROWSER MOCKUP (hero banner animation) ── */
        .hero-screen {
          flex: 1; min-width: 280px; max-width: 380px;
          transform: perspective(1000px) rotateY(0deg);
          transition: transform 0.4s ease;
        }
        .browser-wrap {
          border-radius: 10px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08);
          background: #fff;
        }
        .browser-bar {
          background: #f0f0f0; height: 36px;
          display: flex; align-items: center; gap: 6px; padding: 0 12px;
          border-bottom: 1px solid #e0e0e0;
        }
        .browser-dot {
          width: 11px; height: 11px; border-radius: 50%; flex-shrink: 0;
        }
        .browser-dot.r { background: #EE6A5F; }
        .browser-dot.y { background: #F5BD4F; }
        .browser-dot.g { background: #61C454; }
        .browser-bar-url {
          flex: 1; height: 22px; background: #fff;
          border-radius: 5px; display: flex; align-items: center;
          padding: 0 10px; font-size: 11px; color: #666;
          font-family: monospace; max-width: 260px; overflow: hidden;
          white-space: nowrap; text-overflow: ellipsis;
        }
        .browser-screen { width: 100%; display: block; }

        /* ── HEADER ── */
        .se2-header {
          padding: 130px 32px 60px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .se2-tag-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .se2-tag-pill {
          font-size: 13px; font-weight: 600; color: #555;
          background: #f3f4f6; border: 1.5px solid #e5e7eb;
          border-radius: 999px; padding: 5px 14px;
        }
        .se2-h1 {
          font-size: clamp(36px, 5.5vw, 68px);
          font-weight: 800; line-height: 1.05;
          letter-spacing: -0.04em; margin-bottom: 20px;
        }
        .se2-sub {
          font-size: 18px; font-weight: 400; color: var(--muted);
          line-height: 1.65; max-width: 680px; margin-bottom: 36px;
        }
        .se2-meta-row {
          display: grid; grid-template-columns: repeat(6, 1fr);
          border: 1.5px solid var(--border); border-radius: 14px;
          overflow: hidden; max-width: 900px;
        }
        .se2-meta-cell {
          padding: 14px 18px;
          border-right: 1.5px solid var(--border);
        }
        .se2-meta-cell:last-child { border-right: none; }
        .se2-meta-label { font-size: 10px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
        .se2-meta-value { font-size: 12px; font-weight: 700; color: #0b0b0b; }

        /* ── HERO BANNER OVERRIDE (same as existing 7-Eleven) ── */
        .se2-banner-override { padding: 0 32px 72px; }

        /* ── SHARED ── */
        .se2-wrap { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
        .se2-section { padding: 80px 0; }
        .se2-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700; color: #1565C0;
          text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px;
        }
        .se2-diamond { color: #1565C0; }
        .se2-h2 {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800; letter-spacing: -0.04em;
          line-height: 1.1; margin-bottom: 16px;
        }
        .se2-h3 {
          font-size: 20px; font-weight: 800;
          letter-spacing: -0.02em; margin-bottom: 16px;
        }
        .se2-body {
          font-size: 16px; color: var(--muted);
          line-height: 1.75; margin-bottom: 16px;
        }
        .se2-body strong { color: #0b0b0b; font-weight: 700; }

        /* ── OVERVIEW ── */
        .se2-overview { background: var(--bg); }
        .se2-overview-grid {
          display: grid; grid-template-columns: 1fr 380px; gap: 64px; align-items: start;
        }
        .se2-responsibilities { margin-top: 32px; }
        .se2-resp-label { font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
        .se2-resp-grid { display: flex; flex-wrap: wrap; gap: 8px; }
        .se2-resp-tag {
          font-size: 13px; font-weight: 600; color: #1565C0;
          background: #EFF6FF; border: 1.5px solid #BFDBFE;
          border-radius: 999px; padding: 5px 14px;
        }
        .se2-highlight-cards { display: flex; flex-direction: column; gap: 12px; }
        .se2-highlight-card {
          background: #fff; border: 1.5px solid var(--border);
          border-radius: 16px; padding: 20px 24px;
          display: flex; align-items: center; gap: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .se2-highlight-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
        .se2-hl-icon { font-size: 28px; flex-shrink: 0; }
        .se2-hl-label { font-size: 15px; font-weight: 800; color: #0b0b0b; }
        .se2-hl-sub { font-size: 13px; color: var(--muted); }

        /* ── CHALLENGE ── */
        .se2-challenge { background: #fff; }
        .se2-challenge-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; margin-top: 32px; }
        .se2-challenge-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 15px; font-weight: 500; color: #0b0b0b;
          padding: 10px 0; border-bottom: 1px solid var(--border);
        }
        .se2-challenge-x { flex-shrink: 0; }
        .se2-user-need {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 0; border-bottom: 1px solid var(--border);
        }
        .se2-role-badge {
          font-size: 12px; font-weight: 700; color: #1565C0;
          background: #EFF6FF; border-radius: 999px; padding: 4px 12px;
          white-space: nowrap; flex-shrink: 0;
        }
        .se2-need-text { font-size: 14px; color: var(--muted); }

        /* ── USERS ── */
        .se2-users { background: var(--bg); }
        .se2-discovery-flow {
          display: flex; align-items: center; gap: 0;
          flex-wrap: wrap; margin-top: 32px; margin-bottom: 8px;
        }
        .se2-flow-step { display: flex; align-items: center; }
        .se2-flow-step-inner {
          background: #fff; border: 1.5px solid var(--border);
          border-radius: 12px; padding: 16px 20px; text-align: center;
          min-width: 160px;
        }
        .se2-flow-num { font-size: 11px; font-weight: 800; color: #1565C0; letter-spacing: 0.08em; margin-bottom: 4px; }
        .se2-flow-label { font-size: 13px; font-weight: 700; color: #0b0b0b; line-height: 1.3; }
        .se2-flow-arrow { font-size: 20px; color: #CBD5E1; padding: 0 8px; }
        .se2-findings-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
        }
        .se2-finding-card {
          background: #fff; border-radius: 16px; padding: 28px 24px;
          border: 1.5px solid var(--border);
        }
        .se2-finding-num { font-size: 11px; font-weight: 800; color: #1565C0; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; }
        .se2-finding-title { font-size: 17px; font-weight: 800; color: #0b0b0b; margin-bottom: 10px; }
        .se2-finding-body { font-size: 14px; color: var(--muted); line-height: 1.65; }

        /* ── PERSONAS ── */
        .se2-personas { background: #fff; }
        .se2-personas-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 32px; }
        .se2-persona-card {
          background: var(--persona-bg, #f9fafb);
          border-radius: 20px; padding: 28px 24px;
          border: 1.5px solid transparent;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .se2-persona-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.1); }
        .se2-persona-icon { font-size: 36px; margin-bottom: 12px; }
        .se2-persona-role { font-size: 17px; font-weight: 800; color: #0b0b0b; margin-bottom: 20px; }
        .se2-persona-section-label { font-size: 10px; font-weight: 800; color: var(--persona-accent, #1565C0); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
        .se2-persona-list { list-style: none; padding: 0; margin: 0 0 20px; display: flex; flex-direction: column; gap: 8px; }
        .se2-persona-list li { font-size: 13px; color: #374151; line-height: 1.5; padding-left: 14px; position: relative; }
        .se2-persona-list li::before { content: ''; position: absolute; left: 0; top: 7px; width: 5px; height: 5px; border-radius: 50%; background: var(--persona-accent, #1565C0); }
        .se2-persona-pains li::before { background: #DC2626; }

        /* ── JOURNEY ── */
        .se2-journey { background: var(--bg); }
        .se2-journey-grid {
          display: grid; grid-template-columns: 1fr 80px 1fr; gap: 0;
          margin-top: 32px; align-items: start;
        }
        .se2-pain-head { color: #DC2626; }
        .se2-opp-head { color: var(--green); }
        .se2-journey-item {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 15px; font-weight: 500; color: #0b0b0b;
          padding: 12px 0; border-bottom: 1px solid var(--border);
          line-height: 1.5;
        }
        .se2-journey-dot {
          width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 4px;
        }
        .se2-journey-dot.red { background: #DC2626; }
        .se2-journey-dot.green { background: var(--green); }
        .se2-journey-arrow-col { display: flex; align-items: center; justify-content: center; padding-top: 80px; }
        .se2-journey-arrow-big { font-size: 48px; color: #CBD5E1; }

        /* ── STRATEGY ── */
        .se2-strategy { background: #fff; }
        .se2-principles-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 32px; }
        .se2-principle-card {
          background: var(--bg); border-radius: 20px; padding: 32px 24px;
          border: 1.5px solid var(--border);
        }
        .se2-principle-num { font-size: 48px; font-weight: 900; color: #E8F0FE; letter-spacing: -0.04em; line-height: 1; margin-bottom: 12px; }
        .se2-principle-title { font-size: 16px; font-weight: 800; color: #0b0b0b; margin-bottom: 10px; }
        .se2-principle-body { font-size: 14px; color: var(--muted); line-height: 1.65; }

        /* ── IA ── */
        .se2-ia { background: var(--bg); }
        .se2-ia-diagram {
          display: flex; flex-direction: column; align-items: center;
          background: #fff; border-radius: 20px; padding: 40px;
          border: 1.5px solid var(--border);
        }
        .se2-ia-root {
          background: #1565C0; color: #fff;
          font-size: 16px; font-weight: 800;
          border-radius: 12px; padding: 14px 32px;
          margin-bottom: 0;
        }
        .se2-ia-connector {
          width: 2px; height: 32px; background: #CBD5E1;
        }
        .se2-ia-modules {
          display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;
        }
        .se2-ia-module {
          background: #EFF6FF; color: #1565C0;
          font-size: 13px; font-weight: 700;
          border-radius: 10px; padding: 10px 20px;
          border: 1.5px solid #BFDBFE;
        }

        /* ── SOLUTION ── */
        .se2-solution { background: #fff; }
        .se2-feature {
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
          align-items: center; margin-bottom: 80px;
          padding-bottom: 80px; border-bottom: 1px solid var(--border);
        }
        .se2-feature:last-child { border-bottom: none; }
        .se2-feature-reverse { direction: rtl; }
        .se2-feature-reverse > * { direction: ltr; }
        .se2-feature-label {
          font-size: 11px; font-weight: 800; color: #1565C0;
          text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;
        }
        .se2-psi-grid { display: flex; flex-direction: column; gap: 16px; margin-top: 20px; }
        .se2-psi {
          background: var(--bg); border-radius: 12px; padding: 16px 20px;
          border-left: 3px solid #1565C0;
        }
        .se2-psi-label { font-size: 11px; font-weight: 800; color: #1565C0; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
        .se2-psi-body { font-size: 14px; color: var(--muted); line-height: 1.6; margin: 0; }

        /* ── DESIGN SYSTEM ── */
        .se2-ds { background: var(--bg); }
        .se2-ds-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .se2-ds-card {
          background: #fff; border: 1.5px solid var(--border); border-radius: 16px;
          padding: 24px 20px; text-align: center;
          transition: transform 0.2s, border-color 0.2s;
        }
        .se2-ds-card:hover { transform: translateY(-3px); border-color: #BFDBFE; }
        .se2-ds-icon { font-size: 24px; color: #1565C0; margin-bottom: 10px; }
        .se2-ds-name { font-size: 14px; font-weight: 700; color: #0b0b0b; }

        /* ── IMPACT ── */
        .se2-impact { background: #fff; }
        .se2-impact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
        .se2-impact-card {
          background: linear-gradient(135deg, #f0fff8, #e8f4fd);
          border: 1.5px solid var(--border); border-radius: 20px; padding: 32px 24px;
        }
        .se2-impact-arrow { font-size: 28px; font-weight: 900; color: var(--green); margin-bottom: 8px; }
        .se2-impact-value { font-size: 20px; font-weight: 800; color: #0b0b0b; margin-bottom: 10px; }
        .se2-impact-body { font-size: 14px; color: var(--muted); line-height: 1.6; }

        /* ── REFLECTION ── */
        .se2-reflection { background: #EFF6FF; }
        .se2-reflection-inner { max-width: 800px; margin: 0 auto; }
        .se2-reflection-card {
          background: #fff; border-radius: 4px; padding: 48px 44px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06);
          transform: rotate(0.5deg); position: relative;
        }
        .se2-paper-clip { position: absolute; top: -14px; left: 28px; font-size: 24px; }
        .se2-reflection-card h3 { font-size: 20px; font-weight: 800; color: #0b0b0b; margin-bottom: 20px; }
        .se2-reflection-list { list-style: none; padding: 0; margin: 0 0 8px; display: flex; flex-direction: column; gap: 14px; }
        .se2-reflection-list li { display: flex; gap: 12px; font-size: 15px; color: #374151; line-height: 1.65; }
        .se2-reflection-list li::before { content: '—'; color: #1565C0; font-weight: 700; flex-shrink: 0; }
        .se2-takeaway {
          max-width: 800px; margin: 48px auto 0;
          background: #fff; border-radius: 20px; padding: 32px 40px;
          border-left: 4px solid #1565C0;
          font-size: 17px; color: #374151; line-height: 1.75;
          font-style: italic;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .se2-meta-row { grid-template-columns: repeat(3, 1fr); }
          .se2-overview-grid { grid-template-columns: 1fr; }
          .se2-highlight-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
          .se2-challenge-grid { grid-template-columns: 1fr; }
          .se2-findings-grid { grid-template-columns: 1fr; }
          .se2-personas-grid { grid-template-columns: repeat(2, 1fr); }
          .se2-journey-grid { grid-template-columns: 1fr; }
          .se2-journey-arrow-col { display: none; }
          .se2-principles-grid { grid-template-columns: repeat(2, 1fr); }
          .se2-feature { grid-template-columns: 1fr; }
          .se2-feature-reverse { direction: ltr; }
          .se2-ds-grid { grid-template-columns: repeat(2, 1fr); }
          .se2-impact-grid { grid-template-columns: 1fr 1fr; }
          .se2-discovery-flow { gap: 8px; }
          .se2-flow-step-inner { min-width: 140px; }
        }
        @media (max-width: 600px) {
          .se2-header { padding: 110px 22px 48px; }
          .se2-wrap { padding: 0 22px; }
          .se2-meta-row { grid-template-columns: repeat(2, 1fr); }
          .se2-personas-grid { grid-template-columns: 1fr; }
          .se2-principles-grid { grid-template-columns: 1fr; }
          .se2-ds-grid { grid-template-columns: repeat(2, 1fr); }
          .se2-impact-grid { grid-template-columns: 1fr; }
          .se2-discovery-flow { flex-direction: column; }
          .se2-flow-arrow { transform: rotate(90deg); }
          .se2-reflection-card { padding: 36px 24px; }
          .se2-takeaway { padding: 24px; }
        }
      `}</style>
    </div>
  )
}
