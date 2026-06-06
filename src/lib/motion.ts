export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Content stays visible (opacity 1) — only subtle Y motion for polish */
export const fadeUp = {
  hidden: { opacity: 1, y: 10 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay, ease: easeOut },
  }),
};

export const fadeIn = {
  hidden: { opacity: 1 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.25, delay, ease: easeOut },
  }),
};

export const stagger = 0.04;
