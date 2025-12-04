import type { Easing } from 'framer-motion';

// Easing curves
export const ease: Easing = [0.34, 1.56, 0.64, 1];
export const standardEase: Easing = [0.33, 1, 0.68, 1];
export const smoothEase: Easing = [0.25, 1, 0.5, 1];

// Timing constants
export const TIMING = {
  INSTANT: 0,
  FAST: 100,
  NORMAL: 200,
  SLOW: 400,
} as const;

// Card animations
export const cardHover = {
  scale: 1,
  y: -2,
  borderWidth: '2px',
  transition: {
    duration: TIMING.NORMAL / 1000,
    ease: smoothEase,
  },
};

export const cardTap = {
  scale: 0.98,
  transition: {
    duration: TIMING.FAST / 1000,
    ease: standardEase,
  },
};

// Enhanced card animations with glow
export const cardHoverEnhanced = {
  scale: 1.01,
  y: -4,
  transition: {
    duration: 0.3,
    ease: smoothEase,
  },
};

export const cardHoverGlow = {
  boxShadow: '0 0 30px rgba(0, 102, 255, 0.5)',
  scale: 1.01,
  y: -4,
  transition: {
    duration: 0.3,
    ease: smoothEase,
  },
};

// Bento grid animations
export const bentoContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const bentoCard = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: smoothEase,
    },
  },
};

// Link hover animation
export const linkHover = {
  x: 2,
  transition: {
    duration: 0.3,
    ease: smoothEase,
  },
};

// Button animations
export const buttonHover = {
  opacity: 0.8,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: smoothEase,
  },
};

export const buttonTap = {
  scale: 0.97,
  transition: {
    duration: 0.15,
    ease: standardEase,
  },
};

// Scroll-triggered fade in animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
};

// Scale in animation
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
};
