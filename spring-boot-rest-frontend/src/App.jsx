import { useState } from "react";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div>
      <h1>Job Board</h1>
      <JobForm selectedJob={selectedJob} refresh={refresh} clearEdit={() => setSelectedJob(null)} />
      <JobList onEdit={(job) => setSelectedJob(job)} key={refreshFlag} />
    </div>
  );
}

export default App;
