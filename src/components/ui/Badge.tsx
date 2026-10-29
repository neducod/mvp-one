import { cn } from "@/lib/cn";

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-lavender-100 px-2.5 py-1 text-xs font-medium text-lavender-700",
        className,
      )}
    >
      {children}
    </span>
  );
}