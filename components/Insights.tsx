import Image from "next/image";

export default function Insights() {
  return (
    <section className="w-full bg-[#F7F7F7] py-16">
      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="flex flex-col lg:flex-row gap-12 relative">

          {/* SIDE LABEL */}
          <div className="hidden lg:flex absolute left-0 top-0">
            <div className="bg-gray-200 w-[110px] h-[110px] rounded-2xl flex items-center justify-center text-sm font-semibold text-gray-700 text-center">
              INSPIRATION <br /> & INSIGHTS
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="flex-1 lg:pl-[140px]">
            <div className="space-y-6 max-w-[700px]">

              {/* ACTIVE */}
              <div className="border-b border-blue-500 pb-3">
                <h3 className="text-sm font-semibold text-blue-600">
                  Pre-market Entry
                </h3>
                <p className="text-xs text-gray-500 leading-5">
                  Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.
                </p>
              </div>

              {/* OTHERS */}
              <div className="border-b pb-3">
                <h3 className="text-sm font-semibold">Market Entry</h3>
                <p className="text-xs text-gray-500">
                  Research demand, assess competition, choose model, localize offering. comply regulations, price strategically, partner locally, iterate learning.
                </p>
              </div>

              <div className="border-b pb-3">
                <h3 className="text-sm font-semibold">Operations</h3>
                <p className="text-xs text-gray-500">
                  Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold">Growth & Expansion</h3>
                <p className="text-xs text-gray-500">
                  Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE LAYOUT */}
          <div className="flex-1 flex gap-4 items-end">

            {/* BIG IMAGE */}
            <div className="relative w-[65%] h-[300px] md:h-[360px] rounded-2xl overflow-hidden">
              <Image
                src="/building.png"
                alt="main"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-semibold">Pre-Market</h3>
                <p className="text-xs max-w-[220px]">
                  Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets
                </p>
              </div>
            </div>

            {/* RIGHT STACK */}
            <div className="flex flex-col gap-4 w-[35%]">

              <div className="relative h-[140px] md:h-[170px] rounded-2xl overflow-hidden">
                <Image
                  src="/building.png"
                  alt="operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 text-white text-xs">
                  Operations
                </div>
              </div>

              <div className="relative h-[140px] md:h-[170px] rounded-2xl overflow-hidden">
                <Image
                  src="/building.png"
                  alt="growth"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 text-white text-xs">
                  Growth & Expansion
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}