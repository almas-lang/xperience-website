"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Quote, MessageCircle, Target, Globe, Zap } from "lucide-react";
import { CarouselGallery } from "@/components/CarouselGallery";

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  // Media arrays for carousels
  const waveMedias = [
    {
      id: "1",
      type: "image" as const,
      url: "/assets/IMG_0405.JPG",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "2",
      type: "image" as const,
      url: "/assets/IMG_0416.JPG",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "3",
      type: "image" as const,
      url: "/assets/IMG_0425.JPG",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "4",
      type: "image" as const,
      url: "/assets/IMG_0428.JPG",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "5",
      type: "image" as const,
      url: "/assets/DSC00334.jpg",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "6",
      type: "image" as const,
      url: "/assets/DSC00482.jpg",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "7",
      type: "image" as const,
      url: "/assets/DSC00606.jpg",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "8",
      type: "image" as const,
      url: "/assets/DSC00640.jpg",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "9",
      type: "image" as const,
      url: "/assets/IMG_7180.JPG",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "10",
      type: "image" as const,
      url: "/assets/IMG_7190.jpg",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "11",
      type: "image" as const,
      url: "/assets/IMG_7209.jpg",
      alt: "Wave Makers Connect Event",
    },
    {
      id: "12",
      type: "image" as const,
      url: "/assets/IMG_7304.JPG",
      alt: "Wave Makers Connect Event",
    },
  ];

  const podcastMedias = [
    {
      id: "1",
      type: "image" as const,
      url: "/assets/vivid-yellow-podcast.jpeg",
      alt: "Vivid Yellow Podcast",
    },
  ];

  const problemStatement = {
    title: "The Problem No One Fixed",
    paragraphs: [
      "Years of research have gone into how adults learn. Beautiful theories. Thoughtful frameworks. Endless talks on what education should look like.",
      "And yet, when it comes to the corporate world, everything feels broken.",
      "People are pushed into trainings that barely scratch the surface. Half-hearted sessions. Pointless certificates. And when appraisal season comes, the same people are expected to deliver diamonds.",
      'Companies complain about "lack of talent." Professionals feel stuck and undervalued. Both sides lose - every single time.',
    ],
    expandedContent: {
      title: "What We Saw",
      paragraphs: [
        "On one side, IT companies run without a proper learning structure.",
        "On the other, professionals drift — listening to managers who are just warming chairs, depending on free, unsolicited \"guru\" advice that doesn't fit their reality, and convincing themselves it's too early to worry.",
        "It's not too early. It's already late.",
        "We're here to stop that wreck — one career at a time. So far, we've helped around 3,000 professionals steer back on track. That's just the beginning.",
        "We never looked for easy. We looked for impact. And we're okay sacrificing comfort to build a better future for learning.",
      ],
    },
  };

  const howWeStarted = {
    title: "How we started",
    description:
      "We began with design. Because design is where purpose meets craft - and where learning can transform lives.",
    points: [
      "Two years in, we've achieved a 95% success rate on goals. Our designers aren't just building pretty screens; they're driving business outcomes.",
      "If you've stumbled across Xperience Wave — congratulations. You're already thinking ahead. That's all we ask for...",
    ],
  };

  const values = [
    {
      title: "Real mentorship",
      description:
        'We\'ve gone from thinking about "online learning" to being at desks. Conversation by conversation.',
      icon: "💬",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Results, not more certificates",
      description:
        "No vanity metrics for your LinkedIn. Real work. Real portfolios. Real career change.",
      icon: "🎯",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Global standards",
      description:
        "This being around India has felt often like a career sentence. We've seen it. We're changing it. Globally relevant, locally rooted.",
      icon: "🌍",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Change by challenge",
      description:
        "We don't spoon-feed scripts. We give real challenges. Designed by real work. For people doing actual (early / mid / late career / org) pivots.",
      icon: "⚡",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
    },
  ];

  const team = [
    {
      name: "Almas Tasneem",
      role: "Founder & CEO",
      expertise: "Leadership",
    },
    {
      name: "Shaik Murad",
      role: "Head of Design and Product",
      expertise: "Leadership",
    },
  ];

  const advisoryTeam = [
    { name: "Fatima Sultana", role: "Product Advisor" },
    { name: "Rishik", role: "Creative Consultant" },
    { name: "Ankit", role: "Tech Advisor" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Spotlight Effect Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Radial spotlight gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-radial from-purple-100/40 via-pink-50/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-gradient-radial from-red-100/30 via-orange-50/15 to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              <span className="text-text-header">Transforming how </span>
              <span className="text-text-header">design</span>
              <span className="text-text-header"> can be imparted to an </span>
              <span className="bg-gradient-to-r from-accent to-pink-500 bg-clip-text text-transparent">
                AI powered
              </span>
              <span className="text-text-header"> </span>
              <span className="bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent">
                generation
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-text-body leading-relaxed max-w-4xl mx-auto">
              We're building the future of design education, where creativity
              meets technology and tradition evolves with innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section - Redesigned */}
      <section className="bg-gray-900 relative overflow-hidden">
        {/* Hero Slide */}
        <div className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-[#F24646]/20 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Title */}
              <div>
                <Quote className="w-16 h-16 text-primary mb-6" />
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  The Problem
                  <br />
                  No One Fixed
                </h2>
                <div className="h-1 w-32 bg-primary rounded-full"></div>
                <p className="text-gray-300 text-md mt-6 leading-relaxed">
                  Years of research have gone into how adults learn.
                  <br />
                  Beautiful theories.
                  <br /> Thoughtful frameworks. <br />
                  Endless talks on what education should look like.
                  <br />
                  Yet everything feels broken in the corporate
                </p>
              </div>

              {/* Right Side - Icon & Message */}
              <div className="flex flex-col items-left justify-left text-left">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl sm:text-2xl font-bold text-white mb-6">
                      The Broken System
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    People are pushed into trainings that barely scratch the
                    surface. Half-hearted sessions. Pointless certificates.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    And when appraisal season comes, the same people are
                    expected to deliver diamonds.
                  </p>
                  <p className="text-xl text-primary italic leading-relaxed font-medium">
                    Companies complain about "lack of talent." Professionals
                    feel stuck and undervalued. Both sides lose – every single
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Comparison */}
        <div className="py-16 lg:py-24 relative bg-white">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Company Side */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text-header mb-4">
                    The Company Side
                  </h3>
                  <p className="text-text-body mb-6 leading-relaxed">
                    IT companies run without a proper learning structure. No
                    clear path. No real development. Just surface-level
                    checkboxes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-text-body">
                        No learning structure
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-text-body">
                        Surface-level training
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-text-body">
                        Complaints about talent
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Side */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text-header mb-4">
                    The Professional Side
                  </h3>
                  <p className="text-text-body mb-6 leading-relaxed">
                    Professionals drift — listening to managers who are just
                    warming chairs, depending on free "guru" advice that doesn't
                    fit their reality.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-text-body">No clear guidance</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-text-body">Generic advice</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-text-body">
                        Feeling undervalued
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="py-16 lg:py-24 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              It's Not Too Early.
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent to-pink-500 bg-clip-text text-transparent mb-8 leading-tight">
              It's Already Late.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're here to stop that wreck — one career at a time.
            </p>
          </div>
          {/* </div> */}

          {/* Stats Section */}
          {/* <div className="py-16 lg:py-24 relative border-t border-gray-800"> */}
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="h-1 w-32 bg-primary rounded-full mx-auto my-8"></div>

            <p className="text-center text-xl sm:text-2xl text-white mb-4 leading-relaxed">
              So far, we've helped around{" "}
              <span className="text-accent font-bold">3,000 professionals</span>{" "}
              steer back on track.
            </p>
            <p className="text-center text-gray-400 text-lg mb-12">
              That's just the beginning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-primary transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Impact Over Easy
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We never looked for easy. We looked for impact.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-accent transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Sacrifice Comfort
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We're okay sacrificing comfort for change.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Better Future
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Building a better future for learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Started Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-header mb-6">
                {howWeStarted.title}
              </h2>
              <p className="text-text-body text-lg mb-6 leading-relaxed">
                {howWeStarted.description}
              </p>
              <div className="space-y-4">
                {howWeStarted.points.map((point, index) => (
                  <p key={index} className="text-text-body leading-relaxed">
                    {point}
                  </p>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/starting.png"
                alt="How we started"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
        {/* Gradient Orbs Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl animate-fadeIn"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-pink-200/25 to-transparent rounded-full blur-3xl animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/25 to-transparent rounded-full blur-3xl animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-header mb-12 text-center">
            Our values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {values.map((value, index) => {
              const IconComponent =
                index === 0
                  ? MessageCircle
                  : index === 1
                  ? Target
                  : index === 2
                  ? Globe
                  : Zap;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
                  ></div>

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      className="w-8 h-8 text-white"
                      strokeWidth={2.5}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-text-header mb-4">
                    {value.title}
                  </h3>
                  <p className="text-text-body leading-relaxed text-md">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
        {/* Purple Spotlight from Bottom Right */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-t from-[#7677EA]/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg mb-6 bg-gray-800">
                  <img
                    src={
                      member.name === "Almas Tasneem"
                        ? "/assets/almas.jpg"
                        : member.name === "Shaik Murad"
                        ? "/assets/shaik.jpg"
                        : `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&${index}`
                    }
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={
                      member.name === "Almas Tasneem"
                        ? { objectPosition: "center 5%" }
                        : member.name === "Shaik Murad"
                        ? { objectPosition: "center center" }
                        : {}
                    }
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-gray-300">◆{member.expertise}</p>
              </div>
            ))}
          </div>

          {/* Advisory Team */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Advisory Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisoryTeam.map((advisor, index) => (
                <div key={index} className="group">
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg mb-4 bg-gray-800">
                    <img
                      src={
                        advisor.name === "Fatima Sultana"
                          ? "/assets/fatima.jpeg"
                          : advisor.name === "Rishik"
                          ? "/assets/rishik.jpeg"
                          : advisor.name === "Ankit"
                          ? "/assets/ankit.png"
                          : `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&${index}`
                      }
                      alt={advisor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={
                        advisor.name === "Ankit"
                          ? { objectPosition: "center 30%" }
                          : {}
                      }
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {advisor.name}
                  </h4>
                  <p className="text-gray-300">◆{advisor.role}</p>
                </div>
              ))}
            </div>
          </div>
          {/* <section className="py-16 lg:py-24">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-8">
                Every career has different nuances, different expertise, and
                business ethos - all obsessed with doing education differently.
              </p>
            </div>
          </section> */}
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-header mb-6">
                Thinking Globally, Reaching Locally
              </h2>
              <p className="text-text-body text-lg leading-relaxed">
                We’re spread across India, Ireland, Dubai, and the UK.Our
                footprint may be global, but our heart beats locally - in every
                classroom, studio, and office we’ve touched.
              </p>
            </div>

            {/* World Map */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop"
                alt="Global presence - World Map showing India, Ireland, Dubai, and UK"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join the Mission Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        {/* Gradient Orbs for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join the Mission
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            If you're a dreamer yourself, maybe this is your place. If you
            believe learning should change lives - not just check boxes - see if
            you'd like to work with us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-lg transform hover:scale-105"
          >
            See open positions
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="bg-white rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-text-header mb-6">
            Our partners in the Journey
          </h3>
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Google */}
              <div className="h-16 w-32 bg-white rounded-lg p-3 flex items-center justify-center">
                <img
                  src="/assets/google.png"
                  alt="Google"
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Meta */}
              <div className="h-16 w-32 bg-white rounded-lg p-3 flex items-center justify-center">
                <img
                  src="/assets/Meta-Logo.png"
                  alt="Meta"
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* LinkedIn */}
              <div className="h-16 w-32 bg-white rounded-lg p-3 flex items-center justify-center">
                <img
                  src="/assets/LinkedIn-Logo.png"
                  alt="LinkedIn"
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Figma */}
              <div className="h-16 w-32 bg-white rounded-lg p-3 flex items-center justify-center">
                <img
                  src="/assets/Figma-Logo.png"
                  alt="Figma"
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Naukri */}
              <div className="h-16 w-32 bg-white rounded-lg p-3 flex items-center justify-center">
                <img
                  src="/assets/naukri.png"
                  alt="Naukri"
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Nxuniq */}
              <div className="h-16 w-32 bg-white rounded-lg p-3 flex items-center justify-center">
                <img
                  src="/assets/nxuniq.webp"
                  alt="Nxuniq"
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Xscale */}
              <div className="h-16 w-32 bg-white rounded-lg p-3 flex items-center justify-center">
                <img
                  src="/assets/xscale"
                  alt="Xscale"
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:pb-8 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Office */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-text-header mb-6">
              Where to Find Us
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-text-header mb-2">
                  Main Office:
                </h4>
                <p className="text-text-body">
                  Xperience Wave, 328, AECS Layout, Singasandra, Bangalore,
                  560068 (700 meters away from the metro station)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-text-header mb-2">Email:</h4>
                <a
                  href="mailto:hello@xperiencewave.com"
                  className="text-primary hover:text-opacity-80"
                >
                  hello@xperiencewave.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-text-header mb-2">Phone:</h4>
                <a
                  href="tel:08041325804"
                  className="text-primary hover:text-opacity-80"
                >
                  080-41325804
                </a>
              </div>
            </div>
          </div>

          {/* Wave Makers Connect */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-text-header mb-6">
                  Wave Makers Connect
                </h3>
                <p className="text-text-body text-md leading-relaxed">
                  Welcome to WMC - our offline event series that brings together
                  the next generation of leaders in Design, Engineering, and
                  Entrepreneurship.
                </p>
                <p className="text-text-body text-md leading-relaxed">
                  Every quarter, over 100 members gather for meaningful
                  discussions, speaker sessions, and genuine connections. This isn't
                  just another networking event - it's a movement of professionals
                  who want to build something real.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                  <p className="text-text-body leading-relaxed">
                    <span className="font-semibold text-text-header">No loud music. No hype.</span>
                    <br />
                    Just honest conversations over coffee and sandwiches. People
                    walk in curious - and walk out with new business partners, job
                    offers, or friends who think just like them.
                  </p>
                </div>
                <p className="text-text-body leading-relaxed">
                  From intimate panel discussions with industry leaders to hands-on workshops
                  and collaborative design thinking sessions, WMC creates spaces where ideas
                  transform into opportunities. Whether you're looking to pivot your career,
                  find your next co-founder, or simply connect with like-minded professionals,
                  WMC is where it happens.
                </p>
                <p className="text-text-body font-medium text-primary">
                  It's one of a kind. And it's growing every quarter.
                </p>
              </div>

              {/* Carousel Gallery */}
              <div className="lg:sticky lg:top-8 relative z-10">
                <CarouselGallery medias={waveMedias} className="h-[400px] lg:h-[500px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Podcast Section */}
      <section className="py-2 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-text-header mb-6">
                  Vivid Yellow Podcast
                </h3>
                <p className="text-text-body mb-4 leading-relaxed">
                  Every once in a while, we meet people whose minds stop us in
                  our tracks.
                </p>
                <p className="text-text-body mb-4 leading-relaxed">
                  People who've done extraordinary things - the kind that
                  redefine their fields. We couldn't keep those stories to
                  ourselves.
                  <br />
                  So we built Vivid Yellow - our in-house podcast.
                </p>
                <p className="text-text-body mb-4 leading-relaxed">
                  Here, we talk about work, life, and the uncomfortable truths
                  that shape both.
                </p>
                <p className="text-text-body mb-4 leading-relaxed">
                  No scripts. No fluff. Just raw, valuable conversations.
                  <br />
                  Listen to our latest talk with Amit Tiwari on YouTube and
                  iTunes. →
                </p>
              </div>

              {/* Podcast Carousel Gallery */}
              <CarouselGallery medias={podcastMedias} className="h-[300px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Continues Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-header mb-6">
            The Journey Continues
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            We’re just getting started.Because this isn’t about building another
            training company.It’s about building a movement - one that puts
            education back where it belongs: in the hands of people who care.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
