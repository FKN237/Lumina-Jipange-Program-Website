"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    src: "/hero-slide-1.jpg",
    alt: "Youth empowerment workshop in Kenya",
  },
  {
    src: "/hero-slide-2.jpg",
    alt: "Skills training session",
  },
  {
    src: "/hero-slide-3.jpg",
    alt: "Community gathering and mentorship",
  },
  {
    src: "/hero-slide-4.jpg",
    alt: "Professional development program",
  },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000) // Change image every 4 seconds
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-background.jpg" // FILLER IMAGE: Replace with your hero background image URL
          alt="African landscape background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-blob"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-accent/15 to-accent/5 rounded-full blur-3xl animate-blob"
        style={{
          animationDelay: "2s",
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#ffb74d]/10 to-transparent rounded-full blur-3xl animate-pulse-soft"
        style={{ transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)` }}
      />

      <div
        className="absolute top-32 left-20 w-4 h-4 bg-primary/40 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-48 right-32 w-3 h-3 bg-accent/50 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/3 right-1/4 w-5 h-5 border-2 border-primary/20 rounded-full animate-float-slow" />

      {/* African pattern overlay */}
      <div className="absolute inset-0 african-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="reveal duration-500">
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 bg-primary/10 px-4 py-2 rounded-full animate-pulse-soft">
                <Sparkles className="w-4 h-4" />
                Lumina Jipange Program
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-secondary leading-[1.15] tracking-tight text-balance">
                Transforming Unemployed Youth into{" "}
                <span className="text-primary animate-text-glow">Employable Professionals</span> &{" "}
                <span className="text-accent">Job Creators</span>
              </h1>
            </div>

            <p className="reveal duration-700 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              We bridge the gap between education and opportunity by converting potential into real-world competence,
              proof-of-work, and income pathways.
            </p>

            <div className="reveal duration-1000 flex flex-col sm:flex-row gap-4">
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
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg border-secondary/20 hover:bg-secondary/5 bg-background/50 backdrop-blur-sm cursor-pointer hover-scale"
              >
                <a href="#program">Learn How It Works</a>
              </Button>
            </div>

            <div className="reveal duration-1000 pt-4">
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">
                From Talent to Livelihood. From Skill to Opportunity.
              </p>
            </div>
          </div>

          <div className="reveal duration-700 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Main Slideshow */}
              <div className="relative h-[400px] lg:h-[520px]">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      // FILLER IMAGE: Replace src with your actual image URLs
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer opacity-20 pointer-events-none" />
              </div>

              {/* Slideshow Controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all cursor-pointer hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Slide Indicators */}
                <div className="flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false)
                        setCurrentSlide(index)
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all cursor-pointer hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Auto-play indicator */}
              {isAutoPlaying && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-xs text-white/80">Auto</span>
                </div>
              )}
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-sm font-semibold flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Now Accepting Applications
              </span>
            </div>

           

            <div className="absolute top-1/2 -right-8 w-16 h-16 border-2 border-primary/20 rounded-full animate-rotate-slow" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#mission"
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}
