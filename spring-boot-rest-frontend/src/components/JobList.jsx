import { useEffect, useState } from "react";
import { getAllJobs, deleteJob } from "../api/jobService";

function JobList({ onEdit }) {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await getAllJobs();
    setJobs(res.data);
  };

  const handleDelete = async (id) => {
    await deleteJob(id);
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Posts</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.postId}>
            <strong>{job.postProfile}</strong> - {job.desc}
            <button onClick={() => onEdit(job)}>Edit</button>
            <button onClick={() => handleDelete(job.postId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
