"use client"

import { useEffect, useRef } from "react"
import { Target, Lightbulb, Users } from "lucide-react"

export function MissionSection() {
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
    <section id="mission" ref={sectionRef} className="py-20 lg:py-28 gradient-warm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      {/* FILLER IMAGE: Replace URL with your own mission/community image */}
      <div className="absolute inset-0 opacity-5">
        <img src="/african-youth-community-gathering-education.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-primary/30 rounded-full animate-float" />
      <div
        className="absolute bottom-32 left-32 w-4 h-4 bg-accent/30 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="reveal duration-300 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            The Mission
          </span>
          <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-8 tracking-tight text-balance">
            Our Mission
          </h2>
          <p className="reveal duration-700 text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12">
            Lumina Hub Africa exists to transform unemployed and underemployed youth into employable professionals and
            job creators by bridging the gap between education and opportunity. We focus on converting learning,
            potential, and talent into real-world competence through hands-on experience, mentorship, and exposure to
            practical work environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 stagger-children">
          {[
            {
              icon: Target,
              title: "Skills & Confidence",
              description:
                "Equip young people with the skills and confidence required to participate meaningfully in the world of work.",
              image: "/skills-training-workshop-africa.jpg",
              color: "primary",
            },
            {
              icon: Lightbulb,
              title: "Professional Readiness",
              description:
                "Build professional readiness through employment, entrepreneurship, or income-generating opportunities.",
              image: "/professional-development-mentorship-africa.jpg",
              color: "accent",
            },
            {
              icon: Users,
              title: "Real-World Competence",
              description:
                "Convert learning and potential into real-world competence through hands-on experience and mentorship.",
              image: "/hands-on-work-experience-youth-africa.jpg",
              color: "primary",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="reveal bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group hover-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-40 overflow-hidden relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <div
                  className={`w-14 h-14 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-7 h-7 text-${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
