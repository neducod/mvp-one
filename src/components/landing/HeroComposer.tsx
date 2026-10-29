"use client"; // textarea and avatar-picker state

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Avatar } from "@/src/components/ui/Avatar";
import { Button } from "@/src/components/ui/Button";
import { identities } from "@/src/data/indentities";

const MAX = 500;

// A preview of the writing experience. It never saves or sends anything:
// the button just sends visitors to the signup page.
export function HeroComposer() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const identity = identities[index];

  return (
    <div className="relative rounded-card border border-line bg-white p-5 shadow-float sm:p-6">
      <div className="flex items-center gap-3">
        <Avatar config={identity.avatar} size={48} label={`Avatar of ${identity.handle}`} />
        <div className="min-w-0">
          <p className="truncate font-medium text-ink">{identity.handle}</p>
          <p className="text-sm text-ink-faint">Sample handle</p>
        </div>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % identities.length)}
          className="ml-auto inline-flex size-10 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-lavender-100"
          aria-label="Try a different avatar and handle"
        >
          <RefreshCw className="size-[18px]" aria-hidden />
        </button>
      </div>

      <label htmlFor="hero-draft" className="sr-only">
        What is on your mind?
      </label>
      <textarea
        id="hero-draft"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={MAX}
        rows={5}
        placeholder="What's been on your mind today? Say it here. It won't be tied to your name."
        className="mt-4 w-full resize-none rounded-2xl border border-line bg-paper p-4 leading-relaxed text-ink placeholder:text-ink-faint focus:border-lavender-400"
      />

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-sm text-ink-faint">
          {text.length}/{MAX}
        </span>
        <Button href="/signup">Sign up to post</Button>
      </div>
      <p className="mt-4 text-sm text-ink-faint">This box is a preview. Nothing you type is saved or sent anywhere.</p>
    </div>
  );
}