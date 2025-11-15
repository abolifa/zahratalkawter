import About from "@/components/about";
import ContactZahrat from "@/components/contact";
import Hero from "@/components/hero";
import ProductsSection from "@/components/products";
import WhyUs from "@/components/why-us";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ProductsSection />
      <WhyUs />
      <ContactZahrat />
    </>
  );
};

export default Home;
