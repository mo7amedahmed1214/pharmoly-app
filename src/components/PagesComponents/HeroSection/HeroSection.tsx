import CategoriesSection from "./CategoriesSection";
import HeroImageSection from "./HeroImageSection";

const HeroSection = () => {



    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4  gap-6"  >
                <CategoriesSection />
                <HeroImageSection />
            </div>

        </div>

    )
}
export default HeroSection;