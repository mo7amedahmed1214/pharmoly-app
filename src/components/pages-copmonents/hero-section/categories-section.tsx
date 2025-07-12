import { categories } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";

const CategoriesSection = () => {
    return (
        <div className="col-span-4 lg:col-span-1 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-1 lg:grid-rows-11 gap-2 p-2 border rounded-xl border-blue-400">
            {
                categories.map((category) => (
                    <Link href={`/${category.name}`} key={category.id} className="flex items-center justify-start bg-white hover:bg-gray-100 transition-colors duration-200 p-1 rounded-md">
                        <Image
                            src={`/images/categories/${category.imgName}.svg`}
                            width={category.imgName == 'cough_cold_fever' ? 10 : 15}
                            height={category.imgName == 'cough_cold_fever' ? 10 : 15}
                            alt={category.name}
                            className="mr-2"
                        />
                        <p className="text-black text-[11px]">{category.name} </p>
                    </Link>
                ))
            }
        </div>

    )
}
export default CategoriesSection;