import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full bg-[#0F3D91] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10">
          <p className="text-sm uppercase tracking-wide text-gray-300 mb-4">
            Accountants and Global Business Advisors
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            EMPOWERED <br /> WORKPLACES
            <div className="w-[350px] h-[2px] bg-white"></div>
          </h1>
          

          <p className="text-gray-200 mb-8 max-w-md">
            by fostering inclusivity, encouraging growth, promoting collaboration,
            valuing diversity, supporting innovation, and building trust for shared success.
          </p>

          {/* BUTTON */}
          <img src="/lets_connect.png" alt="" />

          <p className="text-xs mt-10 text-gray-300">
            ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN, AND THE WORLD
          </p>
        </div>


        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center lg:justify-end">

          {/* RESPONSIVE WRAPPER */}
          <div className="
    relative 
    w-[260px] h-[260px] 
    sm:w-[320px] sm:h-[320px]
    md:w-[420px] md:h-[420px]
    lg:w-[520px] lg:h-[520px]
    -mt-[60px] sm:-mt-[80px] md:-mt-[100px] lg:-mt-[120px]
  ">

            {/* DIAMOND */}
            <div className="absolute inset-0 rotate-45 overflow-hidden rounded-[40px] md:rounded-[60px] shadow-lg">

              <img
                src="/hero.jpg"
                alt="office"
                className="
          w-[140%] h-[140%] 
          object-cover 
          -rotate-45 
          scale-125 md:scale-160
        "
              />
            </div>

          </div>

          {/* PROFILE STACK */}
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 flex items-center gap-2 sm:gap-3 z-20">

            <div className="flex -space-x-2 sm:-space-x-3">
              <img className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white" src="/man1.png" />
              <img className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white" src="/man2.png" />
              <img className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white" src="/man3.png" />
              <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-orange-500 flex items-center justify-center rounded-full border-2 border-white text-[10px] md:text-xs font-bold">
                MORE
              </div>
            </div>

            <div>
              <p className="font-bold text-sm md:text-lg">250+</p>
              <p className="text-[10px] md:text-xs text-gray-200">Enjoy Working</p>
            </div>
          </div>
        </div>
      </div>

      {/* CURVE OVERLAY */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-[120px]"></div> */}
    </div>
  );
};
