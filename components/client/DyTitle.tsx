"use client";
import { Typewriter } from "react-simple-typewriter";

export default function DyTitle({ title }: { title: string[] }) {
  return (
    <Typewriter
      words={title}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={4000}
    />
  );
}
