'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { LogoSVG } from '@/components/svgs/LogoSVG'
import { useProgress } from '@react-three/drei'

export default function Loading() {
  const { progress } = useProgress()
  const bg = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const [hide, setHide] = useState(false)
  const fadeOut = () => {
    gsap.to(content.current, {
      duration: 1,
      ease: 'power1.out',
      opacity: 0,
      onComplete: () => {
        gsap.to(bg.current, {
          duration: 2,
          ease: 'power1.out',
          opacity: 0,
          onComplete: () => {
            setHide(true)
          }
        })
      }
    })
  }
  useEffect(() => {
    if (progress === 100) fadeOut()
  }, [progress])

  return hide ? null : (
    <div
      ref={bg}
      className="absolute left-0 top-0 z-[99999999] flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 text-green-700">
      <div
        ref={content}
        className="flex flex-col items-center justify-center space-y-12">
        <LogoSVG className="w-24 fill-current" />
        <p className="border-t border-green-700 px-12 py-5 text-sm tracking-wide">L O A D I N G</p>
      </div>
    </div>
  )
}
