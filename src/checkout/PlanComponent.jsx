/* eslint-disable react/no-unescaped-entities */
import React from "react";
import selectedPlanImage from "../assets/plan_selected_icon.png";
import checkBoxImage from "../assets/circle.png";
import programDescriptionImage from "../assets/program_description_image.png";

const PlanComponent = () => {
  return (
    <div className="plan-block">
      <div className="choose-plan-block">
        <h3 className="choose-plan-text">
          Choose your plan and get
          <span className="orange-text"> 7 days free trial</span>
        </h3>
        <div className="plans-content">
          <div className="pricing-checkout">
            <div className="pricing-left-right">
              <div className="pricing-left">
                <div className="pricing-title-discount">
                  <h5 className="pricing-title">6 month plan</h5>
                  <div className="pricing-discount">
                    <p className="pricing-discount-text">Save 50%</p>
                  </div>
                </div>
                <div className="pricing-prices">
                  <div className="pricing-monthly-payment-block">
                    <h2 className="pricing-monthly-payment">$9.99</h2>
                    <p className="pricing-month">/ month</p>
                  </div>
                  <div className="pricing-old-info">
                    <p className="pricing-old">$119.94</p>
                    <p className="pricing-info">
                      <span className="orange-text">$59.94</span> billed every 6
                      months
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => alert("test")}
                className="pricing-circle-selected"
              >
                <img src={selectedPlanImage} alt="Checkbox"></img>
              </div>
            </div>
          </div>
          <div className="pricing-checkout">
            <div className="pricing-left-right">
              <div className="pricing-left">
                <div className="pricing-title-discount">
                  <h5 className="pricing-title">3 month plan</h5>
                </div>
                <div className="pricing-prices">
                  <div className="pricing-monthly-payment-block">
                    <h2 className="pricing-monthly-payment">$14.99</h2>
                    <p className="pricing-month">/ month</p>
                  </div>
                  <div className="pricing-old-info">
                    <p className="pricing-old">$59.97</p>
                    <p className="pricing-info">
                      <span className="orange-text">$44.97</span> billed every 3
                      months
                    </p>
                  </div>
                </div>
              </div>
              <div className="pricing-circle">
                <img src={checkBoxImage} alt="Checkbox"></img>
              </div>
            </div>
          </div>
          <div className="pricing-checkout">
            <div className="pricing-left-right">
              <div className="pricing-left">
                <div className="pricing-title-discount">
                  <h5 className="pricing-title">1 month plan</h5>
                </div>
                <div className="pricing-prices">
                  <div className="pricing-monthly-payment-block">
                    <h2 className="pricing-monthly-payment">$19.99</h2>
                    <p className="pricing-month">/ month</p>
                  </div>
                  <div className="pricing-old-info">
                    <p className="pricing-info">Billed monthly</p>
                  </div>
                </div>
              </div>
              <div className="pricing-circle">
                <img src={checkBoxImage} alt="Checkbox"></img>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="plan-button">
            <p className="plan-button-text">Get your plan</p>
          </button>
        </div>
        <p className="get-plan-text">
          Your free trial will automatically become a paid subscription on the
          8th day after you begin your trial. To cancel your subscription,
          please contact us at least 24 hours before the end of the trial
          period.
        </p>
        <p className="payment-terms">
          By choosing a payment method you agree to the{" "}
          <span style={{ color: "lightblue" }}>T&Cs</span> and{" "}
          <span style={{ color: "lightblue" }}>Privacy Policy</span>
        </p>
        <div className="safe-checkout"></div>
      </div>
      <div className="program-description-block">
        <h3 className="program-header-text">What's in my program?</h3>
        <div className="program-description">
          <img src={programDescriptionImage} alt="Program description"></img>
        </div>
      </div>
    </div>
  );
};
export default PlanComponent;
