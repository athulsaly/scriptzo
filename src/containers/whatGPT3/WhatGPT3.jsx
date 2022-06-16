import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const whatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="services">
      {/*   <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div> */}
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Our Services.</h1>
        {/* <p>Explore The Library</p> */}
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Websites"
          text="Get static websites developed and deployed for your NGOs, Portfolios , Company's landing page etc."
        />
        <Feature
          title="Mobile Applications"
          text="Get Android /iOS / Hybrid application as per your requirements."
        />
        <Feature
          title="Web Applications"
          text="Get dynamic web applications that responds as per users' interaction. eg. e-commerce, CRM, ERP etc."
        />
        <Feature
          title="UI/UX designing"
          text="Get prototypes ready for your next big idea or amazing designs for your projects while ensuring a seamless and quality experience."
        />
        <Feature
          title="Consulting"
          text="Sometimes you might be stuck without a plan on, how to make your idea turn into a working prototype. Let's help you build it from scratch to deployment while ensuring that the final product is everything that you visioned it to be."
        />

        {/*  <Feature
          title="APIs"
          text="We create middleware APIs that help your different  services communicate and data APIs for data by mining as per your requirements."
        />
        <Feature
          title="Cloud Solutions"
          text="Get Cloud hosting or migrate your old ecosystem to trusted cloud platforms like GCP,AWS and azure."
        />
        <Feature
          title="Hosting"
          text="Get Website hosting  for your existing websites  at affordable rates or get your apps on play store with us."
        /> */}
      </div>
    </div>
  );
};

export default whatGPT3;
