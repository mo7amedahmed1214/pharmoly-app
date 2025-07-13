import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, Star } from "lucide-react"
import Image from "next/image"

const DesignCard = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-5 border border-red-200 rounded-lg my-4 p-4 ">

            <div className="col-span-1 row-span-4">
                <Image src="/images/product2.png" alt="" width={200} height={200} />
            </div>
            <div className="col-span-2 row-span-4">
                <p className="text-sm font-semibold absolute top-3 left-3 tracking-16 bg-green-600 text-white px-2.5 py-1 flex items-center rounded-full">
                    23%
                </p>

                {/*Wishlist  */}
                <div className="absolute top-3 right-3 size-9 bg-bgButton rounded-full flex justify-center items-center border border-red-200">
                    <Heart size={20} className="text-textButton" />
                </div>

                {/* Desc */}
                <div className="space-y-2">
                    {/* Rate */}
                    <p className="flex items-center space-x-0.5 text-yellow-500">
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
                <Button className="w-full rounded-full h-10 mt-5  text-textButton bg-bgButton hover:bg-bgButtonHover transition-all duration-500">Add to cart</Button>

            </div>
            <div className="col-span-3 row-span-1 ">

                {/* Progress */}
                <Progress value={70} className="w-full mt-4 " />

                {/* Numbers of saling */}
                <p className="text-sm tracking-16 mt-2 text-gray-500">
                    Almost sold out, last <span className="text-gray-600 font-semibold">58</span> products
                </p>
            </div>
        </div>
    )
}

export default DesignCard