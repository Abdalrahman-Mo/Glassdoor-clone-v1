import Header from "../components/jobs components/HeaderJobs";
import JobsList from "../components/jobs components/JobsList";
import JobDetails from "../components/jobs components/JobDetails";
import { useState } from "react";
const Jobs = () => {
  const [isJobDetailsPageOpened, setIsJobDetailsPageOpened] = useState(false);
  return (
    <>
      <Header />
      <main className="jobs container">
        <JobsList controlOpeningJobDetails={setIsJobDetailsPageOpened} />
        <JobDetails
          controlOpeningJobDetails={setIsJobDetailsPageOpened}
          checkJobDetailsPage={isJobDetailsPageOpened}
        />
      </main>
    </>
  );
};

export default Jobs;
