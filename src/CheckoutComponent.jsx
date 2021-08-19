import React, { useEffect } from "react";
import shoppingImage from "./assets/shopping_icon.svg";
import yogaImage from "./assets/yoga_logo.svg";
import TestimoniesComponent from "./checkout/TestimoniesComponent";
import PlanComponent from "./checkout/PlanComponent";
import FAQComponent from "./checkout/FAQComponent";
import JourneyComponent from "./checkout/JourneyComponent";

const CheckoutComponent = () => {
  const format = (time) => {
    //format time
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds}`;
  };

  const [counter, setCounter] = React.useState(949); //15:49 in seconds
  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000); //update Counter
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]); //render counter on each state change

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
              <span className="font-bold">00:{format(counter)}</span>
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
          <div className="start-block">
            <h2 className="start-text">Start your yoga program today!</h2>
          </div>
          <PlanComponent />
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
