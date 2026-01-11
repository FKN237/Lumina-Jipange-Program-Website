"use client"

import { useEffect, useRef } from "react"
import { Compass, Hammer, Rocket, ArrowRight, Briefcase, Lightbulb } from "lucide-react"
import { WovenDivider } from "./woven-divider"

export function ProgramSection() {
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

  const phases = [
    {
      phase: "Phase 1",
      weeks: "Weeks 1–4",
      title: "Foundations & Professional Readiness",
      icon: Compass,
      color: "primary",
      items: [
        "Professional work habits and discipline",
        "Problem-solving and critical thinking",
        "Communication and collaboration",
        "Introduction to real-world tasks",
        "Mentorship and personal mission alignment",
      ],
      outcome: "Participants develop workplace readiness and professional confidence.",
    },
    {
      phase: "Phase 2",
      weeks: "Weeks 5–8",
      title: "Applied Skills & Proof-of-Work",
      icon: Hammer,
      color: "accent",
      items: [
        "Digital marketing and opportunity identification",
        "Solving real problems for community businesses",
        "Portfolio and proof-of-work ledger development",
        "Weekly employer field visits and exposure",
      ],
      outcome: "Participants build tangible, employer-reviewable evidence of competence.",
    },
    {
      phase: "Phase 3",
      weeks: "Weeks 9–12",
      title: "Pathway Specialization",
      icon: Rocket,
      color: "secondary",
      tracks: [
        {
          name: "Employment Track",
          icon: Briefcase,
          items: [
            "Role-aligned portfolio refinement",
            "Interview and workplace preparation",
            "Internships and job matching",
          ],
        },
        {
          name: "Entrepreneurship Track",
          icon: Lightbulb,
          items: ["Business idea testing and validation", "Customer discovery and pilots", "Mentorship from founders"],
        },
      ],
      outcome: "Participants transition into employment, paid work, or early-stage ventures.",
    },
  ]

  return (
    <section id="program" ref={sectionRef} className="py-20 lg:py-28 gradient-warm relative overflow-hidden">
      {/* African pattern overlay */}
      <div className="absolute inset-0 african-pattern opacity-30 pointer-events-none" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "5s" }}
      />

      {/* FILLER IMAGE: Replace with program/training imagery */}
      <div className="absolute inset-0 opacity-[0.02]">
        <img src="/professional-training-workshop-classroom.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="reveal duration-300 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            The Program (Prototype)
          </span>
          <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight text-balance">
            The <span className="text-primary animate-text-glow">Lumina Jipange Program</span>
          </h2>
          <p className="reveal duration-700 text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A 12-Week Journey from Readiness to Opportunity
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line with gradient */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary -translate-x-1/2 rounded-full" />

          <div className="space-y-12 lg:space-y-0">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`reveal duration-500 lg:grid lg:grid-cols-2 lg:gap-12 items-start relative ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 w-14 h-14 bg-background border-4 border-primary rounded-full items-center justify-center z-10 shadow-lg animate-scale-pulse hover:scale-125 transition-transform">
                  <phase.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content Card with enhanced effects */}
                <div
                  className={`bg-card rounded-2xl p-8 shadow-lg border border-border/50 ${
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto lg:col-start-2"
                  } max-w-xl hover-lift group relative overflow-hidden`}
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700" />

                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="lg:hidden w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <phase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-xs tracking-wider uppercase text-primary">
                        {phase.phase} • {phase.weeks}
                      </span>
                      <h3 className="text-xl font-bold text-secondary">{phase.title}</h3>
                    </div>
                  </div>

                  {phase.items && (
                    <ul className="space-y-2 mb-6 relative z-10">
                      {phase.items.map((item, i) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 group/item"
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {phase.tracks && (
                    <div className="grid sm:grid-cols-2 gap-4 mb-6 relative z-10">
                      {phase.tracks.map((track) => (
                        <div
                          key={track.name}
                          className="bg-muted rounded-xl p-4 hover:bg-muted/80 transition-colors group/track"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <track.icon className="w-5 h-5 text-primary group-hover/track:scale-110 transition-transform" />
                            <span className="font-semibold text-secondary text-sm">{track.name}</span>
                          </div>
                          <ul className="space-y-1.5">
                            {track.items.map((item) => (
                              <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="bg-accent/10 rounded-lg px-4 py-3 relative z-10 group-hover:bg-accent/20 transition-colors">
                    <p className="text-sm font-medium text-accent">
                      <span className="font-bold">Outcome:</span> {phase.outcome}
                    </p>
                  </div>
                </div>

                {index % 2 === 0 && <div className="hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <WovenDivider />
      </div>
    </section>
  )
}
