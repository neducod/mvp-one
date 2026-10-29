"use client"; // holds local "liked" state

import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { Avatar } from "@/src/components/ui/Avatar";
import { Badge } from "@/src/components/ui/Badge";
import { cn } from "@/src/lib/cn";
import type { Post } from "@/src/types"; 

export function PostCard({ post }: { post: Post }) {
  // Demo only: the like lives in this component's memory and resets on refresh.
  // With Supabase, onClick would call a server action and this would become
  // optimistic UI on top of the saved value.
  const [liked, setLiked] = useState(false);
  const likeCount = post.likes + (liked ? 1 : 0);

  return (
    <article className="flex h-full flex-col rounded-card border border-line bg-white p-5 sm:p-6">
      <header className="flex items-center gap-3">
        <Avatar config={post.author.avatar} size={44} label={`Avatar of ${post.author.handle}`} />
        <div className="min-w-0">
          <p className="truncate font-medium text-ink">{post.author.handle}</p>
          <p className="text-sm text-ink-faint">{post.postedAt}</p>
        </div>
        <Badge className="ml-auto shrink-0">{post.tag}</Badge>
      </header>

      <p className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-ink">{post.body}</p>

      <footer className="mt-5 flex items-center gap-1">
        <button
          type="button"
          aria-pressed={liked}
          aria-label={`Like (${likeCount})`}
          onClick={() => setLiked((l) => !l)}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
            liked ? "bg-blush text-heart" : "text-ink-soft hover:bg-lavender-100",
          )}
        >
          <Heart className={cn("size-[18px]", liked && "animate-pop fill-current")} aria-hidden />
          <span aria-hidden>{likeCount}</span>
        </button>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-ink-faint">
          <MessageCircle className="size-[18px]" aria-hidden />
          {post.replies}
          <span className="sr-only">replies</span>
        </span>
      </footer>
    </article>
  );
}