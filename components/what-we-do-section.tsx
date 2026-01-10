"use client"

import { useEffect, useRef } from "react"
import { Wrench, FolderOpen, Handshake, Quote } from "lucide-react"

export function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      icon: Wrench,
      number: "01",
      title: "Prepare with Real Skills",
      description: "Prepare youth with professional, real-world skills employers actually need",
      // FILLER IMAGE: Replace with image of skills training
      image: "/vocational-skills-training-workshop-kenya.jpg",
    },
    {
      icon: FolderOpen,
      number: "02",
      title: "Build Proof-of-Work",
      description: "Generate proof-of-work portfolios that show what participants can do",
      // FILLER IMAGE: Replace with image of portfolio/project work
      image: "/portfolio-work-projects-youth-kenya.jpg",
    },
    {
      icon: Handshake,
      number: "03",
      title: "Connect to Opportunities",
      description: "Connect talent to employment, income opportunities, and venture pathways",
      // FILLER IMAGE: Replace with image of job/business connections
      image: "/job-connections-business-opportunities-kenya.jpg",
    },
  ]

  return (
    <section id="what-we-do" ref={sectionRef} className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* FILLER IMAGE: Replace URL with your own background texture or pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src="/abstract-geometric-african-pattern.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal duration-300 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            What We Do
          </span>
          <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 tracking-tight text-balance">
            We Convert Potential into Employability
          </h2>
          <p className="reveal duration-700 text-lg text-secondary-foreground/80 leading-relaxed">
            Lumina Hub Africa is not a school, a university, or a job placement agency. We are a{" "}
            <span className="font-semibold text-primary">talent conversion and validation program</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="reveal bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-secondary-foreground/10 hover:bg-secondary-foreground/10 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image at top of card */}
              <div className="h-44 overflow-hidden">
                <img
                  src={pillar.image || "/placeholder.svg"}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="font-mono text-4xl font-bold text-primary/30">{pillar.number}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary-foreground mb-3">{pillar.title}</h3>
                <p className="text-secondary-foreground/70 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Principle Callout */}
        <div className="reveal duration-1000 max-w-2xl mx-auto">
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 relative">
            <Quote className="absolute -top-4 -left-4 w-10 h-10 text-primary/40" />
            <p className="text-xl lg:text-2xl font-bold text-secondary-foreground text-center">
              We do not issue certificates. <span className="text-primary">We build evidence.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
