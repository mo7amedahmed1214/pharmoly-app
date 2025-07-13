import Image from "next/image";
import logo from "../../../../public/images/product.png";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Card() {
  return (
    <div className="border border-gray-200 rounded-lg p-5 relative w-64">
      {/* Image */}
      <Image src={logo} alt="" height={240} width={240} />

      {/* Discount */}
      <p className="text-sm font-semibold absolute top-3 left-3 tracking-16 bg-green-600 text-white px-2.5 py-1 flex items-center rounded-full">
        23%
      </p>

      {/*Wishlist  */}
      <div className="absolute top-3 right-3 size-9 bg-red-100 rounded-full flex justify-center items-center border border-red-200">
        <Heart size={20} className="text-red-400" />
      </div>

      {/* Desc */}
      <div className="space-y-2">
        {/* Rate */}
        <p className="flex items-center space-x-0.5 text-yellow-400">
          <Star size={10} />
          <Star size={10} />
          <Star size={10} />
          <Star size={10} />
          <Star size={10} />
          <span className="tracking-16 text-xs text-gray-500"> 3.42</span>
        </p>

        {/* Title */}
        <h3 className="text-base font-medium font-fredoke tracking-32 underline">
          Always Discreet Incontinence Pads Heavy Absorbency
        </h3>

        {/* price */}
        <p className="text-green-600 font-semibold text-xl tracking-32">
          $18.22 <span className="text-base font-medium text-gray-400 line-through ">$18.22</span>
        </p>
      </div>

      {/* Add Button */}
      <Button className="w-full rounded-full h-10 mt-5 transition-all duration-500">Add to cart</Button>

      {/* Progress */}
      <Progress value={50} className="w-full mt-4" />

      {/* Numbers of saling */}
      <p className="text-sm tracking-16 mt-2 text-gray-500">
        Almost sold out, last <span className="text-gray-600 font-semibold">58</span> products
      </p>
    </div>
  );
}
