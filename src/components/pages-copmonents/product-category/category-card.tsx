import Image from "next/image"
interface CategoryCardProps {
    item: {
        id: number;
        name: string;
        image: string;
        products: string;
    };
}
const CategoryCard = ({ item }: CategoryCardProps) => {
    return (
        <div key={item.id} className="lg:col-span-1 md:col-span-2 col-span-4 p-2 flex flex-col items-center justify-center rounded-lg">
            <Image src={item.image} alt={item.name} width={100} height={100} className='rounded-full' />
            <h2 className="text-center text-sm font-semibold mt-2 ">{item.name}</h2>
            <p className="flex text-10 text-gray-600 gap-1"><span>{item.products}</span> Products </p>
        </div>
    )
}

export default CategoryCard