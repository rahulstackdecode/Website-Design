import Header from "@/src/components/Header";
import HeroSection from "@/src/components/HeroSection";
import ServicesSection from "@/src/components/ServicesSection";
import BusinessSection from "@/src/components/BusinessSection";
import ProjectSection from "@/src/components/ProjectSection"
import ClientLogos from "@/src/components/ClientLogos"
import Footer from "@/src/components/Footer";
export default function Home() {
  return (
   <>

  <Header></Header>
  <HeroSection></HeroSection>
   <ServicesSection></ServicesSection>
   <ProjectSection/>
    <ClientLogos></ClientLogos>
   <BusinessSection></BusinessSection>
   <Footer></Footer>
   </>
  );
}
