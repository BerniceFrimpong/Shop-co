import Testimonials from "../components/Testimonials/Testimonials";
import Hero from "../components/Hero/Hero";
import Brands from "../components/Brands/Brands";
import Products from "../components/Products/Products";
import TopSelling from "../components/TopSelling/TopSelling";
import DressStyle from "../components/DressStyle/DressStyle";

const Home = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <Products />
      <TopSelling />
      <DressStyle />
      <Testimonials />
    </main>
  );
};

export default Home;