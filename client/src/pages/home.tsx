import Header from "@/components/header";
import Hero from "@/components/hero";
import BestSellers from "@/components/best-sellers";
import StorySection from "@/components/story-section";
import Testimonials from "@/components/testimonials";
import Ingredients from "@/components/ingredients";
import HowItWorks from "@/components/how-it-works";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BestSellers />
      <StorySection />
      <Testimonials />
      <Ingredients />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}
