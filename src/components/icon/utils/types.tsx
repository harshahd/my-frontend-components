const IconNames = [
  "ArrowRight",
  "Bell",
  "ChevronUp",
] as const;

export type IconType = (typeof IconNames)[number];
