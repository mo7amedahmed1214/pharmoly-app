import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const DesignCardData = [
    {
        id: 1,
        image: "/images/product2.png",
        title: "Always Discreet Incontinence Pads Heavy Absorbency",
        price: "$18.22",
        originalPrice: "$18.22",
        rating: 3.42,
        soldOut: 58,
        progress: 70,
    },
    {
        id: 2,
        image: "/images/product3.png",
        title: "Always Discreet Incontinence Pads Heavy Absorbency",
        price: "$18.22",
        originalPrice: "$18.22",
        rating: 3.42,
        soldOut: 58,
        progress: 70,
    },
    {
        id: 3,
        image: "/images/kidGirl.png",
        title: "Always Discreet Incontinence Pads Heavy Absorbency",
        price: "$18.22",
        originalPrice: "$18.22",
        rating: 3.42,
        soldOut: 58,
        progress: 70,
    },
]

const DesignCard = () => {
    return (<>
        {DesignCardData.map((item) => (
            <div className="grid grid-cols-3 grid-rows-5 border border-red-200 rounded-lg my-4 p-4 ">

                <div className="col-span-1 row-span-4">
                    <Image src={item.image} alt={item.title} width={200} height={200} />
                </div>
                <div className="col-span-2 row-span-4">

                    {/* Desc */}
                    <div className="space-y-2">
                        {/* Rate */}
                        <p className="flex items-center space-x-0.5 text-yellow-500 mt-1 mb-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} size={10} />
                            ))}

                            <span className="tracking-16 text-xs text-gray-500"> 3.42</span>
                        </p>

                        {/* Title */}

                        <Link href={`/product/${item.id}`}>
                            <button className="text-start font-medium font-fredoke tracking-32 text-gray-700 hover:text-gray-600 transition-colors duration-300">
                                {item.title}
                            </button>
                        </Link>

                        {/* price */}
                        <p className="text-green-600 font-semibold text-xl tracking-32">
                            {item.originalPrice} <span className="text-base font-medium text-gray-400 line-through ">{item.price}</span>
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
                        Almost sold out, last <span className="text-gray-600 font-semibold">{item.soldOut}</span> products
                    </p>
                </div>
            </div>
        ))}
    </>

    )
}

export default DesignCard