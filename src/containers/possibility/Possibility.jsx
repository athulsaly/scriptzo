import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="projects">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      {/*  <h4>Request Early Access to Get Started</h4> */}
      <h1 className="gradient__text">Why don't you be our first client?</h1>
      <p>
        We are a group of experienced professionals who got tired of the
        corporate world and the politics inside it. We want to contribute to the
        tech world in our own terms. We assure you that you and your vision will
        be well taken care of. We gurantee maximum cost to value, because you
        only have to pay for the work we do only if you're a 100% satisfied. If
        you give us a chance we will go to any extent to prove that, you didn't
        make a mistake by trusting us.
      </p>
      {/*  <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default Possibility;
