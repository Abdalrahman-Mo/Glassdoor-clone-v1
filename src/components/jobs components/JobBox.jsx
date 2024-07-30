const JobBox = ({ controlOpeningJobDetails }) => {
  function expandJobDetailsPage() {
    controlOpeningJobDetails((prev) => !prev);
  }
  return (
    <>
      <div className="jobBox" onClick={() => expandJobDetailsPage()}>
        <div className="comp-offer">
          <div className="compInfo">
            <img
              src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png"
              alt="Logo"
            />
            <span className="compName">Amazon</span>
          </div>
          <h4 className="jobTitle">Frontend ReactJS Developer</h4>
          <span className="compLocation">Austin. TX</span>
          <span className="jobSalary">$88k-$125k</span>
        </div>
        <div className="comp-publishDate">
          <i className="uil uil-bookmark"></i>
          <span className="publishDate">24h</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default JobBox;
