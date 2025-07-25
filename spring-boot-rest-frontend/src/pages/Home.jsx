import React from 'react';

function About() {
  return (
    <div className="container pt-4" style={{maxWidth: '900px', fontFamily: "'Inter', 'Segoe UI', 'Roboto', Arial, sans-serif"}}>
      <div className="bg-white rounded-4 shadow p-4 w-100 mb-4 text-start">
        <div className="d-flex flex-column flex-md-row align-items-center mb-3 gap-3">
          <img src="/vite.svg" alt="Spring Boot REST" style={{height: 48}} />
          <h1 className="mb-0 fw-bold" style={{fontSize: '2.2rem', fontWeight: 700}}>Spring Boot REST Job Portal</h1>
        </div>
        <p className="fs-5 text-secondary mb-3" style={{fontWeight: 400}}>
          A full-stack CRUD Job Portal built with <span className="fw-semibold">Java 17, Spring Boot 3, and React</span> as part of the Udemy course <span className="fw-semibold">“Master Java, Spring 6 and Spring Boot 3, Spring JPA, Security, Spring AI, Docker and Microservices”</span> by TELUSKO.
        </p>
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="border rounded-3 p-3 h-100 bg-light">
              <h5 className="fw-bold mb-2" style={{fontWeight: 700}}>🔧 Tech Stack</h5>
              <ul className="mb-0 ps-3">
                <li>Java 17, Spring Boot 3</li>
                <li>RESTful API (Controller ➝ Service ➝ Repository)</li>
                <li>React (Vite), Axios, Bootstrap, React Router DOM</li>
                <li>Modular, clean, maintainable code</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border rounded-3 p-3 h-100 bg-light">
              <h5 className="fw-bold mb-2" style={{fontWeight: 700}}>📂 Repo Structure</h5>
              <ul className="mb-0 ps-3">
                <li><strong>spring-boot-rest-backend/</strong>: Spring Boot app (Java 21, PostgreSQL, model, controller, service, repository)</li>
                <li><strong>spring-boot-rest-frontend/</strong>: React app (Vite, UI interactions)</li>
                <li>Organized by feature, clear separation of concerns</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h5 className="fw-bold mb-2" style={{fontWeight: 700}}>✅ Features</h5>
          <ul className="mb-0 ps-3">
            <li>Modern, responsive UI with custom color scheme and Inter font</li>
            <li>Display job posts in card layout</li>
            <li>Add, update, delete job posts</li>
            <li>View job post details</li>
            <li>Keyword search for job posts</li>
            <li>Sticky navigation bar with search</li>
            <li>Connects to Spring Boot backend via REST API</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="fw-bold mb-2" style={{fontWeight: 700}}>🔗 Source Code</h5>
          <a href="https://github.com/mhnuk2007/spring-boot-rest" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
        </div>
        <div className="mb-2">
          <h5 className="fw-bold mb-2" style={{fontWeight: 700}}>📘 Next Up</h5>
          <ul className="mb-0 ps-3">
            <li>Database connectivity with PostgreSQL</li>
            <li>Mastering Spring Data JPA</li>
            <li>Building robust web apps with Spring MVC</li>
            <li>Excited to explore next-level backend concepts and build more real-world applications!</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="fw-bold mb-2" style={{fontWeight: 700}}>🙌 Credits</h5>
          <p className="mb-0">Special thanks to Udemy, TELUSKO, and Sir Navin Reddy for the structured and practical learning experience.</p>
        </div>
      </div>
      <p className="text-muted">Use the navigation bar to manage job posts or learn more about the project.</p>
    </div>
  );
}

export default About;
