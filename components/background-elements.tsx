"use client"

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Organic Blob - Top Right */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] animate-blob"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 112, 67, 0.08) 0%, rgba(212, 165, 116, 0.05) 50%, transparent 70%)",
          borderRadius: "60% 40% 70% 30% / 40% 50% 60% 50%",
          filter: "blur(40px)",
        }}
      />

      {/* Organic Blob - Mid Left */}
      <div
        className="absolute top-1/2 -left-60 w-[500px] h-[500px] animate-blob"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 112, 67, 0.06) 0%, rgba(212, 165, 116, 0.04) 50%, transparent 70%)",
          borderRadius: "40% 60% 30% 70% / 50% 40% 50% 60%",
          filter: "blur(50px)",
          animationDelay: "-7s",
        }}
      />

      {/* Organic Blob - Bottom Right */}
      <div
        className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] animate-blob"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(129, 199, 132, 0.06) 0%, rgba(212, 165, 116, 0.03) 50%, transparent 70%)",
          borderRadius: "50% 50% 40% 60% / 60% 40% 50% 50%",
          filter: "blur(45px)",
          animationDelay: "-14s",
        }}
      />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 grain-texture" />
    </div>
  )
}
