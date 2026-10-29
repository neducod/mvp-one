import type { Post } from "@/types";
import { identities } from "./identities";

// Mock posts. Later, replace this import with a Supabase query that returns
// the same `Post[]` shape. The UI components won't need to change.
export const posts: Post[] = [
  {
    id: "p1",
    author: identities[0],
    tag: "Work",
    postedAt: "2 hours ago",
    likes: 48,
    replies: 9,
    body: "I did the slides, the research, and the speaker notes for a group project of five. I'm not angry. I'm just tired in a very specific, very quiet way.",
  },
  {
    id: "p2",
    author: identities[1],
    tag: "Small win",
    postedAt: "5 hours ago",
    likes: 112,
    replies: 14,
    body: "Cooked dinner for myself for the first time since moving. It was only pasta, but the apartment finally smells like somewhere I live.",
  },
  {
    id: "p3",
    author: identities[2],
    tag: "Late night",
    postedAt: "Yesterday",
    likes: 87,
    replies: 21,
    body: "It's 3 a.m. and my brain has chosen this moment to replay a conversation from 2019. Please send help, or a better hobby.",
  },
  {
    id: "p4",
    author: identities[3],
    tag: "Friendship",
    postedAt: "Yesterday",
    likes: 64,
    replies: 17,
    body: "A friend I used to talk to every day just liked a photo of mine and nothing else. I miss them and I don't know how to say that without making it weird.",
  },
  {
    id: "p5",
    author: identities[4],
    tag: "Family",
    postedAt: "2 days ago",
    likes: 203,
    replies: 33,
    body: "Told my parents I'm not going to be a doctor. Nobody shouted. The silence at dinner was louder, but I also slept better than I have in months.",
  },
  {
    id: "p6",
    author: identities[5],
    tag: "School",
    postedAt: "3 days ago",
    likes: 39,
    replies: 11,
    body: "Everyone else seems to understand the course material by osmosis. I've reread chapter four six times and I'm starting to take it personally.",
  },
];