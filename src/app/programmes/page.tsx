'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Waves, Zap, Wind, Sparkles, Users, Award, Lightbulb, Target, CheckCircle2, BookOpen, Rocket, TrendingUp } from 'lucide-react'

type ProgrammeType = 'ripple' | 'current' | 'tide' | 'surge'

export default function Programmes() {
  const [activeTab, setActiveTab] = useState<ProgrammeType>('ripple')
  const [hoveredItem, setHoveredItem] = useState<{ type: string; value: string } | null>(null)
  const [showFloatingIndicator, setShowFloatingIndicator] = useState(false)

  // Read URL hash on mount and set active tab
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as ProgrammeType
    if (hash && ['ripple', 'current', 'tide', 'surge'].includes(hash)) {
      setActiveTab(hash)
    }
  }, [])

  // Show floating indicator when scrolling past first fold
  useEffect(() => {
    const handleScroll = () => {
      // Show indicator after scrolling past 500px (approximately past the programme cards)
      setShowFloatingIndicator(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const programmes = [
    {
      id: 'ripple' as ProgrammeType,
      name: 'RIPPLE',
      icon: Waves,
      gradient: 'from-blue-500 to-indigo-600',
      borderColor: 'ring-red-400',
      color: 'from-slate-700 to-slate-800',
      bgColor: 'from-blue-400 to-blue-600',
      imageUrl: '/assets/ripple-2.png'
    },
    {
      id: 'current' as ProgrammeType,
      name: 'CURRENT',
      icon: Zap,
      gradient: 'from-purple-500 to-purple-700',
      borderColor: 'ring-pink-500',
      color: 'from-slate-700 to-slate-800',
      bgColor: 'from-indigo-500 to-purple-600',
      imageUrl: '/assets/current-2.png'
    },
    {
      id: 'tide' as ProgrammeType,
      name: 'TIDE',
      icon: Wind,
      gradient: 'from-red-400 to-pink-500',
      borderColor: 'ring-purple-500',
      color: 'from-slate-700 to-slate-800',
      bgColor: 'from-purple-500 to-pink-600',
      imageUrl: '/assets/Tide-2.png'
    },
    {
      id: 'surge' as ProgrammeType,
      name: 'SURGE',
      icon: Sparkles,
      gradient: 'from-orange-400 to-orange-600',
      borderColor: 'ring-blue-500',
      color: 'from-slate-700 to-slate-800',
      bgColor: 'from-pink-500 to-red-600',
      imageUrl: '/assets/surge-2.png'
    },
  ]

  // RIPPLE Programme Content
  const rippleContent = {
    youAreHere: {
      title: "You're here if ...",
      points: [
        'Core design confidence: Low',
        'Design thinking confidence: Low',
        'Design leadership confidence: Low',
        'Current designation: moving into UX/UI/ Product Design (from graphic design or other design backgrounds)',
        '',
        'Tools are fine; systems are missing',
        'Portfolio doesn\'t carry weight',
        'Interviews feel heavy',
      ],
    },
    youWantToAchieve: {
      title: 'You want to achieve',
      points: [
        'Compensation up to ₹15LPA',
        'Move into Junior designer roles',
        'End-to-end delivery confidence (Strategy → Research → UI etc',
        'Portfolio with depth',
        'Clarity on role paths, next steps, and AI empowerment',
      ],
    },
    whatWillHelp: {
      title: 'What will help?',
      description: 'Ripple is where you stop winging it with tools and build real craft + systems.\nNo wallpaper courses. No "finish and forget" badges. You\'ll do the work, show the evidence, and move with clarity.',
      methods: [
        'DWY (Done With You)',
        'Evidence based personal branding',
        'Core Design (STRDV)',
        'Systemic Foundations',
      ],
    },
    moreAbout: {
      title: 'More About Ripple',
      sections: [
        {
          title: 'Core Design (STRDV)',
          description: 'Practical, end-to-end design thinking with real artifacts.\n\nSTRDV: Sense (ecoystem) > Think (human + system) > Research > Design > Validate.',
        },
        {
          title: 'Systemic foundations',
          description: 'You\'ll stop shipping isolated screens and start thinking in systems.\n\nProblem arca, process handshakes, AI in practice, and UX writing',
        },
        {
          title: 'Evidence-based Personal branding',
          description: 'No reels. No fake authority. Your work becomes your brand.\n\nLinkedin positioning, ATS-ready resume, recruiter profiling, portfolio and compensation storytelling',
        },
      ],
    },
    tools: ['Calendly', 'Google Forms', 'SurveyMonkey', 'Dovetail', 'Hotjar', 'Microsoft Clarity'],
    achievements: {
      count: '1200 folks have achieved these goals using Ripple, and you can too, if',
      goals: [
        'You\'re okay with unlearning template thinking',
        'You\'re curious about how systems work',
        'You\'ll show up to clinics and ship evidence',
        'You want clarity + money + momentum, not more "courses"',
      ],
    },
    cta: {
      primary: 'Download free ebook',
      secondary: 'Book a free strategy call',
      secondaryDescription: 'Talk to someone with 10+ YOE in design',
    },
    closingNote: 'If you complete the mandatory activities and show up the way we ask, we\'ll keep supporting you until you hit your goals.',
    testimonial: 'Ripple seats are limited because DWY (Done With You) needs attention.\nIf you\'re serious about building momentum, we\'ll work with you.',
  }

  // CURRENT Programme Content
  const currentContent = {
    youAreHere: {
      title: "You're here if ...",
      points: [
        'Core design confidence: Medium → High',
        'Design thinking confidence: low → Medium',
        'Design leadership confidence: Low',
        'Current Designation: Designer (L1~L3), Sr. Designer, Design Specialist, Design Lead (anyone with at LOE in Product / System UI / UX)',
        'Current Comp: Above INR 8 LPA',
        '',
        'You feel stuck, underpaid, and maybe a little lost — they say I\'ve got an attitude',
        'You see big problems, but your market feels cheap and unreliable',
      ],
    },
    youWantToAchieve: {
      title: 'You want to achieve',
      points: [
        'Compensation up to ₹25 LPA',
        'Move into Design Lead, Principal, and Staff designer roles',
        'Use strategy: align designs using business thinking',
        'Be recognized as an AI-powered Design Staff (Subject Matter Expert)',
        'Become a known figure (Business RSTM / Business see Tech Marketing)',
        'Handle end-to-end needs',
        'Solve ambiguous, high-impact problems',
        'Deliver designs that blend UIs, ease and desire',
      ],
    },
    whatWillHelp: {
      title: 'What will help?',
      description: 'Current is where mid-career designers stop being execution and start becoming decision-makers.\nWe don\'t loop more tools. We help you connect design to business decisions, build systems and demonstrate value — not portfolios.',
      methods: [
        'DWY (Done With You)',
        'Evidence based personal branding',
        'Channel outreach',
        'Core Design (STRDV)',
        'Systemic Mastery / Deep Gen',
      ],
    },
    moreAbout: {
      title: 'More About Current',
      sections: [
        {
          title: 'Core Design (STRDV)',
          description: 'Common sense meets systems. You\'ll connect dots across research, strategy, and delivery.\n\nSTRDV: Sense (ecoystem) > Think (human + system) > Research > Design > Validate.',
        },
        {
          title: 'Systemic Mastery / Deep Gen',
          description: 'You\'ll learn to think and act like a design strategist.\n\nSystem thinking, Problem arc, Al + GPT, omni-channel experience, influencing cross-functional traceability and business KPIs, UX writing, Data-driven visualisation - building self defensible frameworks',
        },
        {
          title: 'Evidence-based Personal branding',
          description: 'Your growth stops being luck and starts being repeatable.\n\nPersonal assessments, positioning, storytelling, LinkedIn positioning, ATS-ready resume, recruiter profiling, brand voice memo... - brand built on facts, not fancy words',
        },
      ],
    },
    tools: ['Calendly', 'Google Forms', 'SurveyMonkey', 'Dovetail', 'Hotjar', 'Microsoft Clarity'],
    achievements: {
      count: '800 folks have achieved these goals using Current, and you can too, if you are ready to...',
      goals: [
        'Snap out of "just execution team"',
        'Do great work and explain why it matters',
        'Tie design back to design language',
        'Bodily wanting influence, recognition, and pay that reflects your efforts',
      ],
    },
    cta: {
      primary: 'Download free ebook',
      secondary: 'Book a free strategy call',
      secondaryDescription: 'Talk to someone with 10+ YOE in design',
    },
    closingNote: 'If you complete the mandatory activities and show up the way we ask, we\'ll keep supporting you until you hit your goals.',
    stats: {
      satisfaction: '9.6 /10\nSelf & Curriculum satisfaction',
      primaryGoal: '67%\nAchieved primary goal',
    },
    testimonial: 'You\'ve built skill. Now it\'s time to build influence.\nIf you\'re ready to stop being a passenger in projects and start steering them this is where you begin.',
  }

  // TIDE Programme Content
  const tideContent = {
    youAreHere: {
      title: "You're here if ...",
      points: [
        'Core design confidence: Medium →',
        'High',
        'Strategic mastery confidence: Medium → High',
        'High leadership confidence',
        'Current designation: Mn + YOE (Design Leads, Staff, Principal Designers, AVP roles)',
        'Current Comp: Above INR 20 LPA',
        '',
        'You had great delivery credibility, label: but not sure how to move up',
        'You\'re thinking beyond conventional design, but not sure how to move up',
        'You\'re building teams but haven\'t built infrastructure',
        'You\'re doing the work of a leader but don\'t feel like one',
      ],
    },
    youWantToAchieve: {
      title: 'You want to achieve',
      points: [
        'Compensation above ₹25i LPA',
        'Move into Principal, Staff, Design Director, or VP designer',
        'Design influence (strategic, thoughtful, data-driven, growth-minded)',
        'Respect and projects - from OKRs to yearly reviews',
        'Manage teams, lead/hire org processes, and clearly identify',
        'Build design systems that EMU within your company',
        'Develop strong communication, business, and negotiation Hana',
      ],
    },
    whatWillHelp: {
      title: 'What will help?',
      description: 'Tide is where senior designers become decision executives. You stop chasing validation and start creating influence.\n\nWe focus less tools. We\'ll teach you to think in systems, lead people, run teams, and design maturity.\nYou\'ll learn to run design like a business — with data, influence, and executive clarity.',
      methods: [
        'DWY (Done With You)',
        'Systems Mastery',
        'Relational Mastery',
        'Core Design',
        'Visionary Mastery',
        'Executive personal branding',
      ],
    },
    moreAbout: {
      title: 'More About Tide',
      sections: [
        {
          title: 'Core Design',
          description: 'Strengthen fundamentals to lead with intelligence, not force.\n\nSTRDV: Sense (ecoystem) > Think (human + system) > Research > Design-led outcomes to influence org. decisions.',
        },
        {
          title: 'Systemic Mastery',
          description: 'Build frameworks and systems that connect departments and drive outcomes.\n\nCross-functional. Problem arc, Al + GPT, omni-channel experience, influencing cross-functional. Business KPIs, UX writing, Data-driven visualisation',
        },
        {
          title: 'Visionary Mastery',
          description: 'Design infrastructures that keeps your teams future-ready\n\nProject management, Design operations, Sustainability, global collaboration systems, influence OKRs, KPIs - not individuals',
        },
        {
          title: 'Relational Mastery',
          description: 'Lead people before projects\n\nStakeholder management, training design, building handware systems, team building, hiring - shape team culture that drives both delivery and development',
        },
        {
          title: 'Executive personal branding',
          description: 'Build a visible identity that speaks the language of leadership.\n\nCareer dashboards, Thought leadership strategy, storytelling, recruiter outreach, decision making, and advising designers across industries',
        },
      ],
    },
    tools: ['Calendly', 'Google Forms', 'SurveyMonkey', 'Dovetail', 'Hotjar', 'Microsoft Clarity'],
    achievements: {
      count: '186 folks have achieved these goals using Tide, and you can too, if you are ready to...',
      goals: [
        'Lead projects and govern approaches',
        'Scale impact from individual to team to organisation',
        'Ask for recognition, trust, and leverage in business decisions',
        'Build legacy, not burnout',
      ],
    },
    cta: {
      primary: 'Download free ebook',
      secondary: 'Book a free strategy call',
      secondaryDescription: 'Talk to someone with 10+ YOE in design',
    },
    closingNote: 'If you complete the mandatory activities and show up the way we ask, we\'ll keep supporting you until you hit your goals.',
    stats: {
      satisfaction: '8.1 /10\nSelf & Curriculum satisfaction',
      primaryGoal: '73%\nAchieved primary goal',
    },
    testimonial: 'You\'ve mastered craft. Now master influence.\nIf you\'re ready to make design a business function - not a service role -',
  }

  // SURGE Programme Content
  const surgeContent = {
    youAreHere: {
      title: "You're here if ...",
      points: [
        'You represent a growing business or organisation',
        'You\'re in need of design support for a new launch, major revamp, or turnaround project',
        'You\'re planning to expand design capacity — including the right team, tools, and infrastructure',
        'You don\'t have time to hire, train, or manage — but need results fast',
        'You want expert hands doing design while you focus on business growth',
      ],
    },
    youWantToAchieve: {
      title: 'You want to achieve',
      points: [
        'Faster go-to-market with design that supports business momentum',
        'High-quality, strategic design outcomes without managing in-house teams',
        'A reliable design backbone — always-on, scalably integrated, zero-overhead',
        'Design aligned with goals, strategy, or research operations',
        'Market-leading product experiences that impact conversion, retention, and growth',
      ],
    },
    whatWillHelp: {
      title: 'What will help?',
      description: 'Surge is a Done For You design partnership.\nWe become your extended design wing - the expert team that drives execution, strategy, and measurable results.',
      sections: [
        {
          title: 'Dedicated team',
          description: 'A handpicked group of senior designers, strategists, and design ops — fully integrated into your workflow, aligned with your business goals',
        },
        {
          title: 'Strategic Execution',
          points: [
            'Product strategy',
            'Design systems',
            'Research programs',
            'Content & experience',
            'Design + AI integration',
          ],
        },
        {
          title: 'Collaboration',
          points: [
            'Weekly reviews and progress syncs',
            'Strategic check-ins',
            'Infrastructure and communication channels',
            'Ownership on deliverables, accountability on outcomes',
          ],
        },
      ],
    },
    tools: ['Calendly', 'Google Forms', 'SurveyMonkey', 'Dovetail', 'Hotjar', 'Microsoft Clarity'],
    achievements: {
      count: '100+ teams have achieved there goals with us, and you can too.',
    },
    cta: {
      primary: 'Download free guide',
      secondary: 'Book a consultation',
      secondaryDescription: 'To get in touch please',
    },
    closingNote: 'You get results — or we work until you do.',
    testimonial: 'When design stops being a department and becomes a business advantage - that\'s Surge. If you\'re ready for a design team that works like it\'s your own, let\'s build something measurable.',
  }

  const getActiveContent = () => {
    switch (activeTab) {
      case 'ripple':
        return rippleContent
      case 'current':
        return currentContent
      case 'tide':
        return tideContent
      case 'surge':
        return surgeContent
      default:
        return rippleContent
    }
  }

  const content = getActiveContent()

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Floating Programme Indicator */}
      <div className={`fixed top-24 right-6 z-40 hidden lg:block transition-all duration-300 ${
        showFloatingIndicator ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'
      }`}>
        <div className={`bg-gradient-to-r ${programmes.find(p => p.id === activeTab)?.gradient} text-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-all duration-300`}>
          {(() => {
            const Icon = programmes.find(p => p.id === activeTab)?.icon
            return Icon ? <Icon className="w-5 h-5" /> : null
          })()}
          <span className="font-bold text-sm tracking-wide">
            {programmes.find(p => p.id === activeTab)?.name}
          </span>
        </div>
      </div>

      {/* Programme Cards */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          {/* Desktop: 4 cards in a row */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {programmes.map((programme) => {
              const Icon = programme.icon
              return (
                <button
                  key={programme.id}
                  onClick={() => setActiveTab(programme.id)}
                  className={`relative h-80 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    activeTab === programme.id
                      ? `ring-4 ${programme.borderColor} shadow-2xl scale-105`
                      : 'hover:scale-102 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${programme.gradient} pointer-events-none`}></div>

                  {/* Pattern - Different for each card */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {programme.id === 'ripple' && (
                      <>
                        {/* Concentric circles for Ripple */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/15"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-white/15"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/20"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/20"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10"></div>
                      </>
                    )}
                    {programme.id === 'current' && (
                      <>
                        {/* Curved wave lines for Current */}
                        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                          <path d="M 0 100 Q 75 80, 150 100 T 300 100" stroke="white" strokeWidth="1.5" fill="none" />
                          <path d="M 0 140 Q 75 120, 150 140 T 300 140" stroke="white" strokeWidth="1.5" fill="none" />
                          <path d="M 0 180 Q 75 160, 150 180 T 300 180" stroke="white" strokeWidth="1.5" fill="none" />
                          <path d="M 0 220 Q 75 200, 150 220 T 300 220" stroke="white" strokeWidth="1.5" fill="none" />
                        </svg>
                      </>
                    )}
                    {programme.id === 'tide' && (
                      <>
                        {/* Ocean tide wave pattern */}
                        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                          {/* Flowing ocean waves */}
                          <path d="M 0 180 Q 50 160, 100 180 T 200 180 T 300 180 T 400 180" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M 0 220 Q 50 200, 100 220 T 200 220 T 300 220 T 400 220" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M 0 260 Q 50 240, 100 260 T 200 260 T 300 260 T 400 260" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M 0 300 Q 50 280, 100 300 T 200 300 T 300 300 T 400 300" stroke="white" strokeWidth="1.5" fill="none" />
                        </svg>
                      </>
                    )}
                    {programme.id === 'surge' && (
                      <>
                        {/* Curved wave lines for Surge */}
                        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                          <path d="M 50 150 Q 100 100, 150 150 T 250 150" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M 50 180 Q 100 130, 150 180 T 250 180" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M 50 210 Q 100 160, 150 210 T 250 210" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                      </>
                    )}
                  </div>

                  {/* Icon at Top */}
                  <div className="absolute top-8 left-8 z-10 pointer-events-none">
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Program Name at Bottom Left */}
                  <div className="absolute bottom-8 left-8 pointer-events-none">
                    <h3 className="text-3xl font-bold text-white tracking-wide">
                      {programme.name}
                    </h3>
                  </div>

                  {/* Active Indicator */}
                  {activeTab === programme.id && (
                    <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full shadow-lg pointer-events-none"></div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Mobile/Tablet: Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-2 sm:-mx-4 px-2 sm:px-4">
            <div className="flex gap-4 min-w-max pb-4">
              {programmes.map((programme) => {
                const Icon = programme.icon
                return (
                  <button
                    key={programme.id}
                    onClick={() => setActiveTab(programme.id)}
                    className={`relative w-72 h-80 rounded-3xl overflow-hidden flex-shrink-0 transition-all duration-300 cursor-pointer ${
                      activeTab === programme.id
                        ? `ring-4 ${programme.borderColor} shadow-2xl scale-105`
                        : 'shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${programme.gradient} pointer-events-none`}></div>

                    {/* Pattern - Different for each card */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {programme.id === 'ripple' && (
                        <>
                          {/* Concentric circles for Ripple */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/15"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-white/15"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/20"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/20"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10"></div>
                        </>
                      )}
                      {programme.id === 'current' && (
                        <>
                          {/* Curved wave lines for Current */}
                          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 0 100 Q 75 80, 150 100 T 300 100" stroke="white" strokeWidth="1.5" fill="none" />
                            <path d="M 0 140 Q 75 120, 150 140 T 300 140" stroke="white" strokeWidth="1.5" fill="none" />
                            <path d="M 0 180 Q 75 160, 150 180 T 300 180" stroke="white" strokeWidth="1.5" fill="none" />
                            <path d="M 0 220 Q 75 200, 150 220 T 300 220" stroke="white" strokeWidth="1.5" fill="none" />
                          </svg>
                        </>
                      )}
                      {programme.id === 'tide' && (
                        <>
                          {/* Ocean tide wave pattern */}
                          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            {/* Flowing ocean waves */}
                            <path d="M 0 180 Q 50 160, 100 180 T 200 180 T 300 180 T 400 180" stroke="white" strokeWidth="2" fill="none" />
                            <path d="M 0 220 Q 50 200, 100 220 T 200 220 T 300 220 T 400 220" stroke="white" strokeWidth="2" fill="none" />
                            <path d="M 0 260 Q 50 240, 100 260 T 200 260 T 300 260 T 400 260" stroke="white" strokeWidth="2" fill="none" />
                            <path d="M 0 300 Q 50 280, 100 300 T 200 300 T 300 300 T 400 300" stroke="white" strokeWidth="1.5" fill="none" />
                          </svg>
                        </>
                      )}
                      {programme.id === 'surge' && (
                        <>
                          {/* Curved wave lines for Surge */}
                          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 50 150 Q 100 100, 150 150 T 250 150" stroke="white" strokeWidth="2" fill="none" />
                            <path d="M 50 180 Q 100 130, 150 180 T 250 180" stroke="white" strokeWidth="2" fill="none" />
                            <path d="M 50 210 Q 100 160, 150 210 T 250 210" stroke="white" strokeWidth="2" fill="none" />
                          </svg>
                        </>
                      )}
                    </div>

                    {/* Icon at Top */}
                    <div className="absolute top-8 left-8 z-10 pointer-events-none">
                      <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Program Name at Bottom Left */}
                    <div className="absolute bottom-8 left-8 pointer-events-none">
                      <h3 className="text-3xl font-bold text-white tracking-wide">
                        {programme.name}
                      </h3>
                    </div>

                    {/* Active Indicator */}
                    {activeTab === programme.id && (
                      <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full shadow-lg pointer-events-none"></div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* You're Here & You Want to Achieve Section */}
      <section className="py-2 lg:py-2 bg-white relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          {/* Flow Diagram */}
          <div className="relative py-2">
            <div className="grid grid-cols-[1fr_200px_1fr] gap-4">
              {/* Problems/Points - Left Side */}
              <div className="space-y-3">
                <h3 className="text-lg text-black-900 font-semibold mb-4">{content.youAreHere.title}</h3>
                {content.youAreHere.points.map((point, pIndex) => {
                  if (!point) return <div key={pIndex} className="h-2"></div>;

                  // Define connection mapping (after filtering empty strings)
                  const connections: { [key: number]: number[] } = {
                    0: [2, 3], // Core design confidence -> End-to-end delivery, Portfolio with depth
                    1: [2, 4], // Design thinking confidence -> End-to-end delivery, Clarity on role paths
                    2: [1, 4], // Design leadership confidence -> Move into Junior roles, Clarity on role paths
                    3: [0, 1], // Current designation -> Compensation, Move into Junior roles
                    4: [0, 3], // Tools are fine; systems are missing -> Compensation, Portfolio with depth
                    5: [0, 3], // Portfolio doesn't carry weight -> Compensation, Portfolio with depth
                    6: [3, 4], // Interviews feel heavy -> Portfolio with depth, Clarity on role paths
                  };

                  // Check if this point is connected to the hovered goal
                  const isConnectedToHoveredGoal = hoveredItem?.type === 'goal' &&
                    connections[pIndex]?.some((goalIdx) =>
                      content.youWantToAchieve.points[goalIdx] === hoveredItem?.value
                    );

                  const isDirectlyHovered = hoveredItem?.type === 'point' && hoveredItem?.value === point;
                  const isHighlighted = isDirectlyHovered || isConnectedToHoveredGoal;

                  return (
                    <div
                      key={pIndex}
                      className={`border-2 rounded-lg p-3 text-right transition-all cursor-pointer group ${
                        isHighlighted
                          ? 'bg-red-500 border-red-500 shadow-lg'
                          : hoveredItem
                          ? 'bg-red-50 border-red-200 opacity-40'
                          : 'bg-red-50 border-red-200 hover:bg-red-500 hover:border-red-500'
                      }`}
                      onMouseEnter={() => setHoveredItem({ type: 'point', value: point })}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <p className={`text-sm transition-colors ${
                        isHighlighted ? 'text-white' : 'text-gray-800 group-hover:text-white'
                      }`}>{point}</p>
                    </div>
                  );
                })}
              </div>

              {/* Connection Lines - Middle */}
              <div className="flex items-center justify-center">
                <div className="w-full h-full relative">
                  <svg className="w-full h-full absolute inset-0" style={{ minHeight: '600px' }}>
                    <defs>
                      <linearGradient id={`gradient-${activeTab}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.3 }} />
                        <stop offset="100%" style={{
                          stopColor: activeTab === 'ripple' ? '#3b82f6' :
                                     activeTab === 'current' ? '#a855f7' :
                                     activeTab === 'tide' ? '#f87171' : '#fb923c',
                          stopOpacity: 0.3
                        }} />
                      </linearGradient>
                    </defs>
                    {(() => {
                      // Define specific connections: problem index -> goal indices (after filtering empty strings)
                      const connections: { [key: number]: number[] } = {
                        0: [2, 3], // Core design confidence -> End-to-end delivery, Portfolio with depth
                        1: [2, 4], // Design thinking confidence -> End-to-end delivery, Clarity on role paths
                        2: [1, 4], // Design leadership confidence -> Move into Junior roles, Clarity on role paths
                        3: [0, 1], // Current designation -> Compensation, Move into Junior roles
                        4: [0, 3], // Tools are fine; systems are missing -> Compensation, Portfolio with depth
                        5: [0, 3], // Portfolio doesn't carry weight -> Compensation, Portfolio with depth
                        6: [3, 4], // Interviews feel heavy -> Portfolio with depth, Clarity on role paths
                      };

                      const filteredPoints = content.youAreHere.points.filter(p => p);
                      const paths: JSX.Element[] = [];

                      Object.entries(connections).forEach(([pointIndexStr, goalIndices]) => {
                        const pointIndex = parseInt(pointIndexStr);
                        const point = filteredPoints[pointIndex];

                        goalIndices.forEach((goalIndex) => {
                          const goal = content.youWantToAchieve.points[goalIndex];
                          const pointY = 60 + pointIndex * (600 / filteredPoints.length);
                          const goalY = 60 + goalIndex * (600 / content.youWantToAchieve.points.length);

                          const isHighlighted =
                            (hoveredItem?.type === 'point' && hoveredItem?.value === point) ||
                            (hoveredItem?.type === 'goal' && hoveredItem?.value === goal);

                          paths.push(
                            <path
                              key={`${pointIndex}-${goalIndex}`}
                              d={`M 0,${pointY} C 100,${pointY} 100,${goalY} 200,${goalY}`}
                              fill="none"
                              stroke={isHighlighted ? (
                                activeTab === 'ripple' ? '#3b82f6' :
                                activeTab === 'current' ? '#a855f7' :
                                activeTab === 'tide' ? '#f87171' : '#fb923c'
                              ) : `url(#gradient-${activeTab})`}
                              strokeWidth={isHighlighted ? 3 : 1.5}
                              opacity={isHighlighted ? 1 : hoveredItem ? 0.2 : 0.5}
                              className="transition-all"
                            />
                          );
                        });
                      });

                      return paths;
                    })()}
                  </svg>
                </div>
              </div>

              {/* Goals - Right Side */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold  text-black-200 mb-4">{content.youWantToAchieve.title}</h3>
                {content.youWantToAchieve.points.map((goal, gIndex) => {
                  // Define connection mapping (after filtering empty strings)
                  const connections: { [key: number]: number[] } = {
                    0: [2, 3], // Core design confidence -> End-to-end delivery, Portfolio with depth
                    1: [2, 4], // Design thinking confidence -> End-to-end delivery, Clarity on role paths
                    2: [1, 4], // Design leadership confidence -> Move into Junior roles, Clarity on role paths
                    3: [0, 1], // Current designation -> Compensation, Move into Junior roles
                    4: [0, 3], // Tools are fine; systems are missing -> Compensation, Portfolio with depth
                    5: [0, 3], // Portfolio doesn't carry weight -> Compensation, Portfolio with depth
                    6: [3, 4], // Interviews feel heavy -> Portfolio with depth, Clarity on role paths
                  };

                  // Check if this goal is connected to the hovered point
                  const isConnectedToHoveredPoint = hoveredItem?.type === 'point' &&
                    Object.entries(connections).some(([pointIdx, goalIndices]) =>
                      goalIndices.includes(gIndex) &&
                      content.youAreHere.points.filter(p => p)[parseInt(pointIdx)] === hoveredItem?.value
                    );

                  const isDirectlyHovered = hoveredItem?.type === 'goal' && hoveredItem?.value === goal;
                  const isHighlighted = isDirectlyHovered || isConnectedToHoveredPoint;

                  const bgColor = activeTab === 'ripple' ? 'bg-blue-50' :
                                activeTab === 'current' ? 'bg-purple-50' :
                                activeTab === 'tide' ? 'bg-red-50' : 'bg-orange-50';

                  const borderColor = activeTab === 'ripple' ? 'border-blue-200' :
                                    activeTab === 'current' ? 'border-purple-200' :
                                    activeTab === 'tide' ? 'border-red-200' : 'border-orange-200';

                  const activeBg = activeTab === 'ripple' ? 'bg-blue-500' :
                                 activeTab === 'current' ? 'bg-purple-500' :
                                 activeTab === 'tide' ? 'bg-pink-500' : 'bg-orange-500';

                  const activeBorder = activeTab === 'ripple' ? 'border-blue-500' :
                                     activeTab === 'current' ? 'border-purple-500' :
                                     activeTab === 'tide' ? 'border-pink-500' : 'border-orange-500';

                  const hoverStyles = activeTab === 'ripple' ? 'hover:bg-blue-500 hover:border-blue-500' :
                                    activeTab === 'current' ? 'hover:bg-purple-500 hover:border-purple-500' :
                                    activeTab === 'tide' ? 'hover:bg-pink-500 hover:border-pink-500' : 'hover:bg-orange-500 hover:border-orange-500';

                  return (
                    <div
                      key={gIndex}
                      className={`border-2 rounded-lg p-3 transition-all cursor-pointer group ${
                        isHighlighted
                          ? `${activeBg} ${activeBorder} shadow-lg`
                          : hoveredItem
                          ? `${bgColor} ${borderColor} opacity-40`
                          : `${bgColor} ${borderColor} ${hoverStyles}`
                      }`}
                      onMouseEnter={() => setHoveredItem({ type: 'goal', value: goal })}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <p className={`text-sm transition-colors ${
                        isHighlighted ? 'text-white' : 'text-gray-800 group-hover:text-white'
                      }`}>{goal}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Will Help Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-header mb-6 text-center">
            {content.whatWillHelp.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-text-body leading-relaxed mb-8 whitespace-pre-line text-center">
              {content.whatWillHelp.description}
            </p>

            {activeTab !== 'surge' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {(content as any).whatWillHelp.methods?.map((method: string, index: number) => {
                  // Icons for each programme
                  const methodIcons = {
                    ripple: [Users, Award, Lightbulb, Target],
                    current: [Rocket, TrendingUp, Target, Award],
                    tide: [Target, Users, Lightbulb, Award]
                  };
                  const icons = methodIcons[activeTab as keyof typeof methodIcons];
                  const Icon = icons ? icons[index] : null;

                  const colorMap = {
                    ripple: { border: 'border-blue-100 hover:border-blue-300', icon: 'text-blue-500', text: 'text-blue-600' },
                    current: { border: 'border-purple-100 hover:border-purple-300', icon: 'text-purple-500', text: 'text-purple-600' },
                    tide: { border: 'border-red-100 hover:border-red-300', icon: 'text-red-400', text: 'text-red-500' }
                  };
                  const colors = colorMap[activeTab as keyof typeof colorMap];

                  return (
                    <div
                      key={index}
                      className={`bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-200 ${
                        colors ? `border-2 ${colors.border}` : ''
                      }`}
                    >
                      {Icon && colors && (
                        <div className="flex justify-center mb-3">
                          <Icon className={`w-8 h-8 ${colors.icon}`} />
                        </div>
                      )}
                      <p className={`text-sm font-semibold ${colors ? colors.text : 'text-text-header'}`}>
                        {method}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === 'surge' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {(content as any).whatWillHelp.sections?.map((section: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-text-header mb-4">{section.title}</h3>
                    {section.description && (
                      <p className="text-text-body leading-relaxed">{section.description}</p>
                    )}
                    {section.points && (
                      <ul className="space-y-2">
                        {section.points.map((point: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">●</span>
                            <span className="text-text-body">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="text-center mt-8">
              <a
                href={process.env.NEXT_PUBLIC_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 ${
                  activeTab === 'ripple' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' :
                  activeTab === 'current' ? 'bg-gradient-to-r from-purple-500 to-purple-700' :
                  activeTab === 'tide' ? 'bg-gradient-to-r from-red-400 to-pink-500' :
                  activeTab === 'surge' ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                  `bg-gradient-to-r ${programmes.find(p => p.id === activeTab)?.bgColor}`
                }`}
              >
                Book a free strategy call
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More About Section */}
      {activeTab !== 'surge' && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-header mb-12 text-center">
              {(content as any).moreAbout.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(content as any).moreAbout.sections.map((section: any, index: number) => {
                // Icons for each programme's "More About" sections
                const aboutIcons = {
                  ripple: [BookOpen, Target, Award],
                  current: [Rocket, Lightbulb, TrendingUp],
                  tide: [Target, Users, Award]
                };
                const icons = aboutIcons[activeTab as keyof typeof aboutIcons];
                const Icon = icons ? icons[index] : null;

                const styleMap = {
                  ripple: { bg: 'bg-gradient-to-br from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'text-blue-500', title: 'text-blue-600' },
                  current: { bg: 'bg-gradient-to-br from-purple-50 to-indigo-50', border: 'border-purple-200', icon: 'text-purple-500', title: 'text-purple-600' },
                  tide: { bg: 'bg-gradient-to-br from-red-50 to-pink-50', border: 'border-red-200', icon: 'text-red-400', title: 'text-red-500' }
                };
                const styles = styleMap[activeTab as keyof typeof styleMap];

                return (
                  <div
                    key={index}
                    className={`rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${
                      styles
                        ? `${styles.bg} border-2 ${styles.border}`
                        : 'bg-gray-50 border-2 border-gray-100'
                    }`}
                  >
                    {Icon && styles && (
                      <div className="mb-4">
                        <Icon className={`w-10 h-10 ${styles.icon}`} />
                      </div>
                    )}
                    <h3 className={`text-xl font-bold mb-4 ${styles ? styles.title : 'text-text-header'}`}>
                      {section.title}
                    </h3>
                    <p className="text-text-body leading-relaxed whitespace-pre-line">
                      {section.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Tools Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
          <h3 className="text-2xl font-bold text-text-header mb-6 text-center">
            {activeTab === 'surge' ? 'Tools that are used' : "Tools You'll Actually Use"}
          </h3>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {content.tools.map((tool, index) => {
              const logoMap: { [key: string]: string } = {
                'Calendly': '/assets/brands/Calendly.svg',
                'Google Forms': '/assets/brands/googleForms.webp',
                'SurveyMonkey': '/assets/brands/surveyMonkey.webp',
                'Dovetail': '/assets/brands/dovetail.png',
                'Hotjar': '/assets/brands/hotjar.webp',
                'Microsoft Clarity': '/assets/brands/clarity.png',
              };

              return (
                <div
                  key={index}
                  className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center"
                  style={{ minWidth: '120px', minHeight: '60px' }}
                >
                  <img
                    src={logoMap[tool] || ''}
                    alt={tool}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-header mb-8 text-center">
            {content.achievements.count}
          </h2>
          {(content.achievements as any).goals && (
            <ul className="space-y-4 mb-12">
              {(content.achievements as any).goals.map((goal: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-6 h-6 mt-1 flex-shrink-0 ${
                    activeTab === 'ripple' ? 'text-blue-500' :
                    activeTab === 'current' ? 'text-purple-500' :
                    activeTab === 'tide' ? 'text-red-400' :
                    activeTab === 'surge' ? 'text-orange-500' :
                    'text-primary'
                  }`} />
                  <span className="text-lg text-text-body leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-sm text-text-body mb-3">To help you get started today</p>
              <button className={`w-full text-white px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold ${
                activeTab === 'ripple' ? 'bg-gradient-to-r from-indigo-600 to-blue-500' :
                activeTab === 'current' ? 'bg-gradient-to-r from-purple-700 to-purple-500' :
                activeTab === 'tide' ? 'bg-gradient-to-r from-pink-500 to-red-400' :
                activeTab === 'surge' ? 'bg-gradient-to-r from-orange-600 to-orange-400' :
                'bg-text-header hover:bg-opacity-90'
              }`}>
                {activeTab === 'surge' ? 'Download free guide' : content.cta.primary}
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-text-body mb-3">
                {activeTab === 'surge' ? 'To get in touch please' : content.cta.secondaryDescription}
              </p>
              <a
                href={process.env.NEXT_PUBLIC_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-white px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold ${
                  activeTab === 'ripple' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' :
                  activeTab === 'current' ? 'bg-gradient-to-r from-purple-500 to-purple-700' :
                  activeTab === 'tide' ? 'bg-gradient-to-r from-red-400 to-pink-500' :
                  activeTab === 'surge' ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                  `bg-gradient-to-r ${programmes.find(p => p.id === activeTab)?.bgColor}`
                }`}
              >
                {activeTab === 'surge' ? 'Book a consultation' : content.cta.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <p className="text-lg text-text-body leading-relaxed mb-8">{content.closingNote}</p>

          {/* Image Placeholder */}
          {/* <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300 mx-auto max-w-2xl">
            <div className="text-center">
              <div className="text-4xl mb-2">🖼️</div>
              <p className="text-sm font-medium text-gray-500">Image placeholder</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Stats Section (for Current and Tide) */}
      {(activeTab === 'current' || activeTab === 'tide') && (content as any).stats && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
            <h3 className="text-2xl font-bold text-text-header mb-8 text-center">
              So many goals achieved, wish we could capture all there smiles, but here are a few
            </h3>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-text-header mb-2">
                  {(content as any).stats.satisfaction.split('\n')[0]}
                </p>
                <p className="text-text-body">{(content as any).stats.satisfaction.split('\n')[1]}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-text-header mb-2">
                  {(content as any).stats.primaryGoal.split('\n')[0]}
                </p>
                <p className="text-text-body">{(content as any).stats.primaryGoal.split('\n')[1]}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Testimonial Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border-4 border-dashed border-gray-400 shadow-xl">
            <div className="text-center">
              <div className="text-6xl mb-4">🎥</div>
              <p className="text-xl font-semibold text-gray-600">Video testimonial goes here...</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final Testimonial */}
      <section className={`py-16 bg-gradient-to-br ${programmes.find(p => p.id === activeTab)?.bgColor}`}>
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <p className="text-xl sm:text-2xl text-white leading-relaxed mb-8 whitespace-pre-line">
            {content.testimonial}
          </p>
          <a
            href={process.env.NEXT_PUBLIC_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg ${
              activeTab === 'tide'
                ? 'bg-gradient-to-r from-red-400 to-pink-500 text-white hover:from-red-500 hover:to-pink-600'
                : 'bg-white text-text-header hover:bg-gray-50'
            }`}
          >
            {activeTab === 'surge' ? 'Book a consultation' : 'Book a free strategy call'}
            <span>→</span>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-header mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {activeTab === 'ripple' && (
              <>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Can I do this while working full-time?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    What if I'm switching from another role (marketing, sales, dev)?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Will I get a portfolio by the end?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Is there job support?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    What if I finish but still need help?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Do you issue certificates?
                  </summary>
                </details>
              </>
            )}
            {activeTab === 'current' && (
              <>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Can I do this while working full-time?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Will this help me become a design lead or AVP?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Do I need to know Al or system thinking before this?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Will you help me with real projects?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    What if I finish the 3 months and still need help?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Do you issue certificates?
                  </summary>
                </details>
              </>
            )}
            {activeTab === 'tide' && (
              <>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Can I do this while working full-time?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Will this help me become a design head or AVP?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Will I get guidance for remote management and negotiation?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    What if I finish but don't reach my leadership goal?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Do I need to know Al and systems before joining?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Do you issue certificates?
                  </summary>
                </details>
              </>
            )}
            {activeTab === 'surge' && (
              <>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Is this a Done For You service?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Can you align with our internal tech and marketing teams?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Do you handle both UX, UI and development?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    What if my project evolves mid-way?
                  </summary>
                </details>
                <details className="bg-white rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm">
                  <summary className="font-semibold text-text-header text-xl">
                    Can we retain you monthly?
                  </summary>
                </details>
              </>
            )}
          </div>
          <div className="text-center mt-8">
            <Link href="/faqs" className="text-primary font-semibold hover:text-opacity-80">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
