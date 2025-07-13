import Image from "next/image"
interface BrandCardProps {
    item: {
        id: number;
        image: string;
    };
}
const BrandCard = ({ item }: BrandCardProps) => {
    return (
        <div key={item.id} className="lg:col-span-1 md:col-span-2 col-span-4 p-2 flex flex-col items-center justify-center rounded-lg">
            <Image src={item.image} alt='branch name' width={100} height={100} className='rounded-full' />
        </div>
    )
}

export default BrandCard