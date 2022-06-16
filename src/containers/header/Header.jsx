import React from "react";
import "./header.css";
/* import people from "../../assets/people.png"; */
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="about">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Delivering the best Solution, for the Visionary in You.{" "}
          {/* for your Vision. */}
        </h1>
        <p>
          We at Scriptzo believe that every idea desereves a chance, because we
          realize that all ideas are unique and it requires custom solutions. We
          aim to provide our clients' with a tailored experience in making your
          vision into reality.
        </p>
        {/* <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="email" />
          <p>
            Provide us your email address and let us contact you within 24
            hours.
          </p>
        </div> */}
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
