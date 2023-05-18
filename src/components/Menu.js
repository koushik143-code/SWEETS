import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzMeAmYHvREv1zsX5cJMAMGoHr22P-aQzpA&usqp=CAU" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Sweet Menu</h3>
            <h1>Love Becomes Sweet</h1>
            <p>
            At the heart of our e-commerce platform lies a dedication to quality and taste. We partner with renowned artisans and expert confectioners who take pride in their creations, ensuring that every bite is a moment of pure bliss. Whether you're searching for a nostalgic treat that takes you back to childhood or a luxurious indulgence to celebrate a special occasion, we have something for every sweet tooth..
            </p>
            <div className="about__btn">
              <a href="/" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
