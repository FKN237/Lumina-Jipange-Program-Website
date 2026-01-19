"use client"

import { useEffect, useRef } from "react"
import { AlertTriangle, GraduationCap, Briefcase, TrendingDown } from "lucide-react"
import { WovenDivider } from "./woven-divider"

export function ProblemSection() {
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
    <section id="problem" ref={sectionRef} className="py-20 lg:py-28 gradient-cool relative overflow-hidden">
      {/* Lumina Glow behind content */}
      <div className="absolute inset-0 lumina-glow opacity-50 pointer-events-none" />

      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      {/* Floating elements */}
      <div className="absolute top-32 right-32 w-20 h-20 border border-primary/10 rounded-full animate-rotate-slow" />
      <div
        className="absolute bottom-32 left-20 w-16 h-16 border border-accent/10 rounded-full animate-rotate-slow"
        style={{ animationDirection: "reverse" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="reveal duration-500 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl hover-lift group">
              <img
                src="https://i.ibb.co/mFTxZSS7/advocate.jpg"
                alt="Kibera community"
                className="w-full h-[350px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl overflow-hidden shadow-xl w-40 h-40 border-4 border-background animate-float hover-scale">
              <img
                src="https://i.ibb.co/VYDYgHvk/KIBERA-SLUMS-2.jpg"
                alt="Youth in Kibera"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-full animate-pulse-soft" />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="reveal duration-300 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold">
              The Challenge
            </span>
            <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight text-balance">
              Education Alone Is Not Enough in <span className="text-primary">Kibera, Kenya</span>
            </h2>

            <p className="reveal duration-700 text-lg text-muted-foreground leading-relaxed">
              In Kibera and across Kenya, youth unemployment continues to be a major socioeconomic challenge,
              particularly among young people who have completed secondary, college, or university education but cannot
              find meaningful work.
            </p>

            <div className="reveal duration-700 bg-primary/5 border border-primary/20 rounded-2xl p-6 hover-glow animate-border-flow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-scale-pulse">
                  <TrendingDown className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary animate-text-glow">43%</p>
                  <p className="text-sm text-muted-foreground">of young Kenyans (ages 18–35)</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                According to the most recent <strong className="text-secondary">Afrobarometer survey</strong>, 43% say
                they are <strong className="text-secondary">not employed and are currently looking for work</strong>,
                despite high levels of education.
              </p>
            </div>

            <p className="reveal duration-700 text-lg text-muted-foreground leading-relaxed">
              National labour figures show that overall youth unemployment and underemployment remain significant, with
              many young people lacking access to consistent income opportunities.
            </p>

            <div className="reveal duration-1000 pt-4">
              <p className="text-sm font-semibold text-secondary mb-4">This disconnect stems from:</p>
              <div className="grid gap-3 stagger-children">
                {[
                  { icon: GraduationCap, text: "Theoretical education with limited practical application" },
                  { icon: AlertTriangle, text: "Few opportunities to build employer-trusted proof of ability" },
                  { icon: Briefcase, text: "Limited access to work experience and professional networks" },
                ].map((item, index) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal duration-1000 bg-secondary/5 rounded-xl p-4 border-l-4 border-primary hover:bg-secondary/10 transition-colors">
              <p className="text-muted-foreground italic">
                As a result, capable youth remain locked out of the job market —{" "}
                <strong className="text-secondary">a gap Lumina Hub Africa exists to close</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <WovenDivider />
      </div>
    </section>
  )
}
