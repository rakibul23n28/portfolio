"use client";

import dynamic from "next/dynamic";

const Cetegory = dynamic(() => import("@/app/projects/page"), {
  ssr: false,
  loading: () => (
    <div className="">
      <h2 className="text-3xl font-serif font-semibold">Loading</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="w-full card-style h-64 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
          ></div>
        ))}
      </div>
    </div>
  ),
});

export default function CetegoryWrapper() {
  return <Cetegory />;
}
