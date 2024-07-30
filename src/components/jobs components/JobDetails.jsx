import { useState } from "react";

const JobDetails = ({ checkJobDetailsPage, controlOpeningJobDetails }) => {
  const [isdescriptionExtanded, setIsdescriptionExtanded] = useState(false);
  const [isJobSaved, setIsJobSaved] = useState(false);
  function showMore() {
    if (isdescriptionExtanded) {
      setIsdescriptionExtanded((prev) => !prev);
    } else {
      setIsdescriptionExtanded((prev) => !prev);
    }
  }
  function saveJob() {
    setIsJobSaved((prev) => !prev);
  }
  return (
    <>
      <section
        className={`${
          checkJobDetailsPage ? `jobDetails-opened` : `jobDetails-closed`
        }`}
      >
        <i
          className="uil uil-times"
          onClick={() => controlOpeningJobDetails(false)}
        ></i>
        <div className="jobDetails-title">
          <div className="comp__side">
            <div className="comp-job__name">GivePulse</div>
            <h1 className="comp-job__title">UI React.js Frontend Developer</h1>
            <div className="comp-job__location">Austin, TX</div>
          </div>
          <div className="apply__side">
            <span className={`save__job`} onClick={() => saveJob()}>
              <i className="uil uil-bookmark"></i>
            </span>
            <button className="employer-site--btn">Apply Now</button>
          </div>
        </div>
        <div
          className={` ${
            isdescriptionExtanded
              ? "description-extanded"
              : "jobDetails-description"
          }`}
        >
          GivePulse is seeking an experienced proactive problem solver who isn’t
          afraid to jump in head-first to design, develop, and deploy
          high-quality software solutions for web applications and mobile apps
          within the social impact space. <br />
          <br /> As the UI React.js Developer, you will be a key player in
          implementing new features on the GivePulse platform as an intuitive
          tech solution. You will use your expert experience as a UI React.js
          developer to solve problems, refactor existing code, and be a part of
          the launch process from conception to completion with technologically
          sound and aesthetically impressive UI. <br />
          <br /> The UI React.js Developer is an integral part of the
          development team, bringing product designs to life and supporting the
          user experience of millions of users worldwide with an intuitive
          design that supports our partners in engaging their unique networks of
          volunteers, donors, students, and beyond. <br />
          <br /> WE MUST BUILD BRIDGES, COLLABORATE AND EMPATHIZE <br />
          We at GivePulse are committed to a policy of equal opportunity and
          non-discrimination on the basis of race, color, national origin,
          sexual orientation, religion, sex, gender, gender identity, veteran
          status, age or disability, as protected by law, in all programs and
          activities and conditions of employment. GivePulse is especially
          interested in candidates who will take ownership and responsibility to
          exceed expectations, contribute to open dialogue, build bridges and
          foster a climate supporting equity, diversity, and belonging.
          GivePulse is an anti-racist organization. All positions will actively
          promote diversity, belonging and equity through critical and
          compassionate communication and strategic outreach efforts to
          colleagues, partners and institutions (e.g., historically
          under-represented, first-generation, DACA recipients, LGBTQ
          community). Objectives and Responsibilities Meeting with the
          development and product team to discuss user interface ideas and
          applications Reviewing and iterating on application requirements and
          interface designs with the product and design team Identifying
          web-based and mobile-based user interactions and workflows Developing
          and implementing highly responsive user interface components using
          React.js concepts for web and mobile native applications Writing
          application interface codes using JavaScript following React.js
          workflows Troubleshooting the front-end interface and debugging
          application code on the mobile native front Developing and
          implementing front-end architecture to support user interface concepts
          Monitoring, testing, revising, and improving front-end performance,
          workflows, and look and feel Documenting application changes and
          developing updates Perform other duties as assigned MINIMUM
          QUALIFICATIONS / REQUIREMENTS Credible engineer with Computer Science,
          Computer Engineering, or equivalent degree or have relevant work
          experience. 3+ years of React JS experience (preferred) 2+ years of
          MySQL and PHP experience (bonus) Expert Knowledge of CSS, JavaScript,
          and AJAX Experience with Material UI Experience with Typescript
          Experience with Laravel is a plus Experience with GIT version control
          Ability to create RESTful services Create unit and integration tests
          to fully test and regress software You find a work-around when there
          is no workaround Proven strong at analyzing information Great
          problem-solving skills Excellent attention to detail Experience in a
          fast-paced work environment (You ship quality code quickly) A
          product-first approach to building software. You care about the
          real-world functionality of your programming.
        </div>
        <button className="showMore-description-btn" onClick={() => showMore()}>
          Show {!isdescriptionExtanded ? "More" : "Less"}{" "}
          {!isdescriptionExtanded ? (
            <i className="uil uil-angle-down"></i>
          ) : (
            <i className="uil uil-angle-up"></i>
          )}
        </button>
        <hr />
        <div className="jobDetails-payRange">
          <h2>Base pay range</h2>
          <div className="payRange__salary">
            <span className="salary__from">$56k - </span>
            <span className="salary__to">$98k</span>
            <span className="salary__payBer">/yr</span>
            <div>$74K/yr Median</div>
            <div className="comp__name">Austin, TX</div>
          </div>
        </div>
        <hr />
        <div className="jobDetails-comp--overview">
          <h2>Company overview</h2>
          <div className="comp--overview">
            <div>
              Size
              <span className="overview__type">--</span>
            </div>
            <div>
              Type
              <span className="overview__type">--</span>
            </div>
            <div>
              Sector
              <span className="overview__type">--</span>
            </div>
            <div>
              Founded
              <span className="overview__type">--</span>
            </div>
            <div>
              Industry
              <span className="overview__type">--</span>
            </div>
            <div>
              Revenue
              <span className="overview__type">--</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
