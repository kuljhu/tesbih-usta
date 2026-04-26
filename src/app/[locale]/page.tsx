import Navbar from "@/components/nav/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ManifestoSection from "@/components/manifesto/ManifestoSection";
import MaterialsSection from "@/components/materials/MaterialsSection";
import CutsSection from "@/components/cuts/CutsSection";
import GallerySection from "@/components/gallery/GallerySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ManifestoSection />
        <MaterialsSection />
        <CutsSection />
        <GallerySection />
      </main>
    </>
  );
}
