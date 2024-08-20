// === motion slides variants ===
type Position = any;
export const MOTION_SLIDES_VARIANTS = {
  enter: (direction: number) => ({
    x: direction > 0 ? 364 : -364,
    opacity: 0,
    height: "100%",
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    height: "100%",
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 364 : -364,
    opacity: 0,
    position: "absolute" as Position,
    top: 0,
    width: "100%",
  }),
};

export const MOTION_SLIDES_TRANSITION = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
};

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

export const MOTION_BLUR_IN = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};
