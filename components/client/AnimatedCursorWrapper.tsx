"use client";

import AnimatedCursor from "react-animated-cursor";

export default function AnimatedCursorWrapper() {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={35}
      color="0, 150, 255"
      outerAlpha={0.3}
      innerScale={1}
      outerScale={2}
      trailingSpeed={15}
    />
  );
}
