import React from 'react';
import portrait from '../assets/portrait.png';

const AboutMe = () => {
  return (
    <section className="container my-3">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
        <img src={portrait} alt="Valya Strizheus" className="rounded-circle mb-4 img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
          Hey there, I’m Valentina Strizheus, a.k.a. “Valya,” and I’m not only passionate about coding but also equipped with over 9 years of customer service experience in the transportation and insurance industries. After years of honing my problem-solving and communication skills, I’m excited to be transitioning into a career in full-stack application development.
          </p>
          <p>
          Having recently completed an intensive bootcamp program, I’ve been immersed in modern web technologies, diving headfirst into the world of web development. There’s nothing quite like seeing lines of code come together to build something meaningful. Whether I’m developing client-side web applications or engineering full-stack solutions, I’m all about tackling challenges, learning, and growing with each project.
          </p>
          <p>When I’m not busy coding, you’ll likely find me hanging out with my furry companions. I’m a dog person through and through, and I love teaching my pups new tricks. Their enthusiasm mirrors my own when I’m deep in development. Just like teaching them to fetch or roll over, learning new skills in web development is all about patience, practice, and a touch of creativity. Whether I’m coding or training my dogs, I’m all about enjoying the process, embracing the challenges, and celebrating the small victories along the way.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;