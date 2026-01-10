"use client"

import { useEffect, useRef } from "react"
import { Stethoscope, Code, BarChart3, Palette, Sprout, Users, Sparkles } from "lucide-react"

export function InclusiveApproachSection() {
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

  const backgrounds = [
    { icon: Code, label: "Engineering" },
    { icon: Stethoscope, label: "Medicine" },
    { icon: BarChart3, label: "Business" },
    { icon: Sprout, label: "Agriculture" },
    { icon: Palette, label: "Arts" },
    { icon: Users, label: "Social Sciences" },
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 african-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="reveal duration-300 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            Our Approach
          </span>
          <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight mb-6">
            Inclusive Program Approach
          </h2>

          <p className="reveal duration-700 text-lg text-muted-foreground leading-relaxed mb-8">
            <strong className="text-secondary">Lumina Hub Africa</strong> is intentionally designed to be inclusive of
            young people from diverse academic and professional backgrounds. Whether participants come from engineering,
            medicine, business, agriculture, the arts, or other fields of study, they are{" "}
            <strong className="text-secondary">all welcome</strong>.
          </p>

          {/* Background fields icons */}
          <div className="reveal duration-700 flex flex-wrap justify-center gap-4 mb-10">
            {backgrounds.map((bg) => (
              <div
                key={bg.label}
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 shadow-sm"
              >
                <bg.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{bg.label}</span>
              </div>
            ))}
          </div>

          {/* Key message card */}
          <div className="reveal duration-1000 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-10 border border-border/50 relative">
            {/* Lumina glow */}
            <div className="absolute inset-0 lumina-glow rounded-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The program does not focus on retraining participants in their academic disciplines. Instead, it
                provides a <strong className="text-secondary">shared professional foundation</strong>—practical skills,
                real-world application, and proof-of-work—that enables participants to translate their existing
                knowledge into
                <strong className="text-secondary"> employable and income-generating opportunities</strong> across
                sectors.
              </p>

              <div className="bg-accent/10 rounded-xl px-6 py-4 inline-block">
                <p className="text-accent font-semibold">
                  Diversity of background is viewed as a strength, enriching collaboration, problem-solving, and
                  innovation throughout the program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
