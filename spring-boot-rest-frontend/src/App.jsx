import { useState } from "react";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Job Board
      </h1>

      <JobForm
        selectedJob={selectedJob}
        refresh={refresh}
        clearEdit={() => setSelectedJob(null)}
      />

      <JobList
        onEdit={(job) => setSelectedJob(job)}
        key={refreshFlag}
      />
    </div>
  );
}

export default App;
