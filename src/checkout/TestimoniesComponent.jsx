import React from "react";
import starImage from "../assets/stars_icon.png";
import emilyImage from "../assets/Emily.png";
import kylieImage from "../assets/Kylie.png";
import jesicaImage from "../assets/Jesica.png";

const TestimoniesComponent = () => {
  return (
    <div>
      <div>
        <div>
          <h3 className="stories-heading-text">
            Hear success stories from our clients
          </h3>
          <div className="testimonies">
            <div className="testimonies-block">
              <div className="name-block">
                <p className="name-text">Emily, 28</p>
                <p className="location-text">Delaware, NJ</p>
              </div>
              <div className="rating-block">
                <img src={starImage} alt="Stars"></img>
              </div>
              <div className="image-block">
                <img src={emilyImage} alt="Emily"></img>
              </div>
              <div className="comment-block">
                <p>
                  I have been using this program for 3 months now and It helped
                  me to lose 16lbs, taught me how to breathe properly and now I
                  look forward to my workout. Great challenges for different
                  problem zones. Definitely recommend to anyone that wants to
                  lose weight and feel better without long hour at the gym or
                  exhausting workouts.
                </p>
              </div>
            </div>
            <div className="testimonies-block">
              <div className="name-block">
                <p className="name-text">Kylie, 40</p>
                <p className="location-text">Los Angeles</p>
              </div>
              <div className="rating-block">
                <img src={starImage} alt="Stars"></img>
              </div>
              <div className="image-block">
                <img src={kylieImage} alt="Kylie"></img>
              </div>
              <div className="comment-block">
                <p>
                  I will be very straightforward - I hate sports and working
                  out. <b>Positive Yoga</b> put my physical activity to the next
                  level. I started to enjoy my morning yoga routines where I get
                  my dose of cardio, resistance, and stretching in one place. I
                  could barely hold a plank at the beginning. Now I’m doing
                  various yoga poses that looked impossible at first. My body
                  shape improved a lot and I am very motivated by both: results
                  and the feeling of progress.
                </p>
              </div>
            </div>
            <div className="testimonies-block">
              <div className="name-block">
                <p className="name-text">Jesica, 51</p>
                <p className="location-text">San Francisco, CA</p>
              </div>
              <div className="rating-block">
                <img src={starImage} alt="Stars"></img>
              </div>
              <div className="image-block">
                <img src={jesicaImage} alt="Jesica"></img>
              </div>
              <div className="comment-block">
                <p>
                  I have many friends who practice yoga and I decided to try it
                  myself. It is the best decision I have made in a long time.
                  With <b>Positive Yoga</b> program I started to lose weight,
                  which was demotivating me for a long time. Also, I’ve learned
                  about yoga philosophy and poses that encourage me to practice
                  mindfulness and pay attention to stress reduction. I am very
                  proud of myself. Feeling better is my biggest motivation.
                </p>
              </div>
            </div>
          </div>
          <div className="center-elements">
            <button className="stories-button">
              <p className="get-my-plan-text">Get my plan</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniesComponent;
