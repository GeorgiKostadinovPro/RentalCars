import { Hero } from "./Hero/Hero"
import { Facts } from "./Facts";
import { BlogInfo } from "./BlogInfo/BlogInfo";
import { Services } from "./Services/Services";
import { RequestContact } from "./RequestContact/RequestContact";

export const Home = () => {
    return (
      <>
        <Hero />

        <RequestContact />
        
        <Services />

        <Facts />

        <BlogInfo />
      </>
    );
}