// app/config/motion.ts

// =============================================================================
// COMMON CONSTANTS AND EASING CURVES
// =============================================================================
// A slightly bouncy, natural-feeling easing curve
// @ts-ignore - Custom ease arrays work fine in Framer Motion despite TypeScript warnings
export const ease = [0.34, 1.56, 0.64, 1];
// Standard easing without bounce for simpler movements
// @ts-ignore - Custom ease arrays work fine in Framer Motion despite TypeScript warnings
export const standardEase = [0.33, 1, 0.68, 1];
// Smoother easing for more subtle transitions
// @ts-ignore - Custom ease arrays work fine in Framer Motion despite TypeScript warnings
export const smoothEase = [0.25, 1, 0.5, 1];

// =============================================================================
// HEADER LOGO ANIMATION SETTINGS
// =============================================================================
// Timing
const LETTER_STAGGER_DELAY = 0.02;    // Delay between each letter's animation
const LETTER_ANIMATION_DURATION = 0.2; // Duration of each letter's animation
const LETTERS_HIDE_DELAY = 1500;       // Time before letters start to disappear (4 seconds)
const LETTERS_HOVER_DURATION = 0.2;    // Duration for hover animation of letters

// Logo letter animations
export const headerLetterVariants = {
  // Initial state when page loads - immediately visible, no animation
  initial: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0 // Instant
    }
  },
  // When letters fade out after delay
  // @ts-ignore - Framer Motion handles this correctly despite TypeScript warnings
  hidden: (custom: number) => ({ 
    opacity: 0,
    x: -10,
    transition: {
      delay: custom * LETTER_STAGGER_DELAY,
      duration: LETTER_ANIMATION_DURATION,
      ease: ease
    }
  }),
  // When hovering over the logo to bring letters back
  // @ts-ignore - Framer Motion handles this correctly despite TypeScript warnings
  hover: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * LETTER_STAGGER_DELAY,
      duration: LETTERS_HOVER_DURATION,
       ease: smoothEase
    }
  })
};

// Header container animation - show immediately
export const headerTransition = {
  duration: 0.3,
  // @ts-ignore - Custom ease works fine in Framer Motion
  ease: smoothEase
};

// =============================================================================
// GENERAL INTERACTION ANIMATIONS
// =============================================================================
// Link hover animation
export const linkHover = {
  x: 2,
  transition: {
    duration: 0.3,
    // @ts-ignore - Custom ease works fine in Framer Motion
    ease: smoothEase
  }
};

// Button hover animation
// @ts-ignore - Framer Motion handles this transition correctly
export const buttonHover = {
  opacity: 0.8,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: smoothEase
  }
};

// Button tap/click animation
// @ts-ignore - Framer Motion handles this transition correctly
export const buttonTap = {
  scale: 0.97,
  transition: {
    duration: 0.15,
    ease: standardEase
  }
};

// Export timing constants for use in components
export const TIMING = {
  LETTERS_HIDE_DELAY,
  LETTER_STAGGER_DELAY,
  LETTER_ANIMATION_DURATION,
  LETTERS_HOVER_DURATION
};