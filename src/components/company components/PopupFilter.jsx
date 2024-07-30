import { useState } from "react";

const PopupFilter = ({ isOpened, togglePopup }) => {
  const [isJobFunctionExtanded, setIsJobFunctionExtanded] = useState(false);
  function showJobFunctino() {
    if (isJobFunctionExtanded) {
      setIsJobFunctionExtanded((prev) => !prev);
    } else {
      setIsJobFunctionExtanded((prev) => !prev);
    }
  }

  return (
    <div
      className={`${!isOpened ? `popupFilter-closed` : `popupFilter-opened`}`}
    >
      <div className="filter-container">
        <div className="header">
          Filters{" "}
          <i className="uil uil-times" onClick={() => togglePopup()}></i>
        </div>
        <div className="main-content">
          <div className="compsFilter">
            <h2>Filter Companies</h2>
            <hr />
            <div className="compLocation">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Select a Location" />
            </div>
            <hr />
            <div className="compIndustries">
              <label htmlFor="industries">Industries</label>
              <input
                type="text"
                placeholder="E.g Health Care, Internet, Education"
              />
            </div>
            <hr />
            <div className="compJobTitle">
              <label htmlFor="job-title">Job Title</label>
              <input type="text" placeholder="Select a Job Title" />
            </div>
            <hr />
            <div
              className="showJobFunctino-btn jobFunction"
              onClick={() => showJobFunctino()}
            >
              <h2>Job Function</h2>
              {!isJobFunctionExtanded ? (
                <i className="uil uil-angle-down"></i>
              ) : (
                <i className="uil uil-angle-up"></i>
              )}
            </div>
            <div
              className={`${
                !isJobFunctionExtanded
                  ? `jobFunction-content`
                  : `jobFunction-expanded`
              }`}
            >
              <input type="radio" name="jobFunction" />
              Administrative <br />
              <input type="radio" name="jobFunction" />
              Arts & Design <br />
              <input type="radio" name="jobFunction" />
              Business <br />
              <input type="radio" name="jobFunction" />
              Consulting <br />
              <input type="radio" name="jobFunction" />
              Customer Services & Support <br />
              <input type="radio" name="jobFunction" />
              Education <br />
              <input type="radio" name="jobFunction" />
              Engineering <br />
              <input type="radio" name="jobFunction" />
              Finance & Accounting <br />
              <input type="radio" name="jobFunction" />
              Healthcare <br />
              <input type="radio" name="jobFunction" />
              Human Resources <br />
              <input type="radio" name="jobFunction" />
              Information Technology <br />
              <input type="radio" name="jobFunction" />
              Legal <br />
              <input type="radio" name="jobFunction" />
              Marketing <br />
              <input type="radio" name="jobFunction" />
              Media & Communications <br />
              <input type="radio" name="jobFunction" />
              Military & Protective Services <br />
              <input type="radio" name="jobFunction" />
              Operations <br />
              <input type="radio" name="jobFunction" />
              Other <br />
              <input type="radio" name="jobFunction" />
              Product & Project Management <br />
              <input type="radio" name="jobFunction" />
              Research & Science <br />
              <input type="radio" name="jobFunction" />
              Retail & Food Services <br />
              <input type="radio" name="jobFunction" />
              Sales <br />
              <input type="radio" name="jobFunction" />
              Skilled Labor & Manufacturing <br />
              <input type="radio" name="jobFunction" />
              Transportation <br />
            </div>
            <hr />
            <div className="compSize">
              <h2>Global Company Size</h2>
            </div>
            <div className="compSize-content">
              <input type="radio" name="compSize" />
              1 - 50 <br />
              <input type="radio" name="compSize" />
              51 - 200 <br />
              <input type="radio" name="compSize" />
              201 - 500 <br />
              <input type="radio" name="compSize" />
              501 - 1000 <br />
              <input type="radio" name="compSize" />
              1001 - 5000 <br />
              <input type="radio" name="compSize" />
              5001 - 10000 <br />
              <input type="radio" name="compSize" />
              10000+
            </div>
          </div>
        </div>
        <div className="footer">
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default PopupFilter;
