import { Hero } from "./Hero/Hero"
import { Facts } from "./Facts";
import { BlogInfo } from "./BlogInfo";
import { Offers } from "./Offers/Offers";
import { RequestContact } from "./RequestContact/RequestContact";

export const Home = () => {
    return (
      <>
        <Hero />

        <RequestContact />
        
        <Offers />

        <Facts />

        <BlogInfo />
      </>
    );
}