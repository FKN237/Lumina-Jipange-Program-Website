"use client"

import { useEffect, useRef } from "react"
import { Users, Layers, Sparkles } from "lucide-react"

export function PersonalisationSection() {
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <span className="reveal duration-300 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold">
              How Personalisation Works
            </span>
            <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight text-balance">
              Same Foundation. <span className="text-primary">Different Outcomes.</span>
            </h2>
            <p className="reveal duration-700 text-lg text-muted-foreground leading-relaxed">
              Lumina does not teach everyone the same skills. All participants share a{" "}
              <span className="font-semibold text-secondary">common professional foundation</span>—work ethic,
              problem-solving, collaboration, and employer expectations.
            </p>
            <p className="reveal duration-700 text-lg text-muted-foreground leading-relaxed">
              Personalisation happens through{" "}
              <span className="font-semibold text-secondary">projects, tracks, and real-world application</span>, not
              lectures. Participants work on problems aligned with their background, interests, and strengths, producing
              different outputs within the same structured environment.
            </p>
          </div>

          <div className="reveal duration-700 grid gap-4">
            {[
              {
                icon: Users,
                title: "Common Foundation",
                description: "Work ethic, problem-solving, collaboration, employer expectations",
              },
              {
                icon: Layers,
                title: "Personalised Tracks",
                description: "Projects aligned with background, interests, and strengths",
              },
              {
                icon: Sparkles,
                title: "Unique Outputs",
                description: "Different portfolios within the same structured environment",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
