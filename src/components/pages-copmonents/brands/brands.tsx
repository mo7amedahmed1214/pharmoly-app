import BrandCard from "./brand-card"

const ProductBrandData = [
    {
        id: 1,
        image: "/images/brand01.png",
    },
    {
        id: 2,
        image: "/images/brand04.png",
    },
    {
        id: 3,
        image: "/images/brand01.png",
    },
    {
        id: 4,
        image: "/images/brand04.png",
    },
    {
        id: 5,
        image: "/images/brand01.png",
    },
    {
        id: 6,
        image: "/images/brand04.png",
    },
    {
        id: 7,
        image: "/images/brand01.png",
    },
    {
        id: 8,
        image: "/images/brand04.png",
    },

]
const Brands = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-8  gap-4">

                {ProductBrandData.map((item) => (
                    <BrandCard item={item} />
                ))}

            </div>

        </div>
    )
}

export default Brands