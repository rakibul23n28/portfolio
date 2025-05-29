"use client";
import { Typewriter } from "react-simple-typewriter";

export default function DyTitle({ title }: { title: string[] }) {
  return (
    <Typewriter
      words={title}
      loop={true}
      cursor
      cursorStyle="."
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={4000}
    />
  );
}
