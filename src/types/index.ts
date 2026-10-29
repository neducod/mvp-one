// Shared types. When Supabase arrives, these shapes are what your queries
// should map to (or you can generate DB types and adapt them to these).

export type HairStyle = "bob" | "twin" | "spiky";
export type AvatarMood = "calm" | "happy" | "sleepy" | "sad";

export interface AvatarConfig {
  hair: HairStyle;
  hairColor: string;
  eyeColor: string;
  mood: AvatarMood;
  bg: string;
  shirt: string;
  skin: string;
}

export interface Author {
  id: string;
  handle: string; // anonymous display name, never a real name
  avatar: AvatarConfig;
}

export interface Post {
  id: string;
  author: Author;
  body: string;
  tag: string;
  postedAt: string; // display string for now, e.g. "2 hours ago"
  likes: number;
  replies: number;
}