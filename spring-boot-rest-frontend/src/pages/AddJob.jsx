import React, { useState } from 'react';
import jobService from '../services/jobService';
import { useNavigate } from 'react-router-dom';

function AddJob() {
  const [form, setForm] = useState({
    postId: '',
    postProfile: '',
    postDesc: '',
    reqExperience: '',
    postTechStack: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = {
      postId: parseInt(form.postId),
      postProfile: form.postProfile,
      postDesc: form.postDesc,
      reqExperience: parseInt(form.reqExperience),
      postTechStack: form.postTechStack.split(',').map(s => s.trim())
    };
    jobService.addJob(job).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container pt-4" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', Arial, sans-serif"}}>
      <div className="bg-white rounded-4 shadow p-4 w-100 mb-4 text-start">
        <h2 className="mb-3 fw-bold" style={{fontWeight: 700}}>Add Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Post ID</label>
            <input type="number" name="postId" className="form-control" value={form.postId} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Profile</label>
            <input type="text" name="postProfile" className="form-control" value={form.postProfile} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <input type="text" name="postDesc" className="form-control" value={form.postDesc} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Experience (years)</label>
            <input type="number" name="reqExperience" className="form-control" value={form.reqExperience} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Tech Stack (comma separated)</label>
            <input type="text" name="postTechStack" className="form-control" value={form.postTechStack} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Add Job</button>
        </form>
      </div>
    </div>
  );
}

export default AddJob;
