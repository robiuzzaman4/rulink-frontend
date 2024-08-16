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
