import { useState, useEffect } from "react";
import { addJob, updateJob } from "../api/jobService";

function JobForm({ selectedJob, refresh, clearEdit }) {
  const [job, setJob] = useState({
    postId: 0,
    postProfile: "",
    postDesc: "",
    reqExperience: 0,
    postTechStack: "",
  });

  useEffect(() => {
    if (selectedJob) {
      setJob({
        ...selectedJob,
        postTechStack: selectedJob.postTechStack?.join(", ") || "",
      });
    }
  }, [selectedJob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = {
      ...job,
      postTechStack: job.postTechStack.split(",").map((tech) => tech.trim()),
    };

    if (job.postId === 0) {
      await addJob(jobData);
    } else {
      await updateJob(jobData);
    }

    refresh();
    clearEdit();
    setJob({ postId: 0, postProfile: "", postDesc: "", reqExperience: 0, postTechStack: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="container my-4">
      <h4 className="mb-3">{job.postId ? "Edit Job" : "Add Job"}</h4>
      <div className="mb-2">
        <input
          type="text"
          name="postProfile"
          placeholder="Profile"
          value={job.postProfile}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="postDesc"
          placeholder="Description"
          value={job.postDesc}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          name="reqExperience"
          placeholder="Experience (in years)"
          value={job.reqExperience}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="postTechStack"
          placeholder="Tech Stack (comma separated)"
          value={job.postTechStack}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-success me-2">
        {job.postId ? "Update" : "Add"}
      </button>
      {job.postId !== 0 && (
        <button type="button" className="btn btn-secondary" onClick={clearEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default JobForm;
