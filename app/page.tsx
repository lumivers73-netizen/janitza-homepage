import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";
import TrustBar from "./components/TrustBar";
import FeaturedSolutions from "./components/FeaturedSolutions";
import ProductsSection from "./components/ProductsSection";
import CtaBanner from "./components/CtaBanner";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <IndustriesSection />
      <TrustBar />
      <FeaturedSolutions />
      <ProductsSection />
      <CtaBanner />
    </main>
  );
}
