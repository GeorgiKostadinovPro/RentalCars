import { Banner } from './Banner';

import './Terms.css'

export const Terms = () => {
    return (
      <>
        <Banner />
        
        <div className="more-info about-info">
          <div className="container">
            <div className="more-info-content">
              <div className="right-content">
                <span>A) Terms</span>
                <h5>
                  1. Terms of Service
                </h5>
                <br />
                <p>
                  By using our car rental services, you agree to comply with all applicable laws and regulations. 
                  We reserve the right to refuse service to anyone for any reason at any time.
                  We collect personal information for the sole purpose of providing and improving our services. 
                  Your data is treated with the utmost confidentiality, and we are committed to safeguarding your privacy.
                </p>
                <br />
                <span>B) Our Privacy</span>
                <h5>
                  2. Privacy Policy
                </h5>
                <br />
                <p>
                  Your privacy is important to us. We do not sell, trade, or otherwise transfer your personally 
                  identifiable information to third parties. 
                  We use secure protocols to protect your data and ensure its integrity.
                  We may collect non-personal information when you interact with our site, such as browser type or pages visited. 
                  This information is used to enhance your experience and improve our services.
                </p>
                <br />
                <span>C) Security</span>
                <h5>
                  3. Data Security Agreement
                </h5>
                <br />
                <p>
                  We employ industry-standard security measures to protect your data from unauthorized access, disclosure, 
                  alteration, and destruction. 
                  However, no method of transmission over the internet or electronic storage is 100% secure.
                  You are responsible for maintaining the confidentiality of your account and password. 
                  Notify us immediately of any unauthorized use of your account or other security breaches.
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}