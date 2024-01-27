import { Banner } from "./Banner";
import { Facts } from "./Facts";
import { Info } from "./Info/Info";
import { Team } from "./Team/Team";

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