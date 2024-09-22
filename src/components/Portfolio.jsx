import React from 'react';

// Import images from the assets folder
import dailyEchoImage from '../assets/dailyEcho.png';
import icebreakerImage from '../assets/icebreaker.png';
import JATEImage from '../assets/JATE.png';
import personalBlogImage from '../assets/personalBlog.png';
import svgImage from '../assets/svg.png';
import socialImage from '../assets/social.png'

// Sample data for projects 
const projects = [
  {
    id: 1,
    title: 'PWA Text Editor',
    description: 'This is a Progressive Web Application (PWA) that functions as a text editor. It allows users to create notes or code snippets with or without an internet connection. ',
    imageUrl: JATEImage,
    githubLink: 'https://github.com/valyastriz/PWA-text-editor.git'
  },
  {
    id: 2,
    title: 'Daily Echo',
    description: 'Daily Echo is a collaborative project developed to provide users with a simple and effective way to document their daily thoughts, emotions, and experiences.',
    imageUrl: dailyEchoImage,
    githubLink: 'https://github.com/valyastriz/daily-echo.git'
  },
  {
    id: 3,
    title: 'SVG Logo Maker',
    description: 'The SVG Logo Maker is a Node.js command-line application that generates simple logos in SVG format based on user input.',
    imageUrl: svgImage,
    githubLink: 'https://github.com/valyastriz/Logo_Generator.git'
  },
  {
    id: 4,
    title: 'Ice Breaker Station',
    description: 'Icebreaker Station is a web application designed to help users generate and share various types of icebreakers. This tool aims to facilitate social and professional interactions by providing engaging and fun icebreakers that can be easily shared with others.',
    imageUrl: icebreakerImage,
    githubLink: 'https://github.com/valyastriz/daily-echo.git'
  },
  {
    id: 5,
    title: 'Social Network API',
    description: 'This is a Social Network API built using MongoDB, Mongoose, Express.js, and Node.js. This application provides the ability to manage users, their thoughts, reactions to thoughts, and friend lists. ',
    imageUrl: socialImage,
    githubLink: 'https://github.com/valyastriz/social-startup-api.git'
  },
  {
    id: 6,
    title: 'Personal Blog Website',
    description: 'This project is a two-page personal blog website created to showcase thoughts and experiences. The website includes a landing page with a form to submit blog posts and a posts page where the submitted posts are displayed.',
    imageUrl: personalBlogImage,
    githubLink: 'https://github.com/valyastriz/Blog_Website.git'
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section container my-1">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={project.imageUrl} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.githubLink} className="btn btn-secondary ml-2" target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;