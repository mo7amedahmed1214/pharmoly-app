import { services } from "@/lib/constant"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const ServiceCard = () => {
    return (
        <>
            {services.map((service, index) => (
                <div key={index} className=" flex justify-between items-center">
                    <div>
                        <Image src={service.image} alt={service.title} width={80} height={80} />
                    </div>
                    <div className="flex flex-col ml-5">
                        <h3 className="text-xs font-bold mb-1">{service.title}</h3>
                        <p className="text-gray-600 text-xs mb-2">{service.description}</p>
                        <div>
                            <Link href={service.link} className="text-gray-900 hover:underline text-[10px]">
                                View More
                            </Link>
                            <ArrowRight className="inline ml-1 text-gray-900" size={12} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ServiceCard