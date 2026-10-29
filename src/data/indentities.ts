import type { Author } from "@/types";

// Mock anonymous identities. Posts reference these, and the landing-page
// composer cycles through them to preview "pick an avatar".
export const identities: Author[] = [
  {
    id: "u1",
    handle: "SoftLantern",
    avatar: { hair: "bob", hairColor: "#3b2f5c", eyeColor: "#7352cc", mood: "calm", bg: "#ece6fd", shirt: "#a892ec", skin: "#fbe0cf" },
  },
  {
    id: "u2",
    handle: "PaperCrane",
    avatar: { hair: "twin", hairColor: "#e58aa6", eyeColor: "#c2506b", mood: "happy", bg: "#fbe4ea", shirt: "#ffffff", skin: "#f6d2b8" },
  },
  {
    id: "u3",
    handle: "QuietTide",
    avatar: { hair: "spiky", hairColor: "#4a74b4", eyeColor: "#2f7d6b", mood: "sleepy", bg: "#dbeafb", shirt: "#2b2542", skin: "#e9b995" },
  },
  {
    id: "u4",
    handle: "MidnightTea",
    avatar: { hair: "bob", hairColor: "#6b4430", eyeColor: "#3d6fb5", mood: "sad", bg: "#dcf3e8", shirt: "#f4b8c8", skin: "#c98f6a" },
  },
  {
    id: "u5",
    handle: "SunnyDaze",
    avatar: { hair: "twin", hairColor: "#eab84a", eyeColor: "#5a3fa8", mood: "happy", bg: "#fff0c9", shirt: "#8b6fe0", skin: "#fbe0cf" },
  },
  {
    id: "u6",
    handle: "NightOwlMoss",
    avatar: { hair: "spiky", hairColor: "#2e2a3f", eyeColor: "#2f7d6b", mood: "calm", bg: "#ece6fd", shirt: "#6bbf9d", skin: "#f6d2b8" },
  },
];