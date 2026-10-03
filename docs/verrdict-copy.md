# VERRDICT Case Study: Content Copy and Page Structure

Oct 3, 2026 · @Achyut Khanpara

## Page structure at a glance

The case study runs as six acts on one scrolling page, and each act answers one question a hiring manager is already asking. The copy for every block follows in the sections below, in page order, with a layout note on each.

| Act | Question it answers | Blocks, in order | Share of page |
| --- | --- | --- | --- |
| 1 · Hook | What is this, and what did you do? | Hero, 30-second summary, at a glance, constraints, team, tension quote | 10% |
| 2 · Context | Why was it hard, and for whom? | Domain loop, users, current state, pain points on the old screen, problem statement, success criteria | 15% |
| 3 · Discovery | How did you find the real problem? | Process, methods, audit lens, interview probes, comparison, three themes, three insights, insights to opportunities | 15% |
| 4 · Decisions | What did you choose, and what did it cost? | Reframe question, principles, structure, main flow, five decisions, integrations, remediation loop, severity, success measures | 25% |
| 5 · Craft | Can you execute? | Design system, wireframe to final, six screens with callouts, states, accessibility, handoff | 25% |
| 6 · Outcome | Did it work, and what did you learn? | Showcase, brief met, outcome, reflection, close | 10% |

### Five rules that hold the page together

1. **Show the result first.** The final Overview screen sits in the hero, and a four-line summary sits directly under it. A reader who leaves after 30 seconds still knows the problem, my role, the approach and the result.
2. **Run one thread from finding to screen.** Every insight becomes an opportunity, every opportunity becomes a principle, and every screen carries the tag of the principle it serves (P1 to P4). The insights-to-opportunities table at the end of Act 3 is the hinge of the whole page.
3. **Show the before.** The old screen with four numbered pain points appears in Act 2. Without it, the final screens have nothing to be better than.
4. **Write every decision as chose, rejected, cost.** This is what separates a process story from a gallery of screens. Trade-offs are the proof of judgement.
5. **State the outcome honestly.** This is a proof of concept with no live usage numbers. The page says so once, plainly, and then says how success will be measured.

### Reading rhythm

Each act opens with a divider: an eyebrow, a title and one sentence. Inside an act, alternate a text block with a visual block, and never stack two text-only blocks. Keep body paragraphs to three sentences. Acts 4 and 5 carry half the page because they hold the decisions and the screens, which is where reviewers spend their time.

## Act 1 · Hook

Act 1 tells the reader what the product is, what I owned and what limits I worked inside, before any process.

### 1.1 Hero

*Layout: full-height section, text left, final Overview screen right, background glow.*

- **Eyebrow:** CASE STUDY · NETWORK GOVERNANCE
- **Title (H1):** VERRDICT
- **Subtitle:** Designing trust into network governance
- **Supporting line:** A governance platform for a large financial company. It pulls scattered network checks into one place, so a reviewer can explain every decision they make.
- **Meta row:** Lead UX designer · 2 weeks · Team of 11
- **Image alt text:** VERRDICT Overview screen showing a ranked list of the four items that need attention today.

### 1.2 Thirty-second summary

*Layout: four short columns directly under the hero. Mono label above each line.*

- **PROBLEM:** Vendor warnings, the asset inventory and change records lived in separate tools. People merged them by hand, so two reviewers could look at the same device and reach different conclusions.
- **MY ROLE:** Sole designer. I owned the audit, interviews, structure, flows, interface, design system and handoff.
- **APPROACH:** I audited the existing tool against fixed questions, grouped the findings into one problem, and designed every screen against four principles.
- **RESULT:** Six modules and one component set, delivered inside a two-week window. The client received it well and it is moving toward adoption. There are no live usage numbers yet.

### 1.3 What VERRDICT is

*Layout: large statement, three cards beneath.*

- **Eyebrow:** WHAT VERRDICT IS
- **Headline:** Scattered network checks in one place, so every decision can be explained.
- **Card 1 · Everything in one view:** Devices, risk and open decisions sit on one page.
- **Card 2 · Reasoning always visible:** Every status opens into the checks and records behind it.
- **Card 3 · No black boxes:** Every number names its source and its age.

### 1.4 At a glance

*Layout: definition list or a five-row table in the page margin.*

|  |  |
| --- | --- |
| Role | Lead UX designer, sole designer on the project |
| Client | A large financial company (confidential) |
| Users | Network analysts, change reviewers, compliance officers, platform admins |
| Timeline | Two weeks, inside an already planned sprint |
| Deliverables | Usability audit, information architecture, user flows, six product modules, design system, engineering handoff |

### 1.5 Constraints

*Layout: four cards in a row, icon above each.*

- **Eyebrow:** CONSTRAINTS
- **Headline:** What I had to design within
- **Two-week build window:** The design had to be buildable inside the sprint the team already had planned.
- **One designer:** No research team, no second pair of hands. Every artefact here is mine.
- **Build on what exists:** New screens had to reuse the existing component set rather than start a new one.
- **Requirements were fixed:** The brief named the modules. The freedom was in how they behaved, not what shipped.

### 1.6 Who I worked with

*Layout: team diagram from the deck, with my role highlighted.*

- **Eyebrow:** COLLABORATION
- **Headline:** Who I worked with
- **Body:** We were a team of eleven. I owned the design end to end and took requirements directly from the client. The project manager owned overall delivery.
- **Core group:** 1 UX designer (me), 1 subject matter expert, 1 project manager
- **Development:** 5 developers, who built the interface from my design system and specs
- **Delivery:** 1 chief delivery lead, who handled delivery oversight and client handoff
- **Sales and business:** 1 chief sales officer and 1 sales manager, who held the client relationship and requirements

### 1.7 The tension

*Layout: full-width dark navy section, pull quote centred. This is the bridge into Act 2.*

> When you can't see how a decision was made, every decision is a risk.

- **Line under the quote:** That sentence became the brief I held myself to. The rest of this page is how I designed against it.

## Act 2 · Context

Act 2 shows how the work ran before, where it broke, and what good had to mean before any design started.

### 2.0 Act divider

- **Eyebrow:** ACT 2 · CONTEXT
- **Title:** How the work runs, and where it broke
- **Intro:** Network governance sounds like reporting. In practice it is a chain of judgement calls, and each one has to stand up later.

### 2.1 The domain

*Layout: four connected cards, left to right, with a warning line beneath. Stack vertically on mobile.*

- **Eyebrow:** THE DOMAIN
- **Headline:** Governance is a loop, not a report
- **Body:** A network team does not produce a compliance report once a quarter. It runs the same loop every day, for every device, and each step depends on the one before it.
- **01 · Estate:** Thousands of devices, versions and vendors.
- **02 · Warnings:** Vendor warnings keep arriving.
- **03 · Verdict:** Compliant, gap, or needs review.
- **04 · Evidence:** It has to hold up when audited.
- **Warning line:** Break one link and you can no longer explain the result.

### 2.2 Why it matters at scale

*Layout: three short columns, no icons.*

- **Scale:** No one can hold thousands of devices in their head. The tool has to decide what a person looks at first.
- **Accountability:** Every verdict has a name against it. The person who signs it needs to see what it rests on.
- **Regulation:** In a financial company, a decision that cannot be evidenced counts as a decision that was not made properly.

### 2.3 Who it is for

*Layout: four persona cards, each led by the question that person asks.*

- **Eyebrow:** WHO IT'S FOR
- **Headline:** Four people, one shared record
- **Body:** Four roles use the same data and ask four different questions of it. The design had to answer all four from one record, not four separate views.
- **Network analyst:** “Where do I start today?”
- **Change reviewer:** “Why does it say gap?”
- **Compliance officer:** “What is our exposure?”
- **Platform admin:** “Is this data current?”

### 2.4 Current state

*Layout: flow diagram. Three sources merge into one manual step, which leads to one red outcome.*

- **Eyebrow:** CURRENT STATE
- **Headline:** Every decision was pieced together by hand
- **Body:** Vendor advisories, the asset inventory and change records sat in three separate places. People joined them in spreadsheets and email. The verdict came out the other end with nothing attached to it.
- **Sources:** Vendor advisories · Asset inventory · Change records
- **Manual step:** Spreadsheets and email
- **Outcome:** A decision with nothing behind it. Two people, same device, different conclusions.

### 2.5 Pain points

*Layout: before-state screenshot on the left with four numbered red markers, legend on the right. Use the same marker pattern as the final screens in Act 5 so the before and after read as a pair.*

- **Eyebrow:** PAIN POINTS, ANNOTATED
- **Headline:** Where the old screens lost the reviewer
- **1 · No sense of priority:** Everything looked equally urgent.
- **2 · Verdicts without reasons:** The status showed, the reason did not.
- **3 · Data of unknown age:** Nothing said when it was last checked.
- **4 · Dead ends:** Seeing and fixing were separate trips.

### 2.6 The core problem

*Layout: single centred statement in large type, generous white space above and below.*

- **Eyebrow:** THE PROBLEM
- **Statement:** Reviewers were accountable for decisions they could not explain. The information existed, but it was scattered, unranked, unsourced and cut off from the action it called for.

### 2.7 What good looks like

*Layout: three criterion cards. These return in Act 6 as the checklist the work is judged against.*

- **Eyebrow:** SUCCESS CRITERIA
- **Headline:** What good had to mean before I drew anything
- **Body:** I set three criteria before opening a design file. With two weeks and no research team, I needed a fixed bar to check the work against.
- **Criterion 01 · One place to look:** Devices, risk and open decisions without leaving the page.
- **Criterion 02 · Every flag explains itself:** No status appears without a way to see why.
- **Criterion 03 · Calm under load:** Hundreds of alerts should feel like a to-do list.

## Act 3 · Discovery

Act 3 shows how I got from a list of screen-level complaints to one problem worth designing for.

### 3.0 Act divider

- **Eyebrow:** ACT 3 · DISCOVERY
- **Title:** The audit, the interviews, the findings
- **Intro:** I had two weeks and no research team, so I chose methods I could run alone and finish in days.

### 3.1 Process

*Layout: four step cards in a row with a note beneath.*

- **Eyebrow:** MY PROCESS
- **Headline:** Audit first, then explore
- **01 · Understand:** Audit the tool against fixed questions.
- **02 · Frame:** Group the findings into one problem.
- **03 · Design:** Structure, flows, components.
- **04 · Validate:** Check the work against the criteria.
- **Note:** Steps 01 and 02 ran together. The problem kept shifting as the audit went deeper.

### 3.2 Methods

*Layout: six compact tiles in two rows. One line each, no paragraphs.*

- **Eyebrow:** METHODS
- **Headline:** What I actually ran
- **Usability audit:** Every existing screen, checked against the same five questions.
- **Interviews with the team:** The subject matter expert and the people closest to the client's reviewers.
- **Requirements review:** The client brief, read line by line for what it fixed and what it left open.
- **Comparison with other tools:** How scanners, inventories and ticketing tools handle the same job.
- **Task and structure analysis:** What a reviewer does in order, and where each step lived.
- **Design system build:** Extending the existing component set so new screens stayed consistent.

### 3.3 Audit lens

*Layout: numbered list beside a thumbnail of an audited screen. Draft wording below, to be matched to the deck slide.*

- **Eyebrow:** THE AUDIT LENS
- **Headline:** Five questions I asked of every screen
- **Body:** A fixed set of questions kept the audit comparable from screen to screen. It also stopped it turning into a list of personal opinions.

1. Can I tell what needs attention first?
2. Can I see why it says what it says?
3. Do I know where this came from and how old it is?
4. Can I act from here?
5. Does my action leave a record?

### 3.4 Interview probes

*Layout: four quote-style cards. Draft wording below, to be matched to the deck slide.*

- **Eyebrow:** WHAT I ASKED
- **Headline:** Four probes, not a script

1. Walk me through the last decision someone had to defend.
2. When a reviewer opens the tool, what do they look at first?
3. Which numbers do people trust, and which do they check somewhere else?
4. After a verdict, where does the work go next?

### 3.5 Comparison by tool category

*Layout: three-row table. Compare categories, not named products.*

- **Eyebrow:** COMPARISON
- **Headline:** Each tool owns one link of the loop

| Category | What it does well | Where it stops |
| --- | --- | --- |
| Scanners | Find issues across the estate | Produce volume, with no view of what to act on first |
| Inventories | Hold the record of what exists | Say nothing about risk or decisions |
| Ticketing | Track the work and its owner | Carry no evidence of why the ticket exists |

- **Takeaway:** No category held the verdict, its reason and its fix together. That gap is the space VERRDICT sits in.

### 3.6 Synthesis

*Layout: three theme cards, each with its findings as small chips.*

- **Eyebrow:** WHAT THE FINDINGS ADDED UP TO
- **Headline:** Everything I found fell into three groups
- **Group A · Attention:** flat urgency · no first move · alert fatigue
- **Group B · Trust:** unsourced numbers · stale data · black-box verdicts
- **Group C · Continuity:** read here, act there · lost context · no trail

### 3.7 Three insights

*Layout: one insight per row, large number on the left, one supporting sentence on the right.*

- **Insight 1 · Reviewers needed a first move, not more alerts.** The question was never how many. It was which one to open first.
- **Insight 2 · A verdict without a reason is a liability.** A status nobody can explain is worse than no status. This insight gave the product its name.
- **Insight 3 · Where data came from mattered as much as what it said.** A number from a live external feed and a number from a week-old upload are not the same number. The screen has to say which is which.

### 3.8 Insights to opportunities

*Layout: full-width table. This is the hinge of the page, so give it space and link each row to its screen in Act 5.*

- **Eyebrow:** FROM FINDING TO DIRECTION
- **Headline:** What each insight asked the design to do

| Theme | Insight | Opportunity | Principle | Where it shows |
| --- | --- | --- | --- | --- |
| Attention | Reviewers needed a first move | Rank the work and land on four items | P2 · Priority over volume | Overview |
| Attention | Alert fatigue from flat urgency | Reserve colour and banners for real risk | P4 · Calm at density | Lifecycle Alerts |
| Trust | A verdict without a reason is a liability | Open every verdict into its working | P1 · Explainable by default | Change Assurance, Trend Analysis |
| Trust | Source matters as much as value | Label every feed with origin and age | P3 · Label the source | Asset Intelligence |
| Continuity | Seeing and fixing were separate trips | Raise the fix from inside the verdict | Close the loop | Remediation |

## Act 4 · Decisions

Act 4 is the centre of the case study: the question I designed for, the rules I held, and five calls with what each one cost.

### 4.0 Act divider

- **Eyebrow:** ACT 4 · DEFINE AND DECIDE
- **Title:** The question, the principles, the calls
- **Intro:** The brief fixed which modules shipped. Everything in this act is about how they behave.

### 4.1 The reframe

*Layout: one question in display type on a dark navy ground. Nothing else in the section.*

- **Eyebrow:** THE QUESTION
- **Statement:** How do we make every decision something a reviewer can act on and explain, in one place?
- **Line beneath:** Act on, explain, one place. Each of the three themes from discovery has a word in that sentence.

### 4.2 Design principles

*Layout: two-by-two grid. The P-numbers reappear as tags on the screens in Act 5.*

- **Eyebrow:** DESIGN PRINCIPLES
- **Headline:** Four rules I designed against
- **P1 · Explainable by default:** No status ships unless the reason is one click away.
- **P2 · Priority over volume:** Rank the work. Counts alone tell a reviewer nothing.
- **P3 · Label the source:** External or internal, live or snapshot, and how old.
- **P4 · Calm at density:** Colour is reserved for risk. Nothing else competes.

### 4.3 How it is organised

*Layout: structure diagram. Overview as a full-width bar on top, two columns beneath.*

- **Eyebrow:** HOW IT IS ORGANISED
- **Headline:** Two halves: what is true, what we decided
- **Body:** I split the product by the kind of question being asked. Intelligence holds the facts. Assurance holds the judgements made on those facts. Overview sits above both and holds the day's ranked work.
- **Overview:** The day's ranked work.
- **Intelligence · What is true:** Asset Intelligence (vendor sources, inventory, warning map) and Lifecycle Alerts (end-of-life status, milestones, audit ledger).
- **Assurance · What we decided:** Change Assurance (change records, issues, verdict) and Trend Analysis (exposure, failure trend, risk groups).
- **Remediation:** Reached from inside a verdict, not from the navigation.
- **Footer line:** Five places, one level deep. Nothing needed daily is buried.

### 4.4 The main journey

*Layout: horizontal flow of six steps with arrows, vertical stack on mobile. Animate the connecting line on scroll.*

- **Eyebrow:** THE MAIN JOURNEY
- **Headline:** From a ranked alert to a decision you can explain

1. **Land:** The ranked queue opens.
2. **Open:** The device and its trigger are named.
3. **Inspect:** Controls, records and source.
4. **Decide:** In place, on the row.
5. **Act:** The fix is raised from the verdict.
6. **Record:** Written to the audit log.

- **Footer line:** The reviewer never leaves the record, and the trail is a by-product of deciding.

### 4.5 Five decisions

*Layout: one block per decision, three columns inside each: Chose, Rejected, Cost. A small thumbnail of the affected screen beside each block. The Rejected and Cost lines below are drafted from the deck's logic and need checking against what actually happened.*

- **Eyebrow:** THE CALLS
- **Headline:** Five decisions, and what each one cost

**Decision 1 · Land on four ranked items**

- **Chose:** The Overview opens on a ranked queue of the four items that need attention, each with its next action.
- **Rejected:** A landing page of totals and charts. Counts describe the estate but do not tell a reviewer where to start.
- **Cost:** The ranking rules have to be defined, shown and maintained. Everything below the fourth item sits one click away.

**Decision 2 · Every verdict opens into its working**

- **Chose:** Each verdict expands to the checks, records and thresholds that produced it.
- **Rejected:** A status badge with the reasoning held in a separate report.
- **Cost:** Denser detail views, and more states to design and build inside two weeks.

**Decision 3 · Every feed labels itself**

- **Chose:** Each data source shows whether it is external or internal, live or a snapshot, and when it last ran.
- **Rejected:** One global “last updated” stamp for the whole page.
- **Cost:** More metadata on screen, and stale data becomes visible instead of hidden. That is uncomfortable, and it is the point.

**Decision 4 · Lifecycle alerts start 18 months out and escalate**

- **Chose:** A device enters the list 18 months before its deadline and moves up in severity as time runs down.
- **Rejected:** Alerting only when a deadline is breached, when the only move left is an emergency one.
- **Cost:** A much longer list. It only works because breached and upcoming items are separated and colour is held back for real risk.

**Decision 5 · Act without leaving the record**

- **Chose:** The reviewer raises the ticket from inside the verdict, pre-filled with its evidence.
- **Rejected:** A link out to the ticketing tool, which is where context was lost before.
- **Cost:** A two-way sync to design for, including the state where the two systems disagree.

### 4.6 Connected services

*Layout: three-column map. Feeds in on the left, VERRDICT in the centre, actions out on the right.*

- **Eyebrow:** PLATFORM · CONNECTED SERVICES
- **Headline:** VERRDICT sits between the systems, not beside them
- **Feeds in:** Cisco PSIRT (external), vendor advisories for network hardware · Tenable (external), vulnerability scan results · Splunk (internal), telemetry and config drift · ServiceNow (internal), asset inventory and change records
- **One record:** Every feed is labelled external or internal, live or snapshot, with the time it last ran. The verdict, its evidence and the ticket raised against it stay on one record.
- **Action out:** Jira (two-way), ticket raised from the verdict and status returns · ServiceNow (two-way), change record for approved remediation
- **Same pattern:** New services join as a declared connection, not a bespoke screen.

### 4.7 The remediation loop

*Layout: five numbered cards in a row with a closing line beneath.*

- **Eyebrow:** THE LOOP
- **Headline:** From verdict to closed, without leaving the record

1. **Verdict reached:** The check runs and the reason is attached to the record.
2. **Ticket raised:** Sent to Jira pre-filled with records, controls and a link back.
3. **Tracked in place:** Assignee, status and age read back from Jira, shown on the record.
4. **Fix confirmed:** Status returns and the record closes against its own evidence.
5. **Trail kept:** Reason, action and outcome sit on one object for the audit.

- **Closing line:** Before this, steps two to five happened in other people's tools, and nobody could reconstruct them afterwards.

### 4.8 Severity

*Layout: one large number with three smaller ones beside it, then a horizontal time scale running from 18 months to past due.*

- **Eyebrow:** THE NUMBERS
- **Headline:** Time remaining becomes severity, and severity names the next action
- **Stat:** 452 active alerts in the design data
- **Breakdown:** 85 past due · 182 advance notice · 185 monitor or plan
- **Body:** A list of 452 alerts is not a to-do list. I tied severity to time remaining, and gave each band one verb, so the label tells the reviewer what to do next.
- **12 to 18 months:** Review
- **6 to 12 months:** Plan
- **Under 6 months and past due:** take the verbs from the deck's severity slide

### 4.9 How success should be measured

*Layout: four metric cards with a plain footnote. No numbers in the cards.*

- **Eyebrow:** SUCCESS MEASURES
- **Headline:** How this should be judged once it is live
- **Engagement · Time to first decision:** Minutes from opening the dashboard to acting on the top-ranked item.
- **Throughput · Share of alerts triaged:** Proportion of the queue that reaches a verdict instead of being scrolled past.
- **Trust · Evidence attached:** Verdicts that carry a source and a timestamp when an auditor asks.
- **Coverage · Unknowns closed:** Devices moving out of the unknown bucket week over week.
- **Footnote:** No live numbers yet. These are the measures I proposed, and the reason each screen exposes a timestamp and a source.

## Act 5 · Craft

Act 5 shows the six screens, and each one is tagged with the principle from Act 4 that it serves.

### 5.0 Act divider

- **Eyebrow:** ACT 5 · DESIGN AND CRAFT
- **Title:** The system, the modules, the states
- **Intro:** Each screen below answers one finding from the audit. The tag in the corner says which rule it follows.

### 5.1 Design system

*Layout: swatches on the left, risk legend in the middle, type specimen on the right.*

- **Eyebrow:** DESIGN SYSTEM
- **Headline:** Colour is only for risk
- **Body:** Structure uses navy, blue, teal and a near-white canvas. Red, amber and green appear only where there is risk to report. When a reviewer sees colour, it always means the same thing.
- **Structure:** Navy #002D72 · Primary #0B5CD5 · Teal #1AA7C7 · Canvas #F7F9FC
- **Risk only:** Critical or gap · High or review · Compliant
- **Line under the legend:** Everything structural stays neutral.
- **Type and space:** Inter Tight for headings. Inter for body and interface. JetBrains Mono for serials and versions. A 4pt base, with table rows on an 8pt rhythm.

### 5.2 Wireframe to final

*Layout: two frames side by side with a slider or a simple pair. Caption beneath.*

- **Eyebrow:** ROUGH TO FINAL
- **Headline:** The dashboard, twice
- **Caption:** Kept: the ranked list on top. Changed: metrics became four tiles, and data age moved into the header.

### 5.3 Six screens

*Layout: the same pattern six times. Screenshot at roughly two-thirds width with numbered markers, legend at one-third, principle tag top right. Alternate the image side from screen to screen to keep the scroll from feeling repetitive.*

**Screen 01 · Overview** (tag: P2 · Priority over volume)

- **Headline:** The day starts ranked, not counted
- **Body:** The first thing a reviewer sees is four items in order, each with the action it needs.
- **1:** Four tiles, one question each
- **2:** “What needs attention”, ranked 1 to 4
- **3:** Every row carries its verb
- **4:** Freshness in the header
- **Alt text:** Overview screen with four summary tiles and a ranked list of four items needing attention.

**Screen 02 · Lifecycle Alerts** (tag: P4 · Calm at density)

- **Headline:** Overdue and upcoming are different jobs
- **Body:** A breached deadline needs action today. A deadline 18 months away needs a plan. The screen keeps them apart.
- **1:** One banner, one device
- **2:** Breached vs. 18-month look-ahead
- **3:** The team's own words as filters
- **4:** Ranking rules and audit ledger as tabs
- **Alt text:** Lifecycle Alerts screen with one critical banner and a list split into breached and upcoming devices.

**Screen 03 · Change Assurance** (tag: P1 · Explainable by default)

- **Headline:** The verdict shows its work
- **Body:** Each change record walks through its checks in order, and the verdict comes last.
- **1:** Implementation, Test, Tier-2, then verdict
- **2:** Evidence gaps counted separately
- **3:** Deadlines stated as time, not colour
- **4:** Source of record, named
- **Alt text:** Change Assurance screen showing a change record with its implementation, test and tier-2 checks leading to a verdict.

**Screen 04 · Asset Intelligence** (tag: P3 · Label the source)

- **Headline:** Where every number came from
- **Body:** Every feed states its origin and its age, and the path from raw advisories to relevant ones is shown as a count.
- **1:** External and internal are tabs
- **2:** Live or snapshot, per feed
- **3:** 1,744 loaded, 6 relevant, shown as a visible narrowing
- **4:** Manual uploads follow the same path
- **Alt text:** Asset Intelligence screen listing data feeds, each labelled as external or internal and live or snapshot.

**Screen 05 · Trend Analysis** (tag: P1 · Explainable by default)

- **Headline:** Exposure with a named cause
- **Body:** The page opens with a sentence that states the finding. The charts support it, and the method sits one click beneath.
- **1:** A sentence before the charts
- **2:** Primary exposure with its controls
- **3:** Method one click below the claim
- **4:** Trend against the prior period
- **Alt text:** Trend Analysis screen with a one-sentence summary above charts of exposure and failure trend.

**Screen 06 · Remediation** (tag: Close the loop)

- **Headline:** The verdict becomes work someone owns
- **Body:** The ticket is raised where the decision is made, and its status comes back to the same record.
- **1:** Raise ticket sits on the verdict, not in a toolbar
- **2:** Pre-filled: records, controls, link back to the evidence
- **3:** Key, assignee, status and age read back from Jira
- **4:** When the two disagree, we say when we last heard
- **Alt text:** Remediation view showing a verdict with a raised ticket and its assignee, status and age.

### 5.4 Interaction and states

*Layout: four cards, each with a small cropped screenshot of the state.*

- **Eyebrow:** INTERACTION AND STATES
- **Headline:** Designed for the states nobody demos
- **Empty · Zero is an achievement:** “0 fully compliant · no change vs last 7 days” still reports the comparison.
- **Loading · Refresh is per source:** One feed can scan while the rest stay readable. The screen never blanks.
- **Stale · Age is always on screen:** Last run per feed, last sync per integration. Stale is labelled, not hidden.
- **Critical · One banner, never two:** Only the single most urgent breach gets the top slot.

### 5.5 Accessibility

*Layout: short two-column block. Show one risk chip in colour and in greyscale side by side to prove the point.*

- **Eyebrow:** ACCESSIBILITY
- **Headline:** Risk is never colour alone
- **Body:** Because colour means risk, colour cannot be the only signal. Every risk state carries a word, deadlines are written as time, and all text meets a 4.5:1 contrast ratio.

### 5.6 Handoff

*Layout: four cards in a row.*

- **Eyebrow:** HANDOFF
- **Headline:** How this got to engineering
- **Annotated screens:** Every state, every threshold and the rule behind each ranking, written next to the screen it governs.
- **Component specs:** Sizes, spacing and the named tokens, so a new module inherits the risk language for free.
- **Walkthrough sessions:** I walked engineering through the flows before the build, not after, and stayed available during it.
- **Design review of the build:** I inspected the implemented screens against the specs and logged the differences that mattered.

## Act 6 · Outcome

Act 6 checks the work against the criteria from Act 2, states the result without inflating it, and says what I would change.

### 6.0 Act divider

- **Eyebrow:** ACT 6 · OUTCOME
- **Title:** What landed, and what next
- **Intro:** The work was delivered inside the window and checked against the criteria I set at the start.

### 6.1 Showcase

*Layout: bento grid of six screens, Overview largest. Hover lifts each tile and links back to its section in Act 5.*

- **Headline:** Six modules, one system
- **Label row:** OVERVIEW · ASSETS · LIFECYCLE · ASSURANCE · TRENDS · REMEDIATION

### 6.2 Met the brief

*Layout: two-column table. Left column repeats the criteria and constraints word for word from Acts 1 and 2.*

- **Eyebrow:** AGAINST THE BRIEF
- **Headline:** What was asked, and how the design answers it

| What was asked | How the design answers it |
| --- | --- |
| One place to look | Overview holds the day's ranked work. Every other module is one level down. |
| Every flag explains itself | Each verdict opens into its checks and records. Each feed names its source and age. |
| Calm under load | Colour is used only for risk. One banner at most. The landing view shows four items, in order. |
| Buildable in two weeks | Every screen reuses the existing component set, handed over with specs and named tokens. |
| The modules named in the brief | All delivered, with shared patterns so a new module inherits the same risk language. |

### 6.3 Outcome

*Layout: short paragraph in large body type. No stat tiles here, because there are no stats to show.*

- **Eyebrow:** OUTCOME
- **Headline:** Delivered, well received, moving toward adoption
- **Body:** I delivered the modules, the component set and the flows inside the two-week window, each checked against the criteria agreed at the start. The client received the work well and it is moving toward adoption.
- **Honest line:** There are no live usage numbers yet. When there are, the four measures in Act 4 are how this should be judged.

### 6.4 Reflection

*Layout: two numbered statements, plain text, wide margins.*

- **Eyebrow:** WHAT I TOOK FROM IT
- **1 · In regulated work, the interface is the argument.** A reviewer has to defend a decision to someone who was not in the room. The screen is the evidence they bring. Designing it is designing the case they make.
- **2 · I would test the ranking rules with real reviewers earlier.** The ranked queue is the centre of the product, and its rules came from the audit and the team. I would put those rules in front of the people who live with them before building on top.

### 6.5 Close

*Layout: dark navy footer section, two buttons.*

- **Line:** Thanks for reading. I am happy to walk through any of these decisions in more detail.
- **Button 1:** Get in touch
- **Button 2:** Next case study

## Before you publish

Thirteen items need your confirmation and five assets need dropping in before this copy is final. The deck slides I worked from left some of these marked as open, and a few lines above are my drafts where the slide was not in the export.

### Copy to confirm

- [x] **Module count.** The page says six modules. The structure slide says “Five places, one level deep”. I treated Remediation as the sixth, reached from inside a verdict. Check that this matches the product.
- [x] **Fourth principle.** The principles slide names P4 as Calm at density. The Remediation screen is tagged “P4 · Close the loop”. I kept Calm at density as P4 and left the Remediation tag unnumbered.
- [x] **Process step 2.** The deck calls it Agree, the page brief calls it Frame. I used Frame.
- [x] **Personas.** The deck marks these as placeholders. The fourth is Platform admin in the deck and Engineer or PM in the brief.
- [x] **Audit lens (3.3).** The five questions are my draft. Replace with the wording from your deck.
- [x] **Interview probes (3.4).** The four probes are my draft. Replace with the ones you used.
- [x] **Who you interviewed (3.2).** I wrote “the subject matter expert and the people closest to the client's reviewers”. Correct this to who it was.
- [x] **Methods (3.2).** The deck says confirm or trim. Remove any method you did not run.
- [x] **Comparison table (3.5).** The strengths and limits per category are my draft.
- [x] **Decisions (4.5).** The Chose lines come from your brief. The Rejected and Cost lines are drafted and need checking against what happened.
- [x] **Severity bands (4.8).** I only had 12 to 18 months (review) and 6 to 12 months (plan). Add the remaining bands and their verbs.
- [x] **Handoff (5.6) and success measures (4.9).** Both are marked in the deck as needing confirmation with the team.
- [x] **Confidentiality.** The page names Cisco PSIRT, Tenable, Splunk, ServiceNow and Jira, and shows 452 alerts and 1,744 advisories. Confirm these are design data and safe to publish, or make them generic.

### Assets to drop in

- [x] Hero image: final Overview screen at 2×
- [x] Before-state screenshot for the pain points block (2.5)
- [x] Overview wireframe and final frame for the pair (5.2)
- [x] Six final screens at 2× with marker positions for the callouts (5.3)
- [x] Cropped state examples: empty, loading, stale, critical (5.4)
