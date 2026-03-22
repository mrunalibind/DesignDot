import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-[#F7F7F7] py-16">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row gap-12 relative">

          {/* LEFT LABEL (VISIBLE ONLY ON LARGE) */}
          <div className="hidden lg:flex absolute left-0 top-0">
            <div className="bg-gray-200 w-[110px] h-[110px] rounded-2xl flex items-center justify-center text-sm font-semibold text-gray-700 text-center">
              ABOUT <br /> FIRM
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="flex-1 lg:pl-[140px]">
            <h2 className="text-[22px] font-semibold mb-4">
              HLS Global Group
            </h2>

            <p className="text-[14px] leading-6 text-gray-600 mb-10 max-w-[520px]">
              is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
            </p>

            {/* STATS */}
            <div className="max-w-[520px]">

              {/* TOP */}
              <div className="grid grid-cols-2 gap-y-10">
                <div>
                  <h3 className="text-2xl font-bold">250+</h3>
                  <p className="text-xs text-gray-500">
                    Professional Staff Members Globally
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">1000+</h3>
                  <p className="text-xs text-gray-500">
                    Clients in the HLS Global Network
                  </p>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="w-full h-[2px] bg-blue-500 my-6"></div>

              {/* BOTTOM */}
              <div className="grid grid-cols-2 gap-y-8">
                <div>
                  <h3 className="text-2xl font-bold">35+</h3>
                  <p className="text-xs text-gray-500">
                    Years of Experience Connecting Japan and the World
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">15+</h3>
                  <p className="text-xs text-gray-500">
                    Countries Covered With Our Alliance Network
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 relative pt-8">

            {/* BUTTON */}
            <div className="absolute -top-4 right-4 z-10">
              <div className="bg-orange-500 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                <span className="font-semibold">WE ARE LOCATED</span>
                <span className="bg-black text-white px-2 py-[2px] rounded-full text-[10px]">
                  INDIA ▼
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/building.png"
                alt="building"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}