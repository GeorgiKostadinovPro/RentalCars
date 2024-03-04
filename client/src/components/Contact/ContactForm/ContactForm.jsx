import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

import { Constants } from '../../../utilities/constants'

import './ContactForm.css'

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;

const defaultValues = {
  fullName: '',
  email: '',
  subject: '',
  message: ''
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({defaultValues, mode: 'onChange'});

  const contactSubmitHandler = (data) => {
    emailjs.send(serviceId, templateId, {
      from_email: data.email,
      from_name: data.fullName,
      subject: data.subject,
      message: data.message,
    }, {
      publicKey: publicKey
    })
    .then(() => {
      alert('You have successfully send a message. We will call to you soon.');
    })
    .catch(error => {
      console.log(error.message);
    });

    reset();
  };

  return (
    <div className="callback-form contact-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>
                Send us a <em>message</em>
              </h2>
              <span>
                Contact us by filling out our contact form and we will connect
                with you as soon as possible.
              </span>
            </div>
          </div>
          <div className="col-md-12">
            <div className="contact-form">
              <form id="contact" onSubmit={handleSubmit(contactSubmitHandler)}>
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        {...register("fullName", Constants.fullName)}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
                      />
                      <span
                        style={{
                          display: errors.fullName?.message ? "block" : "none",
                          color: "red",
                          margin: '-30px 0 20px 0'
                        }}
                      >
                        {errors.fullName?.message}
                      </span>
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        {...register("email", Constants.email)}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="E-Mail Address"
                      />
                      <span
                        style={{
                          display: errors.email?.message ? "block" : "none",
                          color: "red",
                          margin: '-30px 0 20px 0'
                        }}
                      >
                        {errors.email?.message}
                      </span>
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        {...register("subject", Constants.contact.subject)}
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <span
                        style={{
                          display: errors.subject?.message ? "block" : "none",
                          color: "red",
                          margin: '-30px 0 20px 0'
                        }}
                      >
                        {errors.subject?.message}
                      </span>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        {...register("message", Constants.contact.message)}
                        type="text"
                        rows={6}
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                      />
                      <span
                        style={{
                          display: errors.message?.message ? "block" : "none",
                          color: "red",
                          margin: '-30px 0 20px 0'
                        }}
                      >
                        {errors.message?.message}
                      </span>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="filled-button"
                      >
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};