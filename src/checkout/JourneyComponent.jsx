import React from "react";
import nutritionImage from "../assets/Nutrition.png";
import greenChekmark from "../assets/green_checkmark.svg";

const JourneyComponent = () => {
  return (
    <div className="journey-block">
      <div className="start-yoga">
        <h3 className="start-yoga-text">Start your yoga journey now!</h3>
        <div className="yoga-journey-picture">
          <img src={nutritionImage} alt="Activity" />
        </div>
      </div>
      <div className="yoga-benefits">
        <h3 className="positive-yoga-header">
          Is Positive Yoga right for me?
          <div className="positive-yoga-list-item">
            <img src={greenChekmark} alt="Green checkmark"></img>
            <p className="positive-yoga-text">
              Each program adapts to your age or fitness level
            </p>
          </div>
          <div className="positive-yoga-list-item">
            <img src={greenChekmark} alt="Green checkmark"></img>
            <p className="positive-yoga-text">
              Mindful way to exercise and get real results
            </p>
          </div>
          <div className="positive-yoga-list-item">
            <img src={greenChekmark} alt="Green checkmark"></img>
            <p className="positive-yoga-text">
              Effective and long-term lasting results
            </p>
          </div>
          <div className="positive-yoga-list-item">
            <img src={greenChekmark} alt="Green checkmark"></img>
            <p className="positive-yoga-text">
              Suited activities that benefit both the mind and body
            </p>
          </div>
          <div className="positive-yoga-list-item">
            <img src={greenChekmark} alt="Green checkmark"></img>
            <p className="positive-yoga-text">
              Low-intensity but highly-effective workouts
            </p>
          </div>
          <div className="positive-yoga-list-item">
            <img src={greenChekmark} alt="Green checkmark"></img>
            <p className="positive-yoga-text">
              Extra attention to muscle, joint and back health
            </p>
          </div>
        </h3>
      </div>
    </div>
  );
};
export default JourneyComponent;
