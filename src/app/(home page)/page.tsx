import Bannar from "@/components/pages-copmonents/bannar/bannar";
import Brands from "@/components/pages-copmonents/brands/brands";
import Features from "@/components/pages-copmonents/features/features";
import Feedback from "@/components/pages-copmonents/feedback/feedback";
import HeroSection from "@/components/pages-copmonents/hero-section/hero-section";
import MostPopular from "@/components/pages-copmonents/most-popular/most-popular";
import ProductCategory from "@/components/pages-copmonents/product-category/product-category";
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

      {/* Product Category */}
      <ProductCategory />

      {/* Brands */}
      <Brands />

      {/* Features */}
      <Features />

      {/* Bannar */}
      <Bannar />

      {/* Feedback */}
      <Feedback />
    </section>
  );
}
