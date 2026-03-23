import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="flex flex-col lg:flex-row gap-40 relative">


          <div className="hidden lg:flex absolute left-0 top-0 z-10">
            <div className="bg-[#EEEEEE] w-[115px] h-[115px] pl-3 pb-3 rounded-2xl flex items-end text-[12px] font-bold text-black text-center">
              ABOUT<br />FIRM
            </div>
          </div>

          <div className="flex-1 lg:pl-[140px] relative">

            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <Image
                src="/map.jpg"
                alt="map"
                width={900}
                height={500}
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-[22px] font-semibold mb-4">
                HLS Global Group
              </h2>

              <p className="text-[14px] leading-6 text-gray-600 mb-10 max-w-[520px] text-justify">
                is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
              </p>

              <div className="max-w-[520px]">
                <div className="grid grid-cols-2 gap-[120px]">
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

                <div className="w-full h-[2px] bg-[#00338D] my-6"></div>

                <div className="grid grid-cols-2 gap-[120px]">
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
          </div>

          <div className="flex-1 relative pt-8">

            <div className="absolute -top-4 right-4 z-30">
              <div className="bg-orange-500 text-black text-xs px-4 py-2 rounded-full flex justify-between items-center shadow-md w-[250px] h-[25px]">
                <span className="font-semibold">WE ARE LOCATED</span>
                <span className="text-black font-bold px-2 py-[2px] rounded-full text-[12px]">
                  INDIA ▼
                </span>
              </div>
            </div>

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