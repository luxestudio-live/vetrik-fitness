"use client"

import { useEffect, useState } from "react"

export function LoadingAnimation() {
  const [progress, setProgress] = useState(0)
  const text = "Vetrik FITNESS"

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex gap-1 md:gap-2">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className="relative text-4xl md:text-7xl lg:text-8xl font-black tracking-wider"
            style={{ fontFamily: "system-ui" }}
          >
            <span className="text-neutral-800">{letter}</span>
            <span
              className="absolute inset-0 overflow-hidden text-gold"
              style={{
                clipPath: `inset(${Math.max(0, 100 - progress - index * 5)}% 0 0 0)`,
                transition: "clip-path 0.1s ease-out",
              }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="h-1 w-48 md:w-64 bg-neutral-800 rounded-full overflow-hidden">
          <div className="h-full bg-gold transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-neutral-500 text-sm mt-3 text-center tracking-widest">{progress}%</p>
      </div>
    </div>
  )
}
