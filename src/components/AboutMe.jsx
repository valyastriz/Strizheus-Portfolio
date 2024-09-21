import React from 'react';

const AboutMe = () => {
  return (
    <section className="container my-5">
      <div className="row justify-content-center text-center">
        <div className="col-md-6">
          <img src="your-avatar-url-here" alt="Your Name" className="rounded-circle mb-4" style={{ width: '150px', height: '150px' }} />
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