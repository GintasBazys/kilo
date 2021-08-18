import React, { useEffect } from "react";

import expandMoreImage from "../assets/expand_more.svg";

const FAQComponent = () => {
  useEffect(() => {
    const faqBlocks = document.querySelectorAll(".faq-container"); //select all FAQ questions containers

    faqBlocks.forEach((block) => {
      //on each container sellect toogle class
      const faqToggle = block.querySelector(".faq-toggle");
      faqToggle.addEventListener("click", () => {
        if (block.classList.contains("is-toggled")) {
          block.classList.remove("is-toggled"); //hide answer
        } else {
          block.classList.add("is-toggled"); //display answer
        }
      });
    });
  }, []);

  return (
    <div className="faq-block">
      <h3 className="faq-header">Frequently Asked Questions</h3>
      <div className="faq-container">
        <div className="faq-toggle">
          <div className="faq-title">What happens after I order?</div>
          <img className="faq-image" src={expandMoreImage} />
        </div>
        <div className="faq-answer">
          After you place your order, we get to work! <br /> Based on the
          questions you answered in the quiz, we’ll craft your personal plan to
          your level with recomendations on how to improve.
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-toggle">
          <div className="faq-title">Where can I access my plan?</div>
          <img className="faq-image" src={expandMoreImage} />
        </div>
        <div className="faq-answer">
          Your plan will be accessible in Positive Yoga&apos;s web app with a
          special link generated after your purchase.
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-toggle">
          <div className="faq-title">How can I cancel my subscription?</div>
          <img className="faq-image" src={expandMoreImage} />
        </div>
        <div className="faq-answer">
          You can manage or cancel your subscription by writing our customer
          support hello@positiveyoga.app.
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-toggle">
          <div className="faq-title">Why this program is paid?</div>
          <img className="faq-image" src={expandMoreImage} />
        </div>
        <div className="faq-answer">
          We are aiming to offer our clients the best experience, which comes
          with a lot of work. The entire yoga program is developed by our large
          team of experts that work long hours to prepare effective, trustworthy
          and enjoyable content and workouts that can help you to reach your
          goals. The program is also completely free of ads and is constantly
          being updated based on your feedback!
        </div>
      </div>
      <div className="center-elements">
        <button className="faq-button">
          <p className="get-my-plan-text">Get my plan</p>
        </button>
      </div>
    </div>
  );
};
export default FAQComponent;
