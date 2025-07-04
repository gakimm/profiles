'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

export default function ModalPopover({
  children,
  onClose,
  className = '',
  title,
}: {
  children: React.ReactNode
  onClose: () => void
  className?: string
  title?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)

    // Disable scroll saat modal muncul
    document.body.style.overflow = 'hidden'

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {

    // Enable scroll lagi saat modal ditutup
      document.body.style.overflow = 'auto'
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  if (!mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[50px]">
      {/* background BLUR */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      {/* MODAL CARD */}
      <div
        ref={ref}
        className={`relative bg-white rounded-xl font-semibold shadow-xl p-4 animate-fade-slide ${className}`}
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-md font-bold text-indigo-800">{title}</span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5 cursor-pointer" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}
