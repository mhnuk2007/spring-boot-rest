import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/jobPosts")
      .then(response => setJobs(response.data))
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  const handleEdit = (id) => {
    alert(`Edit clicked for Job ID: ${id}`);
    // Hook up with edit logic/modal
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this job?");
    if (confirmed) {
      axios.delete(`http://localhost:8080/jobPosts/${id}`)
        .then(() => setJobs(prev => prev.filter(job => job.postId !== id)))
        .catch(error => console.error("Error deleting job:", error));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary fw-bold">
        🚀 Available Job Listings
      </h2>
      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-4 mb-4" key={job.postId}>
            <div className="card h-100 shadow border-0 rounded-4">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">{job.postProfile}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Experience: {job.reqExperience} yrs</h6>
                <p className="card-text text-secondary">{job.postDesc}</p>
                <div className="mt-3">
                  <strong>Tech Stack:</strong>
                  <ul className="mt-2 ps-3">
                    {job.postTechStack.map((tech, idx) => (
                      <li key={idx} className="text-dark small">{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center bg-white border-0">
                <small className="text-muted">ID: {job.postId}</small>
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(job.postId)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(job.postId)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {jobs.length === 0 && (
          <div className="text-center text-muted mt-4">No job posts found.</div>
        )}
      </div>
    </div>
  );
};

export default JobList;
