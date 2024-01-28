import { Hero } from "./Hero/Hero"
import { Facts } from "./Facts";
import { MoreInfo } from "./MoreInfo";
import { Offers } from "./Offers";
import { RequestContact } from "./RequestContact";
import { Testimonials } from "./Testimonials";

export const Home = () => {
    return (
      <>
        <Hero />

        <RequestContact />
        
        <Offers />

        <Facts />

        <MoreInfo />
        
        <Testimonials />
      </>
    );
}