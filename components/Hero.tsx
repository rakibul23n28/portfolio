import React from "react";
import portfolio from "@/data/portfolio.json";
import DyTitle from "./client/DyTitle";
import { DownloadIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 pt-10 pb-10 dark:text-white items-center justify-center text-center">
        <div className="flex flex-col gap-2 mb-2 md:mb-4 items-center justify-center">
          <span className="w-16 h-[4px] bg-rose-500 rounded"></span>
          <span className="w-8 h-[4px] bg-rose-500 rounded"></span>
        </div>

        <h4 className="capitalize md:text-8xl text-7xl font-semibold">
          I&apos;m {portfolio.name}
        </h4>
        <h4 className="text-rose-500 ml-1 md:text-8xl text-7xl">
          <DyTitle title={portfolio.title} />
        </h4>
        <p className="text-xl text-gray-600">{portfolio.description}</p>
        <div className="flex gap-4 justify-center sm:justify-start mt-4">
          <a
            href={portfolio.buttons[0].url}
            download // ✅ this triggers the download
            className="px-4 sm:px-6 py-2 bg-rose-600 rounded-full text-white font-bold"
          >
            <DownloadIcon className="inline mx-1" /> Download CV
          </a>
          <a
            href={portfolio.buttons[1].url}
            className="px-4 sm:px-6 py-2 bg-rose-600 rounded-full text-white font-bold"
          >
            Hire me
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-10 items-center justify-center">
        <span className="w-8 h-[4px] bg-rose-500 rounded"></span>
        <span className="w-16 h-[4px] bg-rose-500 rounded"></span>
      </div>
    </div>
  );
};

export default Hero;
