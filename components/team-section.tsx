"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, X, ZoomIn, Users } from "lucide-react"

const teamMembers = [
  {
    name: "Elizabeth Ater",
    role: "Program Director",
    image: "https://i.ibb.co/GfyNYrp4/ELIZABETH.jpg",
    bio: "Elizabeth Ater leads the overall strategy, design, and execution of Lumina Hub Africa's programs. She is responsible for aligning the organization's mission with on-the-ground implementation, ensuring that Lumina's training model remains practical, impactful, and responsive to employer needs.",
  },
  {
    name: "Daniella Batete",
    role: "Community & Youth Engagement Leader",
    image: "https://i.ibb.co/LhZyNrd1/DANIELLA.jpg",
    bio: "Daniella Batete leads community outreach, participant recruitment, and youth engagement at Lumina Hub Africa. She works closely with participants throughout the program to support retention, motivation, and accountability.",
  },
  {
    name: "Faith Kerubo",
    role: "Curriculum & Training Coordinator",
    image: "https://i.ibb.co/hFYQmbMq/KERUBO.jpg",
    bio: "Faith Kerubo is responsible for designing, coordinating, and delivering Lumina Hub Africa's training curriculum. She ensures that learning content is practical, industry-relevant, and aligned with Lumina's proof-of-work philosophy.",
  },
  {
    name: "Nairath Ngururu",
    role: "Mentorship & Employer Partnership Leader",
    image: "https://i.ibb.co/F4vpbSyY/NAIRATH.png",
    bio: "Nairath Ngururu leads mentorship coordination and employer partnerships at Lumina Hub Africa. Her role focuses on ensuring that participants gain exposure to real workplaces, employer expectations, and professional networks.",
  },
  {
    name: "Elvire Akayezu",
    role: "Monitoring & Evaluation Leader",
    image: "https://i.ibb.co/Q7z0zVGD/ELVIRE.jpg",
    bio: "Elvire Akayezu leads monitoring, evaluation, and impact tracking at Lumina Hub Africa. Her work ensures that Lumina measures what truly matters—program completion, employability, income generation, and employer satisfaction.",
  },
  {
    name: "Nelson Fodjo",
    role: "Operations & Finance Leader",
    image: "https://i.ibb.co/b5jDCVWv/NELSON.jpg",
    bio: "Nelson Fodjo oversees operations, finance, and administrative systems at Lumina Hub Africa. He is responsible for budgeting, financial accountability, logistics, and ensuring efficient use of resources.",
  },
]

function ImageModal({
  member,
  isOpen,
  onClose,
}: {
  member: (typeof teamMembers)[0] | null
  isOpen: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!isOpen || !member) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/95 backdrop-blur-sm animate-in fade-in duration-300 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg cursor-pointer hover-scale"
      >
        <X className="w-5 h-5" />
        Back to Team
      </button>

      <div
        className="relative max-w-5xl max-h-[90vh] w-full animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-card rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative lg:w-1/2 aspect-[3/4] lg:aspect-auto lg:min-h-[500px]">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 lg:block hidden" />
            </div>

            <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center bg-card relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full animate-blob" />

              <div className="space-y-6 relative z-10">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-secondary">{member.name}</h3>
                  <p className="text-primary font-semibold text-xl mt-2">{member.role}</p>
                </div>
                <div className="w-16 h-1 bg-primary rounded-full animate-shimmer" />
                <p className="text-muted-foreground text-lg leading-relaxed">{member.bio}</p>

                <div className="pt-4">
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary/60">Lumina Hub Africa Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamCard({
  member,
  onImageClick,
  index,
}: {
  member: (typeof teamMembers)[0]
  onImageClick: () => void
  index: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-500 group hover-lift"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-72 sm:h-80 overflow-hidden cursor-pointer" onClick={onImageClick}>
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary text-primary-foreground p-3 rounded-full shadow-lg scale-0 group-hover:scale-100">
            <ZoomIn className="w-6 h-6" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-secondary-foreground">{member.name}</h3>
          <p className="text-sm text-primary font-medium">{member.role}</p>
        </div>
      </div>
      <div className="p-6">
        <p className={`text-muted-foreground text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
          {member.bio}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-primary text-sm font-medium mt-3 hover:underline cursor-pointer group/btn"
        >
          {isExpanded ? "Show less" : "Read more"}
          <ChevronDown
            className={`w-4 h-4 transition-transform group-hover/btn:translate-y-0.5 ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </div>
  )
}

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)

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
    <>
      <section id="team" ref={sectionRef} className="py-20 lg:py-28 gradient-warm relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl animate-blob" />
        <div
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />

        {/* Floating icon */}
        <div className="absolute top-32 left-1/4 opacity-10 animate-float-slow">
          <Users size={80} className="text-secondary" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="reveal duration-300 inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
              Our Team
            </span>
            <h2 className="reveal duration-500 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight">
              Meet the Team Behind Lumina Hub Africa
            </h2>
            <p className="reveal duration-700 text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A multidisciplinary team committed to transforming youth potential into real-world opportunity.
            </p>
            <p className="reveal duration-900 text-sm text-primary/80 mt-2 flex items-center justify-center gap-2">
              <ZoomIn className="w-4 h-4 animate-scale-pulse" />
              Click on any photo to view full size
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
                <TeamCard member={member} onImageClick={() => setSelectedMember(member)} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal member={selectedMember} isOpen={selectedMember !== null} onClose={() => setSelectedMember(null)} />
    </>
  )
}
