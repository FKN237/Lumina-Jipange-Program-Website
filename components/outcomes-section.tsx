"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, TrendingUp, Users, Calendar, ArrowRight } from "lucide-react"

export function OutcomesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counters, setCounters] = useState({ percent70: 0, percent100: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")

            if (!hasAnimated && entry.target.classList.contains("stats-container")) {
              setHasAnimated(true)
              const duration = 2000
              const steps = 60
              const interval = duration / steps
              let step = 0

              const timer = setInterval(() => {
                step++
                setCounters({
                  percent70: Math.round((70 * step) / steps),
                  percent100: Math.round((100 * step) / steps),
                })
                if (step >= steps) clearInterval(timer)
              }, interval)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [hasAnimated])

  const benefits = [
    {
      icon: CheckCircle2,
      text: "Employer-validated proof-of-work portfolios",
      image: "/work-portfolio-samples-documents.jpg",
    },
    {
      icon: Users,
      text: "Weekly employer interaction and field exposure",
      image: "/employer-meeting-youth-networking.jpg",
    },
    {
      icon: TrendingUp,
      text: "Job, internship, and gig matching support",
      image: "/job-interview-internship-opportunity.jpg",
    },
    {
      icon: Calendar,
      text: "90-day post-program follow-up and mentorship",
      image: "/mentorship-follow-up-support-africa.jpg",
    },
  ]

  return (
    <section id="outcomes" ref={sectionRef} className="py-20 lg:py-28 gradient-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/15 to-transparent rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      {/* Grain texture */}
      <div className="absolute inset-0 grain-texture pointer-events-none" />

      {/* FILLER IMAGE: Replace URL with your own outcomes/success background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img src="/success-achievement-celebration-africa.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="reveal duration-300 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            Outcomes
          </span>
          <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 tracking-tight text-balance">
            We Don't Guarantee Jobs. <span className="text-primary animate-text-glow">We Guarantee Employability.</span>
          </h2>
          <p className="reveal duration-700 text-lg text-secondary-foreground/80 leading-relaxed">
            Lumina Hub Africa does not promise jobs. We promise preparation, exposure, and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 stagger-children">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.text}
              className="reveal bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-secondary-foreground/10 hover:bg-secondary-foreground/10 hover:-translate-y-2 transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-28 overflow-hidden relative">
                <img
                  src={benefit.image || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/30 transition-all">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-secondary-foreground/90 font-medium">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal duration-1000 stats-container bg-secondary-foreground/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-secondary-foreground/10 max-w-3xl mx-auto relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient" />

          <h3 className="text-xl font-bold text-secondary-foreground text-center mb-8 relative z-10">
            Target Outcomes
          </h3>
          <div className="grid sm:grid-cols-2 gap-8 relative z-10">
            <div className="text-center group">
              <p className="text-5xl lg:text-6xl font-bold text-primary mb-2 animate-text-glow">
                {counters.percent70}%
              </p>
              <p className="text-secondary-foreground/80">of participants employed or earning within 90 days</p>
            </div>
            <div className="text-center group">
              <p className="text-5xl lg:text-6xl font-bold text-accent mb-2">{counters.percent100}%</p>
              <p className="text-secondary-foreground/80">outcomes tracked and reported transparently</p>
            </div>
          </div>
          <p className="text-center text-secondary-foreground/60 mt-6 text-sm relative z-10">
            Internships, apprenticeships, paid projects, or venture income
          </p>
        </div>

        {/* CTA */}
        <div className="reveal duration-1000 text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all animate-glow group cursor-pointer hover-lift"
          >
            <a href="https://forms.gle/WduLA8frLn7A7Bqc9" target="_blank" rel="noopener noreferrer">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
