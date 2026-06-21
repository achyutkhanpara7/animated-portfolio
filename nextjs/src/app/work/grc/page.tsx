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

export default function GRCPage() {
  useEffect(() => {
    const handleScroll = () => document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const modules = [
    { num:'01', title:'Regulatory Extraction Engine', body:'The first bottleneck: analysts spending 2–3 days manually tagging obligations inside dense regulatory PDFs. We replaced this with an AI-assisted extraction pipeline surfaced through a clean review interface turning document processing into a structured, auditable workflow.', feats:['AI extraction from regulatory PDFs in under 60 seconds','Human-in-the-loop review with inline accept / reject','Severity auto-classification: Critical → Low','Export as structured obligation register (CSV / JSON)'], callout:'Design decision: We deliberately kept the review table minimal — no modal overload. Analysts can triage 50+ obligations in a single scroll session with keyboard-accessible actions.' },
    { num:'02', title:'Alignment Engine', body:'Enterprises rarely comply with just one framework. The Alignment Engine intelligently maps controls across SOC 2, ISO 27001, NIST CSF, GDPR and others — surfacing overlap and eliminating redundant compliance work.', feats:['Automated cross-framework control mapping','Overlap detection to reduce redundant work','Visual coverage heatmap per framework','Custom framework imports via CSV / JSON'], callout:'' },
    { num:'03', title:'Artifacts Discovery Engine', body:'Compliance artifacts — policies, procedures, evidence packs — were previously assembled by hand over weeks. We designed an AI-generation flow that produces structured draft artifacts from extracted obligations, mapped to the appropriate framework controls.', feats:['One-click generation of policy and procedure drafts','Auto-linked to relevant framework controls','Approval workflow with role-based permissions','Version history with diff tracking'], callout:'' },
    { num:'04', title:'Gap Analysis', body:'Gaps were only discovered during audits — far too late. We redesigned gap detection as a continuous, real-time layer surfaced through an executive-readable dashboard. No more surprises on audit day.', feats:['Real-time gap scoring against active frameworks','Remediation ownership assignment per gap','Exec-facing summary dashboard (30-second read)','Auto-escalation when SLA breaches approach'], callout:'The hardest design challenge here was making severity feel urgent without triggering alert fatigue. We used color sparingly — red only for items within 7-day risk windows — and moved "days remaining" into the primary column.' },
    { num:'05', title:'Architecture Scanner', body:"Security architects needed a way to validate infrastructure against compliance requirements without generating a 200-page report nobody reads. We designed a scannable, interactive architecture view that highlights risk directly on the system diagram.", feats:['Import architecture via Terraform / draw.io / manual','Risk overlay directly on architecture diagram nodes','Auto-link findings to obligations and controls','One-click remediation ticket generation'], callout:'' },
    { num:'06', title:'Code Scanner', body:"The final frontier: compliance visibility at the code level. The Code Scanner lets security teams detect misconfigurations, hardcoded secrets, and non-compliant patterns inside the codebase itself — without requiring developers to leave their workflow.", feats:['Deep scan across 10+ languages and frameworks','Auto-mapped findings to compliance obligations','CI/CD integration — scan on every PR','Developer-friendly inline fix suggestions'], callout:'' },
  ]

  return (
    <>
      <nav id="nav" style={{ fontFamily:"'Plus Jakarta Sans', sans-serif" }}>
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:'6px', textDecoration:'none', color:'inherit' }}>
          <div className="nav-avatar"><img src="/assets/images/profile.png" alt="Achyut" /></div>
          <span className="nav-name">ACHYUT</span>
        </Link>
        <Link href="/#work" className="nav-link">Work</Link>
        <Link href="/about" className="nav-link">About</Link>
        <a href="#" className="nav-cta">Resume</a>
      </nav>

      <section id="hero" style={{ fontFamily:"'Plus Jakarta Sans', sans-serif" }}>
        <div className="hero-inner">
          <div className="hero-left">
            <Reveal><div className="hero-kicker">WorldLink Labs · GRC Platform · 2025–2026</div></Reveal>
            <Reveal delay={0.1}><h1 className="hero-h1">GRC Platform Design: Simplifying Complex Compliance Workflows</h1></Reveal>
            <Reveal delay={0.2}><p className="hero-sub">An AI-powered GRC platform that unifies compliance workflows, risk analysis, and system insights into a scalable, intuitive enterprise experience.</p></Reveal>
            <Reveal delay={0.3}><div className="hero-meta">
              <div className="hero-meta-cell"><span className="hmc-label">Role</span><span className="hmc-value">Lead UX / Product Designer</span></div>
              <div className="hero-meta-cell"><span className="hmc-label">Company</span><span className="hmc-value">WorldLink</span></div>
              <div className="hero-meta-cell"><span className="hmc-label">Duration</span><span className="hmc-value">6 Months</span></div>
              <div className="hero-meta-cell"><span className="hmc-label">Platform</span><span className="hmc-value">Web · Enterprise SaaS</span></div>
            </div></Reveal>
          </div>
          <Reveal delay={0.2} className="hero-img">
            <img src="https://framerusercontent.com/images/Y1mbyjRzmlin1tC4QSD8D4Ya7Y.png" alt="GRC Platform UI" />
          </Reveal>
        </div>
      </section>

      <section id="tldr"><div className="tldr-card"><div><h3>Want to skim through this case study? I got you covered.</h3><p>Here&apos;s a 1 min TL;DR Version.</p></div></div></section>

      <section id="summary-banner"><div className="red-banner"><Reveal><p className="red-banner-body">Designed the end-to-end UX for an AI-driven compliance platform, helping compliance officers, risk managers, and security teams navigate complex enterprise workflows with clarity and ease.</p></Reveal><div className="tag-row"><span className="tag-pill">Compliance Officers</span><span className="tag-pill">Risk Managers</span><span className="tag-pill">Security Architects</span><span className="tag-pill">Enterprise Orgs</span><span className="tag-pill">WorldKit Design System</span></div></div></section>

      <section id="three-cards"><div className="three-cards-grid">
        <Reveal className="sum-card"><div className="sum-card-label">What did I do?</div><p className="sum-card-body">Led end-to-end UX across multiple modules with a shared WorldKit design system.</p><ul className="module-list"><li>Artifacts Generation Engine</li><li>Extraction Engine &amp; Extracted Data</li><li>Alignment Engine</li><li>Gap Analysis</li><li>Architecture Scanner</li><li>Code Scanner</li><li>Artifacts Discovery Engine</li></ul></Reveal>
        <Reveal delay={0.1} className="sum-card"><div className="sum-card-label">Why was it done?</div><p className="sum-card-body">Compliance teams were drowning in fragmented tools and manual workflows. They needed one unified platform with AI automation to cut review cycles from days to hours.</p></Reveal>
        <Reveal delay={0.2} className="sum-card"><div className="sum-card-label">What did I learn?</div><p className="sum-card-body">Designing for AI-heavy enterprise tools requires balancing automation confidence with human oversight.</p><div className="pull-quote">&ldquo;Remove what you don&apos;t need&rdquo; is as important as &ldquo;add what users want.&rdquo;</div></Reveal>
      </div></section>

      <section id="impact"><Reveal className="impact-card"><div className="impact-header"><span className="impact-header-title">The Impact</span><div className="impact-header-div"></div><span className="impact-header-sub">Measurable results within weeks of launch</span></div><div className="impact-stats">
        <div className="stat-box"><div className="stat-label">Manual Effort ↓</div><div className="stat-value">74%</div><div className="stat-bar-track"><div className="stat-bar-fill" style={{width:'74%'}}></div></div><div className="stat-desc">Reduction in manual compliance effort</div></div>
        <div className="stat-box"><div className="stat-label">Satisfaction Score</div><div className="stat-value">4.7<span style={{fontSize:'32px'}}>★</span></div><div className="stat-bar-track"><div className="stat-bar-fill" style={{width:'94%'}}></div></div><div className="stat-desc">User satisfaction score post-launch</div></div>
        <div className="stat-box"><div className="stat-label">Feature Adoption</div><div className="stat-value">91%</div><div className="stat-bar-track"><div className="stat-bar-fill" style={{width:'91%'}}></div></div><div className="stat-desc">AI feature adoption in first 2 weeks</div></div>
      </div></Reveal></section>

      <section id="problem">
        <Reveal className="problem-header"><div className="eyebrow">The problem</div><h2 className="serif-h2">What was broken?</h2><p className="section-body">Compliance teams were managing fragmented, time-intensive workflows across too many disconnected tools with zero AI assistance and no unified visibility.</p></Reveal>
        <div className="pain-grid">
          {[{n:'01',t:'Regulatory Fragmentation',b:'Compliance officers managed 5–10+ frameworks manually each with its own spreadsheet, folder, and tracking method. Cross-framework visibility was essentially impossible.'},{n:'02',t:'Manual Document Processing',b:'Extracting obligations from regulatory PDFs required analysts to manually tag hundreds of pages. A single document took 2–3 days. There was no automation, no speed.'},{n:'03',t:'No Real-Time Gap Visibility',b:'Gaps were only discovered during audits — never proactively. No live scoring, no early warning, no executive summary non-technical stakeholders could act on in 30 seconds.'},{n:'04',t:'Zero AI Assistance',b:'Despite large volumes of compliance data, tools lacked AI-driven insights, automation, and natural language querying, forcing teams to rely on institutional knowledge.'}].map((p,i) => (
            <Reveal key={i} delay={i*0.1} className="pain-card"><span className="pain-num">Pain {p.n}</span><div className="pain-title">{p.t}</div><p className="pain-body">{p.b}</p></Reveal>
          ))}
        </div>
      </section>

      <section id="research"><div className="research-wrap">
        <Reveal><div className="eyebrow">research</div><h2 className="serif-h2" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontStyle:'normal',fontWeight:800}}>4 Methods. Deep Clarity.</h2><p className="section-body">Before designing a single screen, I invested in understanding the world compliance professionals live in through observation, conversation, and data.</p></Reveal>
        <div className="method-cards">
          {[{n:'4',t:'Contextual Inquiries',d:'Sat in on live compliance reviews at 4 enterprise organizations. Mapped 40+ discrete actions per cycle observed every step from pulling regulatory PDFs to emailing findings.'},{n:'14',t:'Stakeholder Interviews',d:'45–60 min sessions with Compliance Officers, Risk Managers, Security Architects, and Legal teams across financial services and insurance firms.'},{n:'67',t:'Survey Respondents',d:'28-question structured survey. Measured time on manual parsing, tool count, gap discovery timing, and AI feature interest.'},{n:'9',t:'Competitors Analyzed',d:'Evaluated ServiceNow, OneTrust, Vanta, Drata, and 5 others across 24 UX dimensions. No tool combined AI + real-time executive dashboard + cross-framework mapping.'}].map((m,i) => (
            <Reveal key={i} delay={i*0.1} className="method-card"><div className="method-num">{m.n}</div><div className="method-title">{m.t}</div><p className="method-desc">{m.d}</p></Reveal>
          ))}
        </div>
        <div className="findings-split">
          <div><div className="findings-col-label">key findings</div><div className="insight-list">
            {[{t:'Tool Fragmentation Overhead',b:'Teams switched between 5–10+ tools per cycle. Context switching was the #1 time thief, averaging 40+ discrete actions per framework review.'},{t:'3.2 Days Per Framework',b:'Average time to process one regulatory document: 2–3 days. 9 discrete actions across 3 phases — all error-prone, all repetitive.'},{t:'Gaps Found Only at Audit Time',b:'100% of interviewees reported discovering critical compliance gaps during audits never proactively. The reactive workflow was universally painful.'},{t:'Appetite for AI Was High',b:'When asked "if AI could do one thing," 89% said automated document extraction. The demand was clear — no product had delivered it.'}].map((ins,i) => (
              <Reveal key={i} delay={i*0.1} className="insight-item"><div className="insight-title">{ins.t}</div><p className="insight-body">{ins.b}</p></Reveal>
            ))}
          </div></div>
          <div><div className="findings-col-label">voices from the field</div><div className="insight-list">
            {[{q:'"I need to walk into the board meeting and tell them our compliance posture in one sentence — backed by real data, not gut feel."',a:'Jordan D.',r:'Chief Compliance Officer · Regional Bank'},{q:'"I spend 60% of my day extracting data from PDFs. If AI can do that, I can actually focus on analysis and recommendations."',a:'Priya R.',r:'Regulatory Compliance Analyst · Financial Services'},{q:'"Architecture scanning and code compliance should be automated. Manual checks mean we\'re always behind the threat landscape."',a:'Marcus K.',r:'IT Risk & Security Manager · Insurance Corp'}].map((qt,i) => (
              <Reveal key={i} delay={i*0.1} className="quote-item"><p className="quote-text">{qt.q}</p><div className="quote-author">{qt.a}</div><div className="quote-role">{qt.r}</div></Reveal>
            ))}
          </div></div>
        </div>
      </div></section>

      <section id="solution"><div className="solution-wrap">
        <Reveal><div className="eyebrow">THE SOLUTION</div><h2 className="serif-h2">How we designed our way out of the chaos.</h2><p className="section-body">Rather than patching existing workflows, we reimagined the entire compliance experience from the ground up — building a unified, AI-native platform where every module speaks the same design language and shares one source of truth.</p></Reveal>
        <div className="solution-tags"><span className="sol-tag active">Unified Platform</span><span className="sol-tag">AI-Assisted Extraction</span><span className="sol-tag">Real-Time Visibility</span><span className="sol-tag">WorldKit Design System</span></div>
        <Reveal delay={0.1}><div className="solution-hero"><h3>One platform. Six engines. Zero compliance blind spots.</h3><p>We structured the platform around six interconnected modules — each solving a distinct pain point, yet unified under a consistent interaction model and shared design system. The result: compliance teams could move from document upload to actionable insight in minutes, not days.</p></div></Reveal>
      </div></section>

      <div className="modules-wrap">
        {modules.map((mod, i) => (
          <Reveal key={i} className="module-section">
            <div className="module-header">
              <span className="module-badge">MODULE {mod.num}</span>
              <div className="module-title">{mod.title}</div>
              <p className="module-body">{mod.body}</p>
            </div>
            <div className="browser">
              <div className="browser-toolbar">
                <div className="tl tl-r"></div><div className="tl tl-y"></div><div className="tl tl-g"></div>
                <div className="url-bar">GRC-Enterprise.com</div>
              </div>
              <video autoPlay loop muted playsInline>
                <source src="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="module-features">
              {mod.feats.map((f,fi) => <div key={fi} className="feat-item"><div className="feat-dot"></div><span className="feat-text">{f}</span></div>)}
            </div>
            {mod.callout && <div className="design-callout"><p>{mod.callout}</p></div>}
          </Reveal>
        ))}
      </div>

      <section id="learnings"><div className="learnings-wrap">
        <Reveal><div className="eyebrow">WHAT I LEARNED</div><h2 className="serif-h2">Designing for high-stakes enterprise AI.</h2></Reveal>
        <div className="learning-cards">
          {[{l:'LEARNING 01',t:'Automation confidence ≠ automation trust',b:"Users were impressed by AI extraction accuracy — but still wanted to manually verify every item. The insight: trust is built through transparency, not just accuracy. We added confidence scores and source citations to every AI output, and watch-through rates increased significantly."},{l:'LEARNING 02',t:'"Remove what you don\'t need" is as important as "add what users want"',b:"Early prototypes had too many features on every screen. Compliance officers don't want more data — they want the right data, faster. Our biggest UX wins came from ruthlessly removing UI elements, not adding them. Every screen went through at least two \"subtraction\" rounds."},{l:'LEARNING 03',t:'Executive dashboards are a product unto themselves',b:'The most-used feature turned out to be the executive summary view — a single screen with 3 KPIs and a risk heat map designed for a 30-second read by a non-technical CISO. Designing for this audience required a completely different vocabulary, visual grammar, and information density than designing for analysts.'}].map((lrn,i) => (
            <Reveal key={i} delay={i*0.1} className="learning-card"><div className="learning-label">{lrn.l}</div><div className="learning-title">{lrn.t}</div><p className="learning-body">{lrn.b}</p></Reveal>
          ))}
        </div>
      </div></section>

      <footer id="cs-footer">
        <h3>Want to work together?</h3>
        <p>I&apos;m currently available for new opportunities.</p>
        <div className="footer-btns">
          <a href="mailto:achyutkhanpara7@gmail.com" className="fbtn fbtn-red">Get in Touch</a>
          <Link href="/" className="fbtn fbtn-ghost">← Back to Work</Link>
        </div>
      </footer>
    </>
  )
}
