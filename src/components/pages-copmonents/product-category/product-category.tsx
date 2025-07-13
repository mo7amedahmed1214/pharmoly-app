import CategoryCard from "./category-card"
const ProductCategoryData = [
    {
        id: 1,
        name: "baby Girl",
        image: "/images/babyGirl.png",
        products: "3.457 K "
    },
    {
        id: 2,
        name: "Toddler Girl",
        image: "/images/toddlerGirl.png",
        products: "3.457 K "
    },
    {
        id: 3,
        name: "Best Seller",
        image: "/images/bestSaller.png",
        products: "3.457 K "
    },
    {
        id: 4,
        name: "Kid Girl",
        image: "/images/kidGirl.png",
        products: "3.457 K "
    },
    {
        id: 5,
        name: "baby Boy",
        image: "/images/babyGirl.png",
        products: "3.457 K "
    },
    {
        id: 6,
        name: "Trending",
        image: "/images/trending.png",
        products: "3.457 K "
    },
    {
        id: 7,
        name: "Toddler Boy",
        image: "/images/babyGirl.png",
        products: "3.457 K "
    },
    {
        id: 8,
        name: "kid Boy",
        image: "/images/kidBoy.png",
        products: "3.457 K "
    },

]
const ProductCategory = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-8  gap-4">

                {ProductCategoryData.map((item) => (
                    <CategoryCard item={item} />
                ))}

            </div>

        </div>
    )
}

export default ProductCategory