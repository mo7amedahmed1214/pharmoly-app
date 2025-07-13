import React from "react";

export default function Bannar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 ">
      <div className="bg-gray-200 h-full  w-full flex gap-2.5 items-center justify-center text-[#0C4A6E]  rounded-lg">
        <h2 className="font-bold  font-fredoke tracking-4 text-lg ">RETURN CASH BACK</h2>
        <p className="text-sm tracking-16 ">
          <span className="font-semibold">Earn 5% cash back on Bumedi.com</span> See if you’re
          pre-approved with no credit risk.
        </p>

        <button className="px-3 py-2 rounded-lg border border-[#0C4A6E] text-sm font-semibold tracking-32">
          Discover More
        </button>
      </div>
    </div>
  );
}
