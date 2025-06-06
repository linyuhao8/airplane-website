"use client";
import React from "react";
import Image from "next/image";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Grid() {
  const data = [
    {
      id: 1,
      title: "Airbus A330-300",
      description:
        "A wide-body aircraft known for its fuel efficiency and long-range capabilities. Used extensively for international travel.",
      imageUrl: "/3N1.png",
      year: 1993,
      manufacturer: "Airbus",
    },
    {
      id: 2,
      title: "Airbus A310",
      description:
        "A twin-engine, medium- to long-range aircraft introduced in the 1980s. Known for its versatility and reliability.",
      imageUrl: "/3N1.png",
      year: 1983,
      manufacturer: "Airbus",
    },
    {
      id: 3,
      title: "Airbus A220-300",
      description:
        "A modern, fuel-efficient narrow-body jet ideal for short- to medium-haul flights. Offers excellent passenger comfort.",
      imageUrl: "/3N1.png",
      year: 2016,
      manufacturer: "Airbus (formerly Bombardier)",
    },
    {
      id: 4,
      title: "Airbus A220-300",
      description:
        "A modern, fuel-efficient narrow-body jet ideal for short- to medium-haul flights. Offers excellent passenger comfort.",
      imageUrl: "/3N1.png",
      year: 2016,
      manufacturer: "Airbus (formerly Bombardier)",
    },
    {
      id: 5,
      title: "Airbus A220-300",
      description:
        "A modern, fuel-efficient narrow-body jet ideal for short- to medium-haul flights. Offers excellent passenger comfort.",
      imageUrl: "/3N1.png",
      year: 2016,
      manufacturer: "Airbus (formerly Bombardier)",
    },
  ];

  return (
    <div className="bg-white w-full min-h-[300px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        scrollbar={{ draggable: true }}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="border-r border-gray-300 max-sm:border-b p-10 bg-white"
            style={{ height: "auto" }}
          >
            <div className="bg-white">
              <span className="bg-[#D7C5B4] w-auto py-1 px-1">
                {item.manufacturer}
              </span>
              <div className="w-full flex justify-center mt-5">
                <Image
                  src={item.imageUrl} // <-- 這裡改成 item
                  alt={item.title} // <-- 這裡改成 item
                  width={300}
                  height={200}
                  className="w-[85%] h-auto object-cover"
                />
              </div>
              <div className="mt-5 flex flex-row justify-between w-full">
                <div className="flex-col flex items-start">
                  <span className="text-gray-400 text-sm">{item.year}</span>
                  <h2 className="text-xl font-bold mt-2">{item.title}</h2>{" "}
                  {/* 改成 item */}
                  <p className="text-gray-500 mt-1 text-sm">
                    {item.description}
                  </p>
                  {/* 改成 item */}
                </div>
                <div className="mt-2 flex items-end justify-center pl-5">
                  <button className="text-black">
                    Go<span className="ml-1 text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
