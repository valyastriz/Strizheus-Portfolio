import React from 'react';
import portrait from '../assets/portrait.png';

const AboutMe = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
        <img src={portrait} alt="Valya Strizheus" className="rounded-circle mb-4 img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
          Hey there, I'm Valentina Strizheus, a.k.a. "Valya", and I'm diving headfirst into the world of web development! There's nothing quite like the thrill of seeing lines of code come together to create something awesome. Every project is a chance for me to learn and grow, and I'm all about embracing the challenges that come my way.
          </p>
          <p>
          When I'm not busy coding, you'll find me hanging out with my furry companions. I'm definitely a dog person and love to teach my dogs new tricks! It's amazing how their enthusiasm mirrors my own when I'm diving into the latest web development challenges. Just like teaching them to fetch or roll over, learning new tricks in web development is all about patience, practice, and a sprinkle of creativity. So, whether I'm teaching my pups a new trick or tackling a coding problem, I'm all about embracing the journey and enjoying every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;