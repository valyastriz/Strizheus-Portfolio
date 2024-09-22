import React from 'react';

// Import images from the assets folder
import dailyEchoImage from '../assets/dailyEcho.png';
import icebreakerImage from '../assets/icebreaker.png';
import JATEImage from '../assets/JATE.png';
import personalBlogImage from '../assets/personalBlog.png';
import techBlogs from '../assets/techBlogs.png';
import waterTracker from '../assets/waterTracker.png'

// Sample data for projects 
const projects = [
  {
    id: 1,
    title: 'PWA Text Editor',
    description: 'This is a Progressive Web Application (PWA) that functions as a text editor. It allows users to create notes or code snippets with or without an internet connection. ',
    imageUrl: JATEImage,
    liveSite: 'https://pwa-text-editor-8wzr.onrender.com/',
    githubLink: 'https://github.com/valyastriz/PWA-text-editor.git'
  },
  {
    id: 2,
    title: 'Tech Blogs',
    description: 'The SVG Logo Maker is a Node.js command-line application that generates simple logos iDaily Echo is a personal diary web application that allows users to log their daily experiences, thoughts, and reflections.',
    imageUrl: techBlogs,
    liveSite: 'https://tech-blogs-84ox.onrender.com/',
    githubLink: 'https://github.com/valyastriz/tech-blogs.git'
  },
  {
    id: 3,
    title: 'Ice Breaker Station',
    description: 'Icebreaker Station is a web application designed to help users generate and share various types of icebreakers. This tool aims to facilitate social and professional interactions by providing engaging and fun icebreakers that can be easily shared with others.',
    imageUrl: icebreakerImage,
    liveSite: 'https://valyastriz.github.io/Icebreaker-Station/',
    githubLink: 'https://github.com/valyastriz/Icebreaker-Station.git'
  },
  {
    id: 4,
    title: 'Water Tracker',
    description: 'The Water Tracker is a simple web application that helps users track the number of ounces of water they drink each day. Users can increment the number of ounces by one until they reach their desired amount and then save the entry.',
    imageUrl: waterTracker,
    liveSite: 'https://valyastriz.github.io/Water_Tracker/',
    githubLink: 'https://github.com/valyastriz/Water_Tracker.git'
  },
  {
    id: 5,
    title: 'Daily Echo',
    description: 'Daily Echo is a collaborative project developed to provide users with a simple and effective way to document their daily thoughts, emotions, and experiences.',
    imageUrl: dailyEchoImage,
    liveSite: 'https://daily-echo-xxqz.onrender.com/',
    githubLink: 'https://github.com/valyastriz/daily-echo.git'
  },
  {
    id: 6,
    title: 'Personal Blog Website',
    description: 'This project is a two-page personal blog website created to showcase thoughts and experiences. The website includes a landing page with a form to submit blog posts and a posts page where the submitted posts are displayed.',
    imageUrl: personalBlogImage,
    liveSite: 'https://valyastriz.github.io/Blog_Website/',
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
                <a href={project.liveSite} className="btn btn-primary ml-2 my-1" target="_blank" rel="noopener noreferrer">
                  Deployed Site
                </a>
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