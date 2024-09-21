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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;