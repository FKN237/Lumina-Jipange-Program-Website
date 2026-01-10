"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#mission", label: "Mission" },
    { href: "#problem", label: "Problem" },
    { href: "#program", label: "Our Solution" },
    { href: "#team", label: "Team" },
    { href: "#journey", label: "Our Journey" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/F4D9SSnw/lumina-hub-logo-removebg-preview.png"
              alt="Lumina Hub Africa"
              className="h-10 lg:h-12 w-auto"
            />
            <span className="font-bold text-secondary text-lg lg:text-xl tracking-tight">Lumina Hub Africa</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-lg hover:shadow-xl transition-all animate-glow"
            >
              <a href="https://forms.gle/WduLA8frLn7A7Bqc9" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  <a href="https://forms.gle/WduLA8frLn7A7Bqc9" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
