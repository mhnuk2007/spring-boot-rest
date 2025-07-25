import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobService from '../services/jobService';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    jobService.getJob(id).then((res) => {
      setJob(res.data);
    });
  }, [id]);

  const handleDelete = () => {
    if (window.confirm('Delete this job?')) {
      jobService.deleteJob(id).then(() => {
        navigate('/jobs');
      });
    }
  };

  if (!job) return <div className="container pt-3 text-center">Loading...</div>;

  return (
    <div className="container pt-4" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', Arial, sans-serif"}}>
      <div className="bg-white rounded-4 shadow p-4 w-100 mb-4 text-start">
        <h2 className="mb-3 fw-bold" style={{fontWeight: 700}}>Job Details</h2>
        <h3 className="card-title mb-3">{job.postProfile}</h3>
        <p className="card-text"><strong>Description:</strong> {job.postDesc}</p>
        <p className="card-text"><strong>Experience:</strong> {job.reqExperience} years</p>
        <p className="card-text"><strong>Tech Stack:</strong> {job.postTechStack.join(', ')}</p>
        <div className="d-flex gap-2 mt-3 justify-content-center">
          <button className="btn btn-warning" onClick={() => navigate(`/edit/${job.postId}`)}>Edit</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          <button className="btn btn-secondary" onClick={() => navigate('/jobs')}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
