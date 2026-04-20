import Testimonials from "../components/Testimonials/Testimonials";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Brands from "../components/Brands/Brands";
import Products from "../components/Products/Products";
import TopSelling from "../components/TopSelling/TopSelling";
import DressStyle from "../components/DressStyle/DressStyle";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />

      <main>
        <Hero />
        <Brands />
        <Products />
        <TopSelling />
        <DressStyle />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
};

export default Home;