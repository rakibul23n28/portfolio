"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ProjectType } from "@/components/Projects";
import Image from "next/image";

const ProjectImageSlider = ({ project }: { project: ProjectType }) => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="rounded-lg"
      style={{ "--swiper-navigation-color": "#fff" } as React.CSSProperties}
    >
      {project.images.map((imgUrl, i) => (
        <SwiperSlide key={i}>
          <Image
            src={imgUrl}
            alt={`${project.title} ${i + 1}`}
            className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
            width={500}
            height={500}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectImageSlider;
