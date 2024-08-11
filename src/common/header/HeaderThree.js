import React, { useState } from "react";
import Logo from "../../elements/logo/Logo";
import OffcanvasMenu from "./OffcanvasMenu";
import StickyHeader from "./StickyHeader";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import SwitcherHeader from "../../elements/switcher/SwitcherHeader";

const HeaderThree = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const OffcanvasHandleClose = () => setShowOffcanvas(false);
  const OffcanvasHandleShow = () => setShowOffcanvas(true);

  const sticky = StickyHeader(100);

  return (
    <>
      <header className="header axil-header header-style-3">
        <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <Logo
                  dimage="/images/Logo - Dark.png"
                  limage="/images/Logo - Light.png"
                  simage="/images/Logo - Light.png"
                />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="header-social-link">
                    <ul className="social-icon-list list-unstyled">
                      <li>
                        <a href="https://github.com/mo2stafa/" target="_blank" rel="noreferrer">
                          <FaGithub />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/mostafa-hassan-m/" target="_blank" rel="noreferrer">
                          <FaLinkedin />
                        </a>
                      </li>
                      <li>
                        <a href="/Mostafa_Hassan_Resume.pdf" target="_blank" rel="noreferrer">
                          <FaFilePdf />
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="sidemenu-btn">
                    <button className="btn-wrap" onClick={OffcanvasHandleShow}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    <SwitcherHeader />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
    </>
  );
};

export default HeaderThree;
