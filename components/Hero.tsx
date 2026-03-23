import React from "react";

export default function Hero() {
  return (
    <div className="w-full bg-[#00338D] text-white relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-0 grid lg:grid-cols-2 gap-10 items-center w-full relative z-10">

        {/* LEFT CONTENT */}
        <div className="z-20 order-2 lg:order-1">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-blue-200 mb-4 font-semibold">
            Accountants and Global Business Advisors
          </p>

          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              EMPOWERED <br /> WORKPLACES
            </h1>
            <div className="w-full max-w-[460px] h-[2px] bg-white mt-4 opacity-80"></div>
          </div>

          <p className="text-gray-200 mb-10 max-w-md text-sm md:text-base leading-relaxed opacity-90">
            by fostering inclusivity, encouraging growth, promoting collaboration,
            valuing diversity, supporting innovation, and building trust for shared success.
          </p>

          {/* BUTTON */}
          <div className="cursor-pointer hover:brightness-110 transition-all inline-block group">
            <img src="/lets_connect.png" alt="Let's Connect" className="h-10 md:h-12 w-auto" />
          </div>

          <p className="text-[10px] md:text-xs mt-16 text-blue-300 font-bold tracking-[0.15em] uppercase border-t border-white/10 pt-4 inline-block">
            ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN, AND THE WORLD
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end w-full">
          
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[550px] aspect-square lg:-mr-20">
            
            <div
              className="absolute inset-0 shadow-2xl overflow-hidden"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            >
              <img
                src="/hero.jpg"
                alt="office"
                className="w-full h-full object-cover scale-110" 
              />
            </div>

            {/* PROFILE STACK */}
            <div className="absolute bottom-[5%] right-[-8%] lg:right-[-10%] flex items-center gap-2 md:gap-3 z-30 bg-blue-900/60 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-xl">
              <div className="flex -space-x-2 md:-space-x-3">
                <img className="w-8 h-8 md:w-11 md:h-11 rounded-full border-2 border-white object-cover" src="/man1.png" alt="user" />
                <img className="w-8 h-8 md:w-11 md:h-11 rounded-full border-2 border-white object-cover" src="/man2.png" alt="user" />
                <img className="w-8 h-8 md:w-11 md:h-11 rounded-full border-2 border-white object-cover" src="/man3.png" alt="user" />
                <div className="w-8 h-8 md:w-11 md:h-11 bg-orange-500 flex items-center justify-center rounded-full border-2 border-white text-[8px] md:text-[10px] font-black uppercase">
                  MORE
                </div>
              </div>

              <div className="pr-2">
                <p className="font-bold text-base md:text-xl leading-none">250+</p>
                <p className="text-[8px] md:text-[10px] text-gray-300 uppercase font-bold tracking-tighter">Enjoy Working</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
}