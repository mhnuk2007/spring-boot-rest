import React, { useEffect, useState } from 'react';
import jobService from '../services/jobService';
import { Link, useLocation } from 'react-router-dom';

function JobPosts() {
  const [jobs, setJobs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    jobService.getAllJobs().then((res) => {
      let allJobs = res.data;
      const params = new URLSearchParams(location.search);
      const keyword = params.get('search');
      if (keyword) {
        const lowerKeyword = keyword.toLowerCase();
        allJobs = allJobs.filter(job =>
          job.postProfile.toLowerCase().includes(lowerKeyword) ||
          job.postDesc.toLowerCase().includes(lowerKeyword) ||
          job.postTechStack.join(', ').toLowerCase().includes(lowerKeyword)
        );
      }
      setJobs(allJobs);
    });
  }, [location.search]);

  return (
    <div className="container pt-4" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', Arial, sans-serif"}}>
      <h2 className="mb-4 fw-bold" style={{fontWeight: 700}}>Job Posts</h2>
      <div className="row g-4">
        {jobs.map((job) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={job.postId}>
            <Link to={`/jobs/${job.postId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card h-100 shadow-sm job-card-hover">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{job.postProfile}</h5>
                  <p className="card-text mb-1"><strong>Description:</strong> {job.postDesc}</p>
                  <p className="card-text mb-1"><strong>Experience:</strong> {job.reqExperience} years</p>
                  <p className="card-text mb-2"><strong>Tech Stack:</strong> {job.postTechStack.join(', ')}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {jobs.length === 0 && (
          <div className="col-12 text-center text-muted">No jobs found.</div>
        )}
      </div>
    </div>
  );
}

export default JobPosts;
