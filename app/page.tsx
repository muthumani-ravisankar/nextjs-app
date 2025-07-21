import Hero from "@/components/Hero";
import FeaturesHighlights from "@/components/FeaturesHighlights";
import Aboutus from "@/components/Aboutus";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
      <>
      <main className="dark:bg-gray-600 bg-white relative ">
        <Hero/>
        <FeaturesHighlights/>
        <Products/>
        <Aboutus/>
        <FAQ/>
        
      </main>
      </>
  );
}

