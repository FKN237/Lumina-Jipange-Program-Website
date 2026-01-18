"use client"

import { Play } from "lucide-react"
import { useEffect, useRef } from "react"

export function ProofSection() {
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

  const featuredVideo = {
    id: "waiQaDwDFJs",
    title: "Lumina Jipange Program – Case of Amina",
  }

  function setActiveVideo(currentIndex: any): void {
    throw new Error("Function not implemented.")
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-background relative">
      {/* Lumina glow */}
      <div className="absolute inset-0 lumina-glow opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="reveal duration-300 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            Proof & Inspiration
          </span>
          <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight">
            See <span className="text-primary">Lumina Jipange Program</span> in Action.
          </h2>
        </div>

        {/* Featured Video Only */}
        <div className="reveal duration-500 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-secondary">
            <iframe
              src={`https://www.youtube.com/embed/${featuredVideo.id}`}
              title={featuredVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 font-medium">{featuredVideo.title}</p>
        </div>
      </div>
    </section>
  )
}
