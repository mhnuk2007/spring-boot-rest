import { useState, useEffect } from "react";
import { addJob, updateJob } from "../api/jobService";

function JobForm({ selectedJob, refresh, clearEdit }) {
  const [job, setJob] = useState({
    postId: 0,
    postProfile: "",
    desc: "",
    reqExperience: 0,
    techStack: "",
  });

  useEffect(() => {
    if (selectedJob) {
      setJob(selectedJob);
    }
  }, [selectedJob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (job.postId === 0) {
      await addJob(job);
    } else {
      await updateJob(job);
    }
    refresh();
    clearEdit();
    setJob({ postId: 0, postProfile: "", desc: "", reqExperience: 0, techStack: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{job.postId ? "Edit Job" : "Add Job"}</h2>
      <input name="postProfile" placeholder="Profile" value={job.postProfile} onChange={handleChange} />
      <input name="desc" placeholder="Description" value={job.desc} onChange={handleChange} />
      <input name="reqExperience" type="number" placeholder="Experience" value={job.reqExperience} onChange={handleChange} />
      <input name="techStack" placeholder="Tech Stack" value={job.techStack} onChange={handleChange} />
      <button type="submit">{job.postId ? "Update" : "Add"}</button>
    </form>
  );
}

export default JobForm;
