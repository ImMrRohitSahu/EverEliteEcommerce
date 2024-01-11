import CategorySection from "../components/Category/CategorySection";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct";
import HappyCustomer from "../components/HappyCustomer/HappyCustomer";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import OfferSection from "../components/OfferSection/OfferSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <OfferSection />
      <FeaturedProduct />
      <CategorySection />
      <HappyCustomer />
    </>
  );
};

export default Home;
