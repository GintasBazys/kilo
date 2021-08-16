/* eslint-disable react/no-unescaped-entities */
import React from "react";
import shoppingImage from "./assets/shopping_icon.png";
import yogaImage from "./assets/yoga_logo.png";
import TestimoniesComponent from "./checkout/TestimoniesComponent";
import PlanComponent from "./checkout/PlanComponent";
import FAQComponent from "./checkout/FAQComponent";
import JourneyComponent from "./checkout/JourneyComponent";

const CheckoutComponent = () => {
  return (
    <div>
      <div>
        <div className="preheader">
          <div className="center-elements">
            <img
              className="shopping-image"
              src={shoppingImage}
              alt="Shopping image"
            />
            <p className="discount-text">
              50% discount only valid for{" "}
              <span style={{ fontWeight: "600" }}>00:15:49</span>
            </p>
          </div>
        </div>
        <div className="header">
          <div className="center-elements">
            <img src={yogaImage} alt="Yoga logo"></img>
          </div>
        </div>
        <div className="program">
          <div className="access-text">
            <p className="plans-ordered">
              Over <b>52 147</b> plans ordered.
            </p>
            <h1 className="yoga-access">
              Get access to your yoga program now!
            </h1>
          </div>
          <div>
            <PlanComponent />
          </div>
          <div>
            <TestimoniesComponent />
          </div>
          <JourneyComponent />
          <div>
            <FAQComponent />
          </div>

          <div>
            <h2 className="start-text">Start your yoga program today!</h2>
          </div>
          <PlanComponent />
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
