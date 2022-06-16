import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "MERN Stack",
    text: "MongoDB - Express(.js) - React(.js) - Node(.js)",
  },
  {
    title: "MEAN Stack",
    text: "MongoDB - Express(.js) - Angular(.js) - Node(.js)",
  },
  {
    title: "Flutter",
    text: "For developing cross platform (iOS & Android) Mobile Applications.",
  },
  {
    title: "Salesforce",
    text: "Building scalable business applications for you, using the #1 CRM software.",
  },
  {
    title: "Adobe Xd / Figma",
    text: "UI / UX Designing.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="technologies">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Our Technologies.</h1>
      {/*    <p>Request Early Access to Get Started</p> */}
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
