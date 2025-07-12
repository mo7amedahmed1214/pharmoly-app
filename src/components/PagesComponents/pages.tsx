import Header from "@/components/PagesComponents/NavBar/Header";
import { headerData } from "@/lib/constant";
import HeroSection from "./HeroSection/HeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";

export default function HomePage() {
    return (
        <div>
            <Header {...headerData} />
            <HeroSection />
            <ServicesSection />
        </div>
    );
}
