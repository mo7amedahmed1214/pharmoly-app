import { ArrowRight } from "lucide-react";
import Card from "./card";

export default function MostPopular() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      {/* Header */}
      <div className=" flex justify-between items-center h-20 w-full border-t border-gray-200">
        {/* Title */}
        <h2 className="font-fredoke text-2xl font-medium tracking-4">Most popular products</h2>

        {/* View button[] */}
        <button className="text-blue-500 tracking-16 font-medium text-sm flex items-center gap-2">
          View more <ArrowRight size={14} />
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
