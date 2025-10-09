// Easing curves
export const ease = [0.34, 1.56, 0.64, 1];
export const standardEase = [0.33, 1, 0.68, 1];
export const smoothEase = [0.25, 1, 0.5, 1];

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
