import React from "react";

export default function Hero() {
  return (
    <div className="w-full bg-[#00338D] text-white relative overflow-hidden min-h-[300px] lg:min-h-[250px] flex items-center pt-20 lg:pt-0">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-0 items-center w-full relative z-10">

        <div className="z-20 order-2 lg:order-1">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70 mb-4 font-semibold">
            Accountants and Global Business Advisors
          </p>

          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              EMPOWERED <br />
              <div className="inline-block">
                WORKPLACES
                <div className="w-full h-[2px] md:h-[3px] bg-white mt-1"></div>
              </div>
            </h1>
          </div>

          <p className="text-white/80 mb-10 max-w-md text-sm md:text-base font-light leading-relaxed">
            by fostering inclusivity, encouraging growth, promoting collaboration,
            valuing diversity, supporting innovation, and building trust for shared success.
          </p>

          <button
            className="bg-[#FF7300] text-black font-semibold text-sm px-6 py-3 flex items-center gap-3 w-[206px] h-[49px] rounded"
            style={{
              clipPath: "polygon(0 0, 88% 0, 100% 100%, 0% 100%)",
            }}
          >
            <span className="text-lg">→</span>
            LETS CONNECT
          </button>

          <div className="mt-16 lg:mt-24">
            <p className="text-[9px] md:text-[10px] text-white/60 font-bold tracking-[0.2em] uppercase leading-relaxed max-w-md">
              ACCOUNTING, TAXATION, & BUSINESS ADVISORY <br className="hidden md:block" />
              BETWEEN INDIA, JAPAN, AND THE WORLD
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-full order-1 lg:order-2 py-10 lg:py-0">

          <div
            className="relative overflow-hidden shadow-2xl transition-all duration-500 
               w-[280px] h-[350px] rounded-[60px] 
               lg:w-[580px] lg:h-[784px] lg:rounded-[167px]"
            style={{
              transform: "rotate(40.03deg)",
              backgroundColor: "#051C42",
            }}
          >
            <img
              src="/heroSection.jpg"
              alt="Office View"
              className="w-full h-full object-cover scale-[1.8] lg:scale-150"
              style={{
                transform: "rotate(-40.03deg)",
              }}
            />
          </div>

          <div className="absolute -bottom-2 lg:bottom-10 right-0 lg:-right-4 flex items-center gap-3">
            <div className="flex -space-x-2 lg:-space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden">
                  <img src={`/man${i}.png`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#FF7300] flex items-center justify-center rounded-full border-2 border-white text-[7px] lg:text-[8px] font-black">
                MORE
              </div>
            </div>
            <div>
              <p className="font-bold text-lg lg:text-xl leading-none">250+</p>
              <p className="text-[8px] lg:text-[9px] text-white/70 uppercase font-bold tracking-tighter">Enjoy Working<br />with us</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}