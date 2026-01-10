"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function FinalCtaSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob" />
        <div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-blob"
          style={{ animationDelay: "3s" }}
        />

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" />
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/15 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 grain-texture opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal duration-300 inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary-foreground animate-scale-pulse" />
            <span className="text-sm font-medium text-primary-foreground">Applications Now Open</span>
          </div>

          <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 tracking-tight text-balance">
            Ready to Turn Your Potential into Opportunity?
          </h2>

          <p className="reveal duration-700 text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Applications are competitive. Selection is based on motivation, commitment, and readiness to grow.
          </p>

          <div className="reveal duration-1000 relative inline-block">
            {/* Ripple effect */}
            <div
              className="absolute inset-0 rounded-full bg-primary-foreground/20 animate-ping"
              style={{ animationDuration: "2s" }}
            />

            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-10 py-7 text-xl shadow-2xl hover:shadow-3xl transition-all group relative z-10 hover-scale"
            >
              <a href="https://forms.gle/WduLA8frLn7A7Bqc9" target="_blank" rel="noopener noreferrer">
                Apply Now
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </div>

          <p className="reveal duration-1000 text-sm text-primary-foreground/60 mt-8">
            Join the next cohort of future professionals and entrepreneurs
          </p>
        </div>
      </div>
    </section>
  )
}
