import React from "react";
/* import gpt3Logo from "../../assets/logo.svg"; */
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Delivering for the Visionary in You.
        <br />
        Let's begin our journey together.
      </h1>
    </div>

    {/*     <div className="gpt3__footer-btn">
      <p>Thank You</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/*  <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <h2 style={{ color: "#ffff", fontFamily: "var(--font-family)" }}>
          Scriptzo
        </h2>
        <br />
        <p>
          Infantry road, Bengaluru. <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        {/* <p>Overons</p> */}
        <p>Social Media</p>
        <p>Projects</p>
        <p>Team</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Careers</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Infantry road, Bengaluru.</p>
        {/*   <p>+91-8281268168</p> */}
        <p type="email">info@scriptzo.in</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Scriptzo. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
