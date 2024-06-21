"use client";

import { useAtBottom } from "@/lib/use-at-bottom";
import { useInView } from "react-intersection-observer";

export default function ChatScrollAnchor() {
  const isAtBottom = useAtBottom();
  const { ref, entry, inView } = useInView({
    trackVisibility: false,
    delay: 100,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div ref={ref} className="h-0">
      {<div className="h-px w-full" />}
    </div>
  );
}
