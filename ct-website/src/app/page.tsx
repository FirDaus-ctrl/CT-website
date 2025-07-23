import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { ClientReferences } from "@/components/client-references";

export const metadata = {
  title: "Home | Concepts Technologies",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <ClientReferences />
      <Newsletter />
      <Footer />
    </div>
  );
}

