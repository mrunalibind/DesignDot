import React from "react";
import Image from "next/image";

const topics = [
  "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
  "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
  "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
  "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025"
];

export default function  HotTopics () {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-10">

          {/* 🔶 IMAGE LABEL WITH TEXT */}
          <div className="relative flex-shrink-0 w-[200px] h-[60px]">
            <Image
              src="/topic.png"
              alt="Hot Topics"
              fill
              className="object-contain"
            />

            {/* TEXT OVER IMAGE */}
            <div className="absolute inset-0 flex items-center justify-start">
              <span className="text-black text-xs font-semibold tracking-wide pl-4">
                HOT TOPICS
              </span>
            </div>
          </div>

          {/* 🔥 TOPICS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">

            {topics.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between h-full border-t pt-4 cursor-pointer transition-all duration-300 hover:border-blue-500"
              >
                <p className="text-sm text-gray-700 leading-6 group-hover:text-black">
                  {item}
                </p>

                {/* ARROW */}
                <div className="mt-8 flex justify-end">
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};
