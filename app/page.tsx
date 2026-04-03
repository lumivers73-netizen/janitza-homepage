import UtilityBar from "./components/UtilityBar";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import TrustBar from "./components/TrustBar";
import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";
import NormsBar from "./components/NormsBar";
import FeaturedSolutions from "./components/FeaturedSolutions";
import CtaBanner from "./components/CtaBanner";
import ProductsSection from "./components/ProductsSection";
import ReferencesSection from "./components/ReferencesSection";
import NewsSection from "./components/NewsSection";
import ProductGuide from "./components/ProductGuide";
import TechDocs from "./components/TechDocs";
import NormsSection from "./components/NormsSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";
import DebugOverlayA from "./components/DebugOverlayA";

export default function Home() {
  return (
    <main>
      <div data-section="1 – Utility Bar">
        <UtilityBar />
      </div>

      <div data-section="2 – Header">
        <Header />
      </div>

      <div data-section="3 – Hero">
        <HeroBanner />
      </div>

      <div data-section="4 – Produktové kategorie" id="kategorie">
        <HeroSection />
      </div>

      <div data-section="4a – Trust Bar">
        <TrustBar />
      </div>

      <div data-section="5 – Odvětví">
        <IndustriesSection />
      </div>

      <div data-section="5a – Normy">
        <NormsBar />
      </div>

      <div data-section="6 – Promo bannery">
        <FeaturedSolutions />
      </div>

      <div data-section="7 – GridVis® Software">
        <CtaBanner />
      </div>

      <div data-section="8 – Doporučené produkty">
        <ProductsSection />
      </div>

      <div data-section="9 – Reference">
        <ReferencesSection />
      </div>

      <div data-section="10 – Novinky">
        <NewsSection />
      </div>

      <div data-section="11 – Průvodce výběrem">
        <ProductGuide />
      </div>

      <div data-section="12 – Dokumentace">
        <TechDocs />
      </div>

      <div data-section="13 – Normy">
        <NormsSection />
      </div>

      <div data-section="14 – Kontakt">
        <ContactSection />
      </div>

      <div data-section="15 – FAQ">
        <FAQSection />
      </div>

      <div data-section="16 – Partneři">
        <PartnersSection />
      </div>

      <div data-section="17 – Footer">
        <Footer />
      </div>

      <FloatingElements />
      <DebugOverlayA />
    </main>
  );
}
