import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-between  items-center gap-4 md:gap-10 bg-black text-text p-4 md:py-10 ">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 md:justify-center  ">
          <div>
            <Logo />
            <h1 className="font-Nunito font-medium mt-2">HAVEN COMPANY</h1>
          </div>
          <div className="socialLinks flex flex-col  font-Nunito -tracking-tight gap-2  text-sm">
            <Link to="/Products">POPULAR PRODUCTS</Link>
            <Link to="/Products">SPECIAL OFFERS</Link>
            <Link to="/Products">Main Categories</Link>
          </div>
          <div className="socialLinks flex flex-col  font-Nunito -tracking-tight gap-2  text-sm">
            <Link to="#services">SERVICES</Link>
            <Link to="#services">ABOUT US</Link>
            <Link to="#services">Customer Service</Link>
          </div>
          <div className="socialLinks flex flex-col font-Nunito -tracking-tight gap-2  text-sm">
            <Link to="#services">PRIVACY POLICY</Link>
            <Link to="#services">TERMS AND CONDITIONS</Link>
            <Link to="#services">RETURN POLICY</Link>
          </div>
        </div>
        <hr className="h-full md:w-3/4" />
        <div className="flex justify-between sm:w-full sm:justify-center gap-[10vw] md:text-[2.4rem] text-lg">
          <Link to="https://github.com/JuniorDev1k">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link to="linkedin.com/in/ayoub-bouzar-kouadri-aa997a297">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="https://www.instagram.com/ayo__ouuub/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="https://mail.google.com/">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
        <h1 className="sm:text-lg sm:text-center">
          @Copyright All rights recovered
        </h1>
      </div>
    </>
  );
};
export default Footer;

// we style components Here.
