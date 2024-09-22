import React from 'react';

const Resume = () => {
  return (
    <section className="resume-section container my-5">
      <h2 className="text-center mb-4">Resume</h2>

      {/* Download Resume Button */}
      <div className="text-center mb-4">
        <a href="/Valya-Strizheus-Resume.pdf" download className="btn btn-secondary">
          Download My Full Resume
        </a>
      </div>
      
      {/* Profile Section */}
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">Profile</h3>
          <p>Motivated and detail-oriented professional with over 9 years of experience in customer service within the transportation and insurance industry. Currently transitioning into a career in full stack application development, equipped with extensive training in modern web technologies through a comprehensive bootcamp program. Adept at problem-solving, team collaboration, and applying technical skills to build and optimize web applications.</p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">Experience</h3>
          <ul>
            <li><strong>Loss Reporting Team Lead, Grange Insurance — 2022–Present</strong></li>
            <p>Conduct training, auditing, and support for the loss reporting team.</p>
            <p>Promote engagement and team building activities.</p>
            <p>Assist with projects to enhance process efficiency.</p>
            <p>Maintain and update the loss reporting knowledge base.</p>
            <p>Create quick reference guides (QRGs) for the department.</p>
            <li><strong>Loss Reporting Specialist, Grange Insurance — 2019–2022</strong></li>
            <p>Managed and filed new claims, assisted customers with existing claims.</p>
            <p>Supported operators with call management, indexing, and answering queries.</p>
            <p>Achieved and exceeded departmental goals for service and quality.</p>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">Education</h3>
          <p><strong>Full Stack Application Development Bootcamp, Ohio State University</strong></p>
          <p>Completion Date: October 2024</p>
          <p><strong>High School Diploma, Penn Foster High School</strong></p>
          <p>Completion Date: 2012</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">Skills</h3>
          <ul>
            <li><strong>Languages:</strong> JavaScript, HTML, CSS, SQL</li>
            <li><strong>Frameworks/Libraries:</strong> Node.js, Express.js, React, Bootstrap, Tailwind CSS, jQuery</li>
            <li><strong>Databases:</strong> MongoDB, SQL</li>
            <li><strong>Tools/Technologies:</strong> Git, GitHub, RESTful APIs, AJAX, JSON, AI Technologies</li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">Highlighted Projects</h3>
          <ul>
            <li><strong>Project 1:</strong> Client-Side Application with Third-Party APIs</li>
            <p>Developed a client-side web application using HTML, CSS, JavaScript, and APIs.</p>
            <a href="https://github.com/valyastriz">GitHub Repository</a>
            
            <li><strong>Project 2:</strong> Full-Stack Web Application</li>
            <p>Engineered a full-stack web application incorporating Node.js, Express.js, and a SQL/NoSQL database.</p>
            <p>Implemented user authentication and CRUD operations.</p>
            <a href="https://github.com/valyastriz">GitHub Repository</a>
          </ul>
        </div>
      </div>

      {/* Awards Section */}
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">Awards</h3>
          <p>Received one of 22 company-wide annual accolades in 2022 for exceptional performance and making a difference at Grange Insurance.</p>
        </div>
      </div>

      {/* References Section */}
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">References</h3>
          <p>Available upon request.</p>
        </div>
      </div>

    </section>
  );
};

export default Resume;