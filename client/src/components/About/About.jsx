import { Facts } from "./Facts";
import { Info } from "./Info";
import { Team } from "./Team/Team";

export const About = () => {
    return (
      <>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>About Us</h1>
                <span>We have an excellent team and ambitious goals</span>
              </div>
            </div>
          </div>
        </div>

        <Info />
        
        <Facts />

        <Team />
      </>
    );
}