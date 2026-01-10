"use client"

import { useEffect, useRef } from "react"
import { Target, RefreshCw, Star, Users, GraduationCap } from "lucide-react"

export function WhoWeServeSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 gradient-accent relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="absolute top-20 left-20 opacity-10 animate-float">
        <GraduationCap size={64} className="text-secondary" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10 animate-float" style={{ animationDelay: "2s" }}>
        <Users size={48} className="text-secondary" />
      </div>

      {/* FILLER IMAGE: Replace with group of diverse youth */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src="/diverse-african-youth-group-professional.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="reveal duration-300 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            Who We Serve
          </span>
          <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight">
            Our Target Participants
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Primary Target */}
          <div className="reveal duration-500 bg-card rounded-2xl p-8 shadow-lg border border-border/50 relative overflow-hidden group hover-lift hover-glow">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/80 to-primary animate-shimmer" />

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="font-mono text-xs tracking-wider uppercase text-primary">Primary</span>
                <h3 className="text-xl font-bold text-secondary">University & College Graduates</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
              Unemployed and underemployed university and college graduates aged 21–30
            </p>
            <ul className="space-y-3 relative z-10">
              {[
                "Completed or final-year students",
                "Limited or no formal work experience",
                "Living in Kibera or surrounding communities",
                "Motivated to transition into employment",
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3 group/item">
                  <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/40 transition-colors">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Target */}
          <div className="reveal duration-700 bg-card rounded-2xl p-8 shadow-lg border border-border/50 relative overflow-hidden group hover-lift hover-glow">
            <div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/80 to-accent animate-shimmer"
              style={{ animationDelay: "0.5s" }}
            />

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-700" />

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <RefreshCw className="w-7 h-7 text-accent" />
              </div>
              <div>
                <span className="font-mono text-xs tracking-wider uppercase text-accent">Secondary</span>
                <h3 className="text-xl font-bold text-secondary">High-Potential Youth</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
              High-potential youth without university degrees aged 18–35
            </p>
            <ul className="space-y-3 relative z-10">
              {[
                "TVET graduates",
                "Self-taught digital learners",
                "Dropouts with demonstrated skills",
                "Selected through practical challenges",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 group/item">
                  <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/40 transition-colors">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal duration-1000 mt-12 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-lg border border-border/50 hover:shadow-xl transition-shadow animate-float">
            <Star className="w-5 h-5 text-primary animate-scale-pulse" />
            <p className="text-muted-foreground">
              <span className="font-semibold text-secondary">Selection Philosophy:</span> Motivation, discipline, and
              learning ability matter more than academic history.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
