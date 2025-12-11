"use client";

import { useState, useEffect, useRef } from "react";
import { useProgramRecommendation } from "@/contexts/ProgramRecommendationContext";
import { ChevronLeft, ChevronRight, CheckCircle2, Target, Sparkles, Waves, Zap, Wind } from "lucide-react";

type TabType = "ripple" | "current" | "tide" | "surge";

type TabConfig = {
  id: TabType;
  name: string;
  icon: any;
  gradient: string;
};

export default function GrowthJourneySection() {
  const { recommendedProgram, userProfile } = useProgramRecommendation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasAutoSelected, setHasAutoSelected] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const tabs: TabConfig[] = [
    {
      id: "ripple",
      name: "Ripple",
      icon: Waves,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: "current",
      name: "Current",
      icon: Zap,
      gradient: "from-purple-500 to-purple-700"
    },
    {
      id: "tide",
      name: "Tide",
      icon: Wind,
      gradient: "from-red-400 to-pink-500"
    },
    {
      id: "surge",
      name: "Surge",
      icon: Sparkles,
      gradient: "from-orange-400 to-orange-600"
    },
  ];

  const content = {
    ripple: {
      title: "You're here if...",
      points: [
        "Core design confidence: Low to Medium (Feeling like an imposter)",
        "Systemic mastery confidence: Low",
        "Design leadership confidence: Low",
        "Current designation: Moving into UX/UI, Product, Visual designer Level 1, 2 , 3 positions (From non-design or other design backgrounds)",
        "Tools are fine, systems are missing",
        "Portfolio doesn't show weight",
        "Interviews feel heavy",
      ],
      goals: [
        "Earn compensation up to 15 LPA",
        "A job-ready real portfolio with real evidence",
        "End-to-end delivery confidence (Strategy → research → UI → evaluation)",
        "Clarity on role paths, next steps, and AI empowerment",
      ],
      help: [
        "Done with you (DWY)",
        "Core Design (STRDV Model)",
        "Systemic foundations",
        "Evidence based personal branding",
      ],
      cta: "Start Your Journey",
      subtitle: undefined
    },
    current: {
      title: "You're here if...",
      points: [
        "Core design confidence: Medium to High",
        "Systemic mastery confidence: Low",
        "Design leadership confidence: Low",
        "Current designation: With minimum 2 years of experience. Senior, Specialists, Lead Designers in UX, UI, Product and Visual",
        "Not enjoying the limited authority - Feeling like a label-sake designer",
        "Creativity and innovation is sidelined. They-Say-I-Do is going on",
      ],
      goals: [
        "Earn compensation above 32LPA",
        "Get into Senior, Lead, Principal, and Staff Designer positions",
        "Drive decisions using business levers",
        "Easily communicate with Cross-functional teams",
        "Solve complex (data & logic) problems and deliver desirable solutions",
        "Handle end-to-end project needs: Strategy + Research + Delivery + Innovation + AI + Drive business",
      ],
      help: [
        "Done with you (DWY)",
        "Core Design (STRDV Model)",
        "Systemic Mastery (a.k.a Deep generalisation)",
        "Visionary foundations",
        "Relational foundations",
        "Evidence based personal branding + Channel outreach",
      ],
      cta: "Advance Your Career",
      subtitle: undefined
    },
    tide: {
      title: "You're here if...",
      points: [
        "Core design confidence: High",
        "Systemic mastery confidence: Medium to High",
        "Design leadership confidence: Medium",
        "Current designation: With minimum 5 years of experience. Lead, Staff, Principal, Manager, AVP/Director/VP, HOD",
        "Experiencing highly comp performance appraisals with less opportunities open in the market",
        "Has hit the ceiling - Can't see what's next",
      ],
      goals: [
        "Earn compensation above 32LPA",
        "Get into leadership and senior leadership positions",
        "Drive cross functional decision making",
        "Setup and manage DABU (Design As a Business Unit) with infrastructure, staff, processes, training and project management",
        "Display executive level communication and storytelling abilities",
        "Handle conflicts, manage delegation, and build trust within and outside the team",
      ],
      help: [
        "Done With You (DWY)",
        "Systemic Mastery (a.k.a Deep generalisation)",
        "Visionary Mastery (a.k.a Organisational design maturity)",
        "Relational Mastery (a.k.a. Design leadership)",
        "Executive personal branding",
      ],
      cta: "Lead with Confidence",
      subtitle: undefined
    },
    surge: {
      title: "This is for an organisational representative or business owner with orgs monthly revenue above 10Lakhs",
      points: [],
      goals: [
        "Design support on new project initiative or need a few more pair of hands to support a revamping project",
      ],
      help: [
        "DFY-DAAS: Done For You - Design As a Service",
        "Instead of training your team or hiring designers, we become your design partners. Get our design experts work on your challenges",
        "Whether you need to ship a MVP, redesign your product, or scale design capacity, we will help you deliver strategic, high-quality work.",
      ],
      cta: "Book a call with us",
      subtitle: "With design experts having 12+ years of real experience"
    },
  };

  // Auto-select recommended program when available
  useEffect(() => {
    if (recommendedProgram && !hasAutoSelected) {
      const index = tabs.findIndex(tab => tab.id === recommendedProgram);
      if (index !== -1) {
        scrollToIndex(index);
        setHasAutoSelected(true);
      }
    }
  }, [recommendedProgram, hasAutoSelected]);

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.scrollWidth / tabs.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < tabs.length - 1) scrollToIndex(activeIndex + 1);
  };

  return (
    <section
      id="growth-journey-section"
      className="py-16 lg:py-24 bg-gray-900 scroll-mt-20 relative overflow-hidden"
    >
      {/* Spotlight Effect from Top */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
            Your growth journey with us - From Ripple to Surge
          </h2>
          <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto">
            Navigate through the stages of design mastery
          </p>
        </div>

        {/* Personalized Banner */}
        {recommendedProgram && userProfile?.role && userProfile?.experience && userProfile?.goal && (
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <p className="text-slate-800 text-sm sm:text-base bg-white py-3 px-4 sm:px-6 rounded-xl shadow-lg border border-gray-200">
              Based on your profile:{" "}
              <span className="font-semibold text-primary">
                {userProfile.role}
              </span>{" "}
              with{" "}
              <span className="font-semibold text-primary">
                {userProfile.experience} years experience
              </span>
            </p>
          </div>
        )}

        {/* ================= MOBILE VERTICAL TIMELINE ================= */}
        <div className="md:hidden space-y-8">
          {tabs.map((stage, index) => {
            const stageContent = content[stage.id];
            const StageIcon = stage.icon;

            return (
              <div key={stage.id} className="relative">
                {index < tabs.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-[-2rem] w-0.5 bg-slate-700" />
                )}

                <button
                  onClick={() => setActiveIndex(index)}
                  className={`absolute left-0 top-4 p-3 rounded-full z-10 transition-all ${
                    activeIndex === index
                      ? `bg-gradient-to-r ${stage.gradient} text-white scale-110 shadow-lg`
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  <StageIcon className="w-5 h-5" />
                </button>

                <div className="ml-16 bg-white rounded-xl p-4 shadow-xl">
                  <div className={`bg-gradient-to-r ${stage.gradient} text-white p-4 rounded-lg mb-4`}>
                    <h3 className="text-lg font-bold">{stage.name.toUpperCase()}</h3>
                    <p className="text-xs text-white/90">Stage {index + 1} of {tabs.length}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-purple-500" />
                        <h4 className="text-sm font-semibold text-slate-900">You're here if...</h4>
                      </div>
                      {stage.id === 'surge' ? (
                        <p className="text-xs text-slate-700">{stageContent.title}</p>
                      ) : (
                        <ul className="space-y-1 text-xs text-slate-700">
                          {stageContent.points.slice(0, 3).map((p, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-red-500 mt-0.5">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <h4 className="text-sm font-semibold text-slate-900">You want to achieve</h4>
                      </div>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {stageContent.goals.slice(0, 3).map((g, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-0.5">•</span>
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <StageIcon className={`w-4 h-4 ${stage.id === 'ripple' ? 'text-blue-500' : stage.id === 'current' ? 'text-purple-500' : stage.id === 'tide' ? 'text-red-400' : 'text-orange-500'}`} />
                        <h4 className="text-sm font-semibold text-slate-900">What helps?</h4>
                      </div>
                      <div className="space-y-1 mb-3">
                        {stageContent.help.slice(0, 4).map((h, i) => (
                          <p key={i} className="text-xs text-slate-700 flex items-start gap-2">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stage.gradient} flex-shrink-0`} />
                            <span>{h}</span>
                          </p>
                        ))}
                      </div>

                      <a
                        href={stage.id === "surge" ? process.env.NEXT_PUBLIC_BOOKING_URL : "/programmes"}
                        target={stage.id === "surge" ? "_blank" : undefined}
                        rel={stage.id === "surge" ? "noopener noreferrer" : undefined}
                        className={`block mt-3 text-center py-2.5 px-4 rounded-lg text-white text-sm font-semibold bg-gradient-to-r ${stage.gradient} hover:shadow-lg transition-shadow`}
                      >
                        {stage.id === 'surge' ? stageContent.cta : 'Explore growth path'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= DESKTOP TIMELINE NAVIGATION ================= */}
        <div className="hidden md:block">
          {/* Timeline Navigation */}
          <div className="flex mb-8 items-center justify-center gap-4">
            {tabs.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <button
                  onClick={() => scrollToIndex(index)}
                  className={`relative px-4 lg:px-6 py-3 rounded-lg transition-all ${
                    activeIndex === index
                      ? 'bg-white text-slate-900 shadow-xl scale-110'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {(() => {
                      const Icon = stage.icon;
                      return <Icon className="w-5 h-5" />;
                    })()}
                    <span className="text-sm lg:text-base">{stage.name}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
                  )}
                </button>
                {index < tabs.length - 1 && (
                  <div className="w-8 lg:w-12 h-0.5 bg-slate-700" />
                )}
              </div>
            ))}
          </div>

          {/* Scrollable Cards Container */}
          <div className="relative">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900" />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-hidden scroll-smooth gap-8 px-0 lg:px-16">
              {tabs.map((stage, index) => {
                const stageContent = content[stage.id];
                const StageIcon = stage.icon;
                return (
                  <div key={stage.id} className="min-w-full flex-shrink-0">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl max-w-5xl mx-auto">
                      {/* Header Card */}
                      <div className={`bg-gradient-to-r ${stage.gradient} text-white rounded-2xl p-6 lg:p-8 mb-8`}>
                        <div className="flex items-center gap-3 mb-2">
                          <StageIcon className="w-6 lg:w-8 h-6 lg:h-8" />
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{stage.name.toUpperCase()}</h3>
                        </div>
                        <p className="text-white/90 text-sm">Stage {index + 1} of {tabs.length}</p>
                      </div>

                      {/* Two Column Layout */}
                      <div className="mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Left Column - You're here if */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Target className="w-5 h-5 text-purple-500" />
                              <h3 className="text-lg font-semibold text-slate-900">You're here if...</h3>
                            </div>
                            {stage.id === 'surge' ? (
                              <div className="space-y-2">
                                <p className="text-slate-700 text-sm">{stageContent.title}</p>
                              </div>
                            ) : (
                              <ul className="space-y-2">
                                {stageContent.points.map((point, pIndex) => (
                                  <li key={pIndex} className="text-slate-700 text-sm flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>

                          {/* Right Column - You want to achieve */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                              <h3 className="text-lg font-semibold text-slate-900">You want to achieve</h3>
                            </div>
                            <ul className="space-y-2">
                              {stageContent.goals.map((goal, gIndex) => (
                                <li key={gIndex} className="text-slate-700 text-sm flex items-start gap-2">
                                  <span className="text-blue-500 mt-1">•</span>
                                  <span>{goal}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* What Helps */}
                      <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                        <div className="flex items-center gap-2 mb-6">
                          <StageIcon className={`w-6 h-6 ${stage.id === 'ripple' ? 'text-blue-500' : stage.id === 'current' ? 'text-purple-500' : stage.id === 'tide' ? 'text-red-400' : 'text-orange-500'}`} />
                          <h4 className="text-xl font-bold text-slate-900">What will help?</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                          {stageContent.help.map((service, i) => (
                            <div key={i} className="text-slate-700 text-base flex items-start gap-3">
                              <div className={`mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${stage.gradient} flex-shrink-0`} />
                              <span>{service}</span>
                            </div>
                          ))}
                        </div>
                        <a
                          href={stage.id === 'surge' ? process.env.NEXT_PUBLIC_BOOKING_URL : '/programmes'}
                          target={stage.id === 'surge' ? '_blank' : undefined}
                          rel={stage.id === 'surge' ? 'noopener noreferrer' : undefined}
                          className={`w-full block bg-gradient-to-r ${stage.gradient} text-white py-4 px-6 rounded-xl hover:shadow-lg transition-shadow text-center font-semibold text-lg`}
                        >
                          {stage.id === 'surge' ? stageContent.cta : 'Explore growth path'}
                        </a>
                        {stage.id === 'surge' && stageContent.subtitle && (
                          <p className="text-slate-400 text-sm text-center mt-4">
                            {stageContent.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={activeIndex === tabs.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6 text-slate-900" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? 'w-8 bg-white' : 'w-2 bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
