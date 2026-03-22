import React from "react";
import Image from "next/image";

const topics = [
  "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
  "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
  "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
  "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025"
];

const HotTopics = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* CONTAINER */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* LEFT LABEL */}
          <div className="flex-shrink-0">
            <img
              src="/lets_connect.png"
              alt="Hot Topics"  
            />
          </div>

          {/* TOPICS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">

            {topics.map((item, index) => (
              <div
                key={index}
                className="group border-t pt-4 cursor-pointer transition-all duration-300 hover:border-blue-500"
              >
                <p className="text-sm text-gray-700 leading-6 group-hover:text-black">
                  {item}
                </p>

                {/* ARROW */}
                <div className="mt-6 text-xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default HotTopics;