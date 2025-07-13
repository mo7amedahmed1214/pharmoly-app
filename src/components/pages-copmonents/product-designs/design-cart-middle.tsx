
import { Button } from "@/components/ui/button"
import { Progress } from "@radix-ui/react-progress"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
import CountdownTimer from "./countdown-timer"

const DesignCardMiddle = () => {
    const targetDate = '2025-07-20T23:59:59';

    return (
        <div className=" flex flex-col h-[96.5%] gap-6 border border-red-500  rounded-lg mt-4 p-4 justify-center items-center">
            <h1 className="text-lg font-semibold tracking-16 text-textButton mt-3">
                Today's Last Opportunity
            </h1>
            <p className="text-gray-500 text-xs text-center px-3">Cras sit amet mi erat. In at felis sit amet quam tincidunt pharetra sed quis risus.</p>

            <CountdownTimer targetDate={targetDate} />
            <Image src="/images/product3.png" alt="product image" width={250} height={250} />



            {/* Desc */}
            <div className="space-y-4 flex flex-col items-center justify-center">
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
                <h3 className="text-base font-medium font-fredoke tracking-32 text-center underline">
                    Always Discreet Incontinence Pads Heavy Absorbency
                </h3>

                {/* price */}
                <p className="text-green-600 font-semibold text-xl tracking-32">
                    $18.22 <span className="text-base font-medium text-gray-400 line-through ">$18.22</span>
                </p>
            </div>

            {/* Add Button */}
            <Button className="w-full rounded-full h-10 mt-5 text-textButton bg-bgButton hover:bg-bgButtonHover  transition-all duration-500">Add to cart</Button>


        </div>
    )
}

export default DesignCardMiddle