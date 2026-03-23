import Image from "next/image";

export default function Insights() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-40 relative">

          <div className="hidden lg:flex absolute left-0 top-0">
            <div className="bg-[#EEEEEE] w-[115px] h-[115px] rounded-2xl flex items-end text-[12px] font-semibold text-black pl-3 pb-3">
              INSPIRATION <br /> & INSIGHTS
            </div>
          </div>

          <div className="flex-1 lg:pl-[140px]">
            <div className="space-y-6 max-w-[700px]">
              <div className="border-b-2 border-[#00338D] pb-3">
                <h3 className="text-sm font-semibold text-[#00338D]">
                  Pre-market Entry
                </h3>
                <p className="text-xs text-[#00338D] leading-5">
                  Pre-market entry means trading securities before regular market hours...
                </p>
              </div>

              <div className="border-b-2 border-gray-400  pb-3 ">
                <h3 className="text-sm font-semibold">Market Entry</h3>
                <p className="text-xs text-gray-500">
                  Research demand, assess competition...
                </p>
              </div>

              <div className="border-b-2 border-gray-400 pb-3">
                <h3 className="text-sm font-semibold">Operations</h3>
                <p className="text-xs text-gray-500">
                  Planning, organizing, and managing processes...
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold">Growth & Expansion</h3>
                <p className="text-xs text-gray-500">
                  Increasing business size...
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex gap-4 h-[320px] md:h-[380px]">

              <div className="relative w-[60%] rounded-2xl overflow-hidden">
                <Image
                  src="/stockMoney.jpg"
                  alt="main"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-sm font-bold">Pre-Market</h3>
                  <p className="text-xs max-w-[220px]">
                    Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets 
                  </p>
                </div>
              </div>

              <div className="relative w-[20%] rounded-2xl overflow-hidden">
                <Image
                  src="/heroSection.jpg"
                  alt="operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-[40px]">
                  <span className="text-white font-bold text-xs rotate-[-90deg] tracking-wide">
                    Operations
                  </span>
                </div>
              </div>

              <div className="relative w-[20%] rounded-2xl overflow-hidden">
                <Image
                  src="/Insight3.jpg"
                  alt="growth"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-[40px]">
                  <span className="text-white font-bold text-xs rotate-[-90deg] tracking-wide">
                    Growth & Expansion
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}