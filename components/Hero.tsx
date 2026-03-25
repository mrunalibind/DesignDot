"use client";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full bg-[#00338D] text-white relative overflow-hidden min-h-[600px] lg:min-h-[680px] flex items-center pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-0 items-center w-full relative z-10">
        
        <div className="z-20 mt-[100px] order-2 lg:order-1 w-full">
          <p className="text-[10px] md:text-[9px] uppercase tracking-[0.2em] text-[#B8B3B3] mb-4 font-semibold">
            Accountants and Global Business Advisors
          </p>

          <div 
            className="mb-6 transition-opacity duration-1000 ease-out"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transitionProperty: 'opacity, transform'
            }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold leading-[1.1] tracking-tight w-full">
              EMPOWERED <br />
              <div className="inline-block">
                WORKPLACES
                <div className="w-full h-[2px] md:h-[3px] bg-white mt-1"></div>
              </div>
            </h1>
          </div>

          <p className="text-[#FFFFFF] mb-10 text-sm md:text-base font-light leading-relaxed w-full max-w-none lg:max-w-md">
            by fostering inclusivity, encouraging growth, promoting collaboration,
            valuing diversity, supporting innovation, and building trust for shared success
          </p>

          <button
            className="bg-[#FF7300] text-black font-semibold text-sm px-6 py-3 flex items-center gap-3 w-[206px] h-[49px] rounded transition-transform hover:scale-105"
            style={{
              clipPath: "polygon(0 0, 88% 0, 100% 100%, 0% 100%)",
            }}
          >
            <span className="text-lg">→</span>
            LETS CONNECT
          </button>

          <div className="mt-16 mb-6 lg:mt-15">
            <p className="text-[9px] md:text-[10px] text-[#FFFFFF] font-bold tracking-[0.2em] uppercase leading-relaxed w-full max-w-none lg:w-full">
              ACCOUNTING, TAXATION, & BUSINESS ADVISORY
              BETWEEN INDIA, JAPAN, AND THE WORLD
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-full order-1 lg:order-2 py-10 lg:py-0">
          <div
            className="relative overflow-hidden shadow-2xl transition-all duration-500 
               w-[300px] h-[380px] rounded-[60px] 
               md:w-[450px] md:h-[500px]
               lg:absolute lg:w-[800px] lg:h-[750px] lg:rounded-[100px] 
               lg:-top-70 lg:-right-30 lg:translate-x-0"
            style={{
              transform: "rotate(50.03deg)",
              backgroundColor: "#051C42",
            }}
          >
            <img
              src="/heroSection.jpg"
              alt="Office View"
              className="w-[900px] h-[850px] object-cover scale-[1.5] lg:scale-[1.2]"
              style={{
                transform: "rotate(-50.03deg)",
                objectPosition: "center",
              }}
            />
          </div>

          
          <div className="absolute bottom-12 lg:-bottom-20 right-4 lg:top-[495] lg:right-[-95] flex items-center gap-3">
            <div className="flex -space-x-2 lg:-space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden">
                  <img src={`/man${i}.png`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-6 h-6 lg:w-10 lg:h-10 bg-[#FF7300] flex items-center justify-center rounded-full border-2 border-white text-[7px] lg:text-[9px] font-black text-white">
                MORE
              </div>
            </div>
            <div className="pr-2">
              <p className="font-bold text-lg lg:text-2xl leading-none">250+</p>
              <p className="text-[8px] lg:text-[10px] text-white/70 uppercase font-bold tracking-tighter">Enjoy Working<br />with us</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}