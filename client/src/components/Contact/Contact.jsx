import { Banner } from "./Banner";
import { Info } from "./Info";
import { Form } from "./Form/Form";

export const Contact = () => {
    return (
      <>
        <Banner />

        <Info />

        <Form />

        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23463.048487337717!2d23.373154056571735!3d42.68506171664724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa86050e9fe231%3A0xa0afb08134bc5aa2!2sPro%20Rent%20a%20Car%20Sofia!5e0!3m2!1sbg!2sbg!4v1706365493896!5m2!1sbg!2sbg"
            width="100%"
            height="500px"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen=""
          />
        </div>
      </>
    );
}