"use client";

import React from "react";

const topics = [
  "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
  "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
  "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
  "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025"
];

export default function HotTopics() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="relative flex-shrink-0">
            <button
              className="bg-[#FF7300] text-black font-semibold text-sm px-6 py-3 flex items-center gap-3 w-[206px] h-[49px] rounded transition-transform active:scale-95"
              style={{
                clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
              }}
            >
              <span className="text-lg">→</span>
              HOT TOPICS
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {topics.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between h-full pt-4 pb-4 cursor-pointer transition-all duration-300 select-none"
              >
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-[#00338D]" />

                <div className="relative z-10">
                  <p className="text-sm text-gray-700 leading-6 transition-colors duration-300 group-hover:text-black group-active:text-black">
                    {item}
                  </p>
                </div>

                <div className="mt-8 flex justify-end">
                  <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2">
                    →
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00338D] scale-x-0 transition-transform duration-100 ease-in-out group-hover:scale-x-100 group-active:scale-x-100 origin-center" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}