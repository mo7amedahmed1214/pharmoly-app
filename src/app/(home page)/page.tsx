import Bannar from "@/components/pages-copmonents/bannar/bannar";
import Features from "@/components/pages-copmonents/features/features";
import HeroSection from "@/components/pages-copmonents/hero-section/hero-section";
import MostPopular from "@/components/pages-copmonents/most-popular/most-popular";
import ProductDesign from "@/components/pages-copmonents/product-designs/product-design";
import ServicesSection from "@/components/pages-copmonents/services-section/services-section";

export default function Home() {
  return (
    <section>
      {/* Hero */}
      <HeroSection />

      {/* Services */}
      <ServicesSection />

      {/* Most popular */}
      <MostPopular />

      {/* Product Designs */}
      <ProductDesign />

      {/* Features */}
      <Features />

      {/* Bannar */}
      <Bannar />
    </section>
  );
}
