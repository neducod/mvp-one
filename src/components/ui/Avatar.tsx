import { cn } from "@/src/lib/cn";
import type { AvatarConfig } from "@/src/types";

// Anime-inspired avatars drawn as inline SVG, so there are no image files to
// manage and every avatar is just data (an AvatarConfig). In the real app you
// would store that config on the user's profile row.

function BackHair({ style, color, accent }: { style: AvatarConfig["hair"]; color: string; accent: string }) {
  switch (style) {
    case "twin":
      return (
        <g fill={color}>
          <ellipse cx="17" cy="62" rx="8" ry="17" />
          <ellipse cx="83" cy="62" rx="8" ry="17" />
          <path d="M24 52C20 28 34 14 50 14s30 14 26 38Z" />
          <circle cx="20" cy="46" r="3.4" fill={accent} />
          <circle cx="80" cy="46" r="3.4" fill={accent} />
        </g>
      );
    case "spiky":
      return <path fill={color} d="M24 52 22 30l10 6 1-20 10 12 7-18 7 18 10-12 1 20 10-6-2 22Z" />;
    case "bob":
    default:
      return <path fill={color} d="M23 52C18 26 34 13 50 13s32 13 27 39l1 24c-6 2-10 0-12-4H34c-2 4-6 6-12 4l1-24Z" />;
  }
}

function Eyes({ mood, eyeColor, hairColor }: { mood: AvatarConfig["mood"]; eyeColor: string; hairColor: string }) {
  if (mood === "happy" || mood === "sleepy") {
    // Closed eyes: upward arcs read as happy, downward arcs as sleepy.
    const d = mood === "happy" ? "q5-6 10 0" : "q5 5 10 0";
    return (
      <g fill="none" stroke="#2b2542" strokeWidth="2.6" strokeLinecap="round">
        <path d={`M35.5 55${d}`} />
        <path d={`M54.5 55${d}`} />
      </g>
    );
  }
  return (
    <g>
      {[40.5, 59.5].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="54" rx="4.4" ry="5.8" fill="#2b2542" />
          <ellipse cx={x} cy="55.2" rx="3.2" ry="4.2" fill={eyeColor} />
          <circle cx={x + 1.4} cy="52.2" r="1.7" fill="#fff" />
          <circle cx={x - 1.6} cy="57" r="0.8" fill="#fff" />
        </g>
      ))}
      {mood === "sad" && (
        <g stroke={hairColor} strokeWidth="2" strokeLinecap="round">
          <path d="M34.5 46l9 2" />
          <path d="M65.5 46l-9 2" />
        </g>
      )}
    </g>
  );
}

function Mouth({ mood }: { mood: AvatarConfig["mood"] }) {
  const stroke = { fill: "none", stroke: "#a4566b", strokeWidth: 1.8, strokeLinecap: "round" as const };
  if (mood === "happy") return <path d="M45 66q5 7 10 0Z" fill="#d9667f" />;
  if (mood === "sleepy") return <path d="M47.5 67.5h5" {...stroke} />;
  if (mood === "sad") return <path d="M46.5 69q3.5-3 7 0" {...stroke} />;
  return <path d="M46.5 67q3.5 3 7 0" {...stroke} />;
}

export function Avatar({
  config,
  size = 40,
  label = "Anonymous avatar",
  className,
}: {
  config: AvatarConfig;
  size?: number;
  label?: string;
  className?: string;
}) {
  const { hair, hairColor, eyeColor, mood, bg, shirt, skin } = config;
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={label}
      className={cn("shrink-0 rounded-full", className)}
    >
      <rect width="100" height="100" fill={bg} />
      <BackHair style={hair} color={hairColor} accent={shirt} />
      <path d="M14 100c2-16 16-22 36-22s34 6 36 22Z" fill={shirt} />
      <rect x="43" y="68" width="14" height="14" rx="5" fill={skin} />
      <ellipse cx="50" cy="50" rx="24" ry="26" fill={skin} />
      <ellipse cx="34" cy="62" rx="4.5" ry="2.6" fill="#f59bb0" opacity="0.45" />
      <ellipse cx="66" cy="62" rx="4.5" ry="2.6" fill="#f59bb0" opacity="0.45" />
      <Eyes mood={mood} eyeColor={eyeColor} hairColor={hairColor} />
      <Mouth mood={mood} />
      {/* Fringe/bangs sit on top of the face */}
      <path
        fill={hairColor}
        d="M25 50C22 26 37 17 50 17s28 9 25 33c-4-9-10-13-17-15-3 7-14 7-18 0-7 3-12 7-15 15Z"
      />
    </svg>
  );
}