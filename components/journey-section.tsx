"use client"

import { useEffect, useRef, useState } from "react"
import { Play, X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const journeyVideos = [
  {
    id: 1,
    title: "Our Personal Mission & Story",
    description: "Six people from four different countries, each with distinct ambitions and personal stories, came together as a think tank driven by a shared mission. United by a passion for youth empowerment and a desire to create better lives, we met, formed Lumina Hub Africa, and marked the beginning of our incredible journey.",

    youtubeId: "gSzndCh_uZg",
    thumbnail: "https://img.youtube.com/vi/gSzndCh_uZg/maxresdefault.jpg",
    category: "Origins",
  },
  {
    id: 2,
    title: "Discovering Africa – The Baka People of Cameroon",
    description:
      "We began our journey of discovery with an indigenous community that shaped our understanding of grassroots lifestyles, deepened our sense of human connection, and strengthened our empathy and collaborative spirit in research, decision-making, and communication.",
    youtubeId: "kYz5bmQtv2s",
    thumbnail: "https://img.youtube.com/vi/kYz5bmQtv2s/maxresdefault.jpg",
    category: "Exploration",
  },
  {
    id: 3,
    title: "Lumina Hub Africa Help Lab – Community Activity",
    description: "Since French is a language barrier for most students in Mauritius, we decided to create “The Alchemist of the French Language”, a three-month French learning community designed to help beginners become proficient. Through engaging sessions, collaborative efforts, and hands-on workshops, we were able to create real impact, seeing our ideas come to life.",
    youtubeId: "CmwmqgEWOjo",
    thumbnail: "https://i.ibb.co/Kzxn0csL/team.jpg",
    category: "Community",
  },
  {
    id: 4,
    title: "Case Study in Kibera – Garden of Eden",
    description:
      "Our mission is to transform unemployed and underemployed youth into employable professionals and job creators. We decided to begin in Kibera, Kenya. The Garden of Eden, an NGO in Kibera that employs and trains youth, served as a case study. Through an interview with them, we gained insights into their approach and learned how organizations can start addressing this challenge, helping us refine our own strategy and think of a future partnership.",
    youtubeId: "VgqVuN__32A",
    thumbnail: "https://img.youtube.com/vi/VgqVuN__32A/maxresdefault.jpg",
    category: "Impact",
  },
  {
    id: 5,
    title: "From Pitch to Launch – The Lumina Jipange Program",
    description: "To address unemployment in Kenya, we developed a 12-week market-demand skills program to train youth in Kibera. To launch the program, we pitched for a $10,000 grant, inviting donors to help bring our idea to life. We then completed our final challenge: developing our prototype and website. Together, these challenges mark the beginning of our entrepreneurial journey.",
    youtubeId: "UjqaFCrj8KI",
    thumbnail: "https://i.ibb.co/pByf3Vrb/GRANT-IMAGE.jpg",
    category: "Pitch",
  },
]

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const scrollTo = (direction: "prev" | "next") => {
    if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (direction === "next" && currentIndex < journeyVideos.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <section id="journey" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/5 overflow-hidden relative">
      {/* African pattern overlay */}
      <div className="absolute inset-0 african-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Renamed from E-LAB Journey to Our Journey */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal duration-500 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            Our Journey
          </span>
          <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-6">
            The Lumina Hub Africa E-LAB Innovation Pathway
          </h2>
          <p className="reveal duration-700 text-lg text-muted-foreground leading-relaxed">
            Explore the milestones, discoveries, and E-lab challenges that have shaped Lumina Hub Africa's mission to
            transform youth unemployment starting in kibera Kenya.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="reveal duration-700 mb-12">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {journeyVideos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setCurrentIndex(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentIndex === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border/50"
                }`}
              >
                {video.category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Video Display */}
        <div className="reveal duration-700 relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollTo("prev")}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border/50 flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous video"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scrollTo("next")}
            disabled={currentIndex === journeyVideos.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border/50 flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next video"
          >
            <ChevronRight size={24} />
          </button>

          {/* Featured Video Card */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <div className="grid lg:grid-cols-2">
              {/* Video Thumbnail */}
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px]">
                <img
                  src={journeyVideos[currentIndex].thumbnail || "/placeholder.svg"}
                  alt={journeyVideos[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center">
                  <button
                    onClick={() => setActiveVideo(currentIndex)}
                    className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
                    aria-label="Play video"
                  >
                    <Play size={32} className="ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  {journeyVideos[currentIndex].category}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="font-mono text-xs tracking-[0.15em] uppercase text-primary">
                    Challenge {currentIndex + 1}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4 leading-tight">
                  {journeyVideos[currentIndex].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{journeyVideos[currentIndex].description}</p>
                <Button
                  onClick={() => setActiveVideo(currentIndex)}
                  className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 shadow-lg"
                >
                  <Play size={20} className="mr-2" />
                  Watch Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Thumbnails Strip */}
        <div className="reveal duration-1000 mt-8 max-w-5xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {journeyVideos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all ${
                  currentIndex === index ? "ring-4 ring-primary scale-105" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-32 h-20 object-cover" />
                {currentIndex !== index && (
                  <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                    <Play size={16} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {journeyVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "w-8 bg-primary" : "bg-secondary/30 hover:bg-secondary/50"
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {activeVideo !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            {/* Back button - positioned above the video */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setActiveVideo(null)}
                className="flex items-center gap-2 text-white hover:text-primary transition-colors px-4 py-2 rounded-full bg-white/10 hover:bg-white/20"
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Back to Journey</span>
              </button>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-white hover:text-primary transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
                aria-label="Close video"
              >
                <X size={24} />
              </button>
            </div>

            {/* Video */}
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${journeyVideos[activeVideo].youtubeId}?autoplay=1`}
                title={journeyVideos[activeVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video title below */}
            <p className="text-center text-white/80 mt-4 font-medium">{journeyVideos[activeVideo].title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
