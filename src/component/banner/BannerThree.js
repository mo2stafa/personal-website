import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Tilty from "react-tilty";
import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { Link } from "react-router-dom";


const BannerThree = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    }
    img.src = process.env.PUBLIC_URL + "/images/banner/mostafa.png";
  }, []);


  return (
    <div className="banner banner-style-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <AnimationOnScroll animateIn="slideInUp" duration={1} animateOnce={true} delay={100}>
                <span className="subtitle">MOSTAFA HASSAN</span>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                <h1 className="title">Software Developer</h1>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                <div className="btn-group">
                  <a href="https://github.com/mo2stafa/" className="axil-btn btn-fill-primary btn-large">
                    View My GitHub
                  </a>
                  <Link class="about-btn" to={process.env.PUBLIC_URL + "/about-me"}>About Me</Link>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <div className="large-thumb">
                <AnimationOnScroll animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                  <Tilty perspective={2000} reset={false}>
                    {!imageLoaded && (<Blurhash
                    hash="UHI#idTIDzov~bR*.AocDiofN4a$nps:DiWC"
                    width={450}
                    height={450}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    />)}
                    {imageLoaded && <img src={process.env.PUBLIC_URL + "/images/banner/mostafa.png"} alt="Mostafa Hassan" />}
                  </Tilty>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-20">
        <li className="shape shape-1">
          <img src={process.env.PUBLIC_URL + "/images/others/bubble-32.png"} alt="Bubble" />
        </li>
        <li className="shape shape-2">
          <img src={process.env.PUBLIC_URL + "/images/others/bubble-33.png"} alt="Bubble" />
        </li>
        <li className="shape shape-4">
          <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
        </li>
        <li className="shape shape-5">
          <img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="Bubble" />
        </li>
        <li className="shape shape-6">
          <img src={process.env.PUBLIC_URL + "/images/others/bubble-30.png"} alt="Bubble" />
        </li>
        <li className="shape shape-7">
          <img src={process.env.PUBLIC_URL + "/images/others/bubble-31.png"} alt="Bubble" />
        </li>
        <li className="shape shape-8 marque-images" />
      </ul>
    </div>
  );
};

export default BannerThree;
