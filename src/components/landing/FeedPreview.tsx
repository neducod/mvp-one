import { PostCard } from "../feed/Postcard";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Post } from "@/src/types";

export function FeedPreview() {
  const preview = posts.slice(0, 3);

  return (
    <section aria-labelledby="feed-title" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 id="feed-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What people are writing
            </h2>
            <p className="mt-3 text-ink-soft">Sample posts, written for this prototype. Try the like button.</p>
          </div>
          <Button href="/feed" variant="secondary">
            See the full feed
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {preview.map((post, i) => (
            // Nudging the middle card down on wide screens breaks up the grid.
            <div key={post.id} className={i === 1 ? "lg:mt-10" : undefined}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}