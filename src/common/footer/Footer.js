import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area footer-dark">
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by Mostafa Hassan.</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    {/* <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
