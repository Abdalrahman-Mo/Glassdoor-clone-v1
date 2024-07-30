import JobBox from "./JobBox";
const JobsList = ({ controlOpeningJobDetails }) => {
  return (
    <>
      <section className="allJobs">
        <JobBox controlOpeningJobDetails={controlOpeningJobDetails} />
        <JobBox controlOpeningJobDetails={controlOpeningJobDetails} />
        <JobBox controlOpeningJobDetails={controlOpeningJobDetails} />
        <JobBox controlOpeningJobDetails={controlOpeningJobDetails} />
        <JobBox controlOpeningJobDetails={controlOpeningJobDetails} />
        <JobBox controlOpeningJobDetails={controlOpeningJobDetails} />
        <JobBox controlOpeningJobDetails={controlOpeningJobDetails} />
        <JobBox controlOpeningJobDetails={controlOpeningJobDetails} />
      </section>
    </>
  );
};

export default JobsList;
