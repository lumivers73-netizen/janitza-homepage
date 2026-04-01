import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";
import TrustBar from "./components/TrustBar";
import FeaturedSolutions from "./components/FeaturedSolutions";
import ProductsSection from "./components/ProductsSection";
import CtaBanner from "./components/CtaBanner";
import DebugOverlay from "./components/DebugOverlay";

export default function Home() {
  return (
    <main>
      <div data-section="1 – Header">
        <Header />
      </div>
      <div data-section="2 – Hero Section">
        <HeroSection />
      </div>
      <div data-section="3 – Industries">
        <IndustriesSection />
      </div>
      <div data-section="4 – Trust Bar">
        <TrustBar />
      </div>
      <div data-section="5 – Featured Solutions">
        <FeaturedSolutions />
      </div>
      <div data-section="6 – Products (E-shop)">
        <ProductsSection />
      </div>
      <div data-section="7 – CTA Banner (Gridvis)">
        <CtaBanner />
      </div>
      <DebugOverlay />
    </main>
  );
}
