import DesignCard from "./design-cart"
import DesignCardMiddle from "./design-cart-middle"

const ProductDesign = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className=" grid grid-cols-3 grid-rows-3 gap-4 ">
                {/* first col*/}
                <div className="col-span-3 md:col-span-1 row-span-3 ">
                    <DesignCard />
                </div>

                {/* second col */}
                <div className="col-span-3 md:col-span-1  row-span-3 ">
                    <DesignCardMiddle />
                </div>
                {/* third col */}
                <div className="col-span-3 md:col-span-1  row-span-3 ">
                    <DesignCard />

                </div>
            </div>
        </div>
    )
}

export default ProductDesign