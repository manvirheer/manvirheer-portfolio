'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  { src: '/images/hero/image1.png', alt: 'Gears' },
  { src: '/images/hero/image2.png', alt: 'Lambda cloud' },
  { src: '/images/hero/image3.png', alt: 'Router' },
  { src: '/images/hero/image4.png', alt: 'Server rack' },
]

export const FloatingParallaxImages = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) return null

  const imageSize = 180

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Static images in bottom-right corner, diagonal going down-right */}
      {images.map((img, index) => (
        <div
          key={img.src}
          className="absolute"
          style={{
            right: `${30 + (3 - index) * 90}px`,
            bottom: `${50 + index * 70}px`,
            opacity: 0.4,
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={imageSize}
            height={imageSize}
            priority={index < 2}
          />
        </div>
      ))}
    </div>
  )
}
