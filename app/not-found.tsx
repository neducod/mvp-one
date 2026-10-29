import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">This page isn&apos;t here yet</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-soft">
        It may not be built in this prototype yet, or the link may be mistyped.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </Container>
  );
}