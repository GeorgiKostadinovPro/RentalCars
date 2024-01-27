import { Banner } from "./Banner";
import { Facts } from "./Facts";
import { Info } from "./Info";
import { Team } from "./Team";

export const About = () => {
    return (
      <>
        <Banner />

        <Info />
        
        <Facts />

        <Team />
      </>
    );
}