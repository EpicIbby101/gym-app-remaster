import '@/app/globals.css'
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from "@/components/Navbar";

const index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default index;
