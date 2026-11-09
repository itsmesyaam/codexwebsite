export type FAQ = { q: string; a: string };
export type Feature = { name: string; text: string };

/** Three-column comparison table: [label, option A, option B] */
export type Comparison = {
  columns: [string, string, string];
  rows: [string, string, string][];
};

/** Keys for the icon registry in components/icon.tsx */
export type IconKey =
  | "boxes" | "globe" | "smartphone" | "plug" | "sparkles" | "refresh" | "lifebuoy" | "cloud" | "pen" | "compass"
  | "package" | "factory" | "truck" | "building" | "bag" | "graduation" | "hardhat" | "heart" | "landmark" | "network";
