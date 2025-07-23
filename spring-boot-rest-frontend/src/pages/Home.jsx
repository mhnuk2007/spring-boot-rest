import React from 'react';

function About() {
  return (
    <div className="container pt-3">
      <h1 className="mb-4">Spring Boot REST Job Portal</h1>
      <p className="lead">This project is a full-stack job portal application built with Spring Boot (REST API) and React (frontend). It allows users to view, add, edit, and delete job postings. The backend is implemented using Java and Spring Boot, while the frontend uses React and Bootstrap for a modern, responsive UI.</p>
      <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item">View all job posts in a responsive card layout</li>
        <li className="list-group-item">Add new job posts with required details</li>
        <li className="list-group-item">Edit or delete existing job posts</li>
        <li className="list-group-item">Sticky navigation bar for easy access</li>
        <li className="list-group-item">RESTful API integration with Spring Boot backend</li>
      </ul>
      <p>Use the navigation bar to manage job posts or learn more about the project.</p>
    </div>
  );
}

export default About;
