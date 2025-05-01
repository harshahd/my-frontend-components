const IconNames = [
  "Add",
  "Check",
  "Close",
  "Dashboard",
  "Docs",
  "Eye",
  "EyeSlash",
  "Hamburger",
  "LogOut",
  "Plans",
  "ArrowRight",
  "Bell",
  "Edit",
  "ChevronUp",
  "ChevronDown",
  "ChevronRight",
  "ChevronLeft",
] as const;

export type IconType = (typeof IconNames)[number];
