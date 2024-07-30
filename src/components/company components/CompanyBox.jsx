const CompanyBox = () => {
  return (
    <div className="compBox">
      <div className="compHeader">
        <div className="comp-logo">
          <img
            src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png"
            alt=""
          />
          <h3>Amazon</h3>
        </div>
        <div className="comp-efficiency">
          <div className="comp-review">
            <h3>204.3k</h3>
            <span>Review</span>
          </div>
          <div className="comp-salaries">
            <h3>204.3k</h3>
            <span>Salaries</span>
          </div>
          <div className="comp-jobs">
            <h3>204.3k</h3>
            <span>Jobs</span>
          </div>
        </div>
      </div>
      <div className="compInfo">
        <div className="comp-location">
          <h3>Location</h3>
          <span>65 Office Location</span>
        </div>
        <div className="comp-size">
          <h3>Globel Company Size</h3>
          <span>10000+ Employees</span>
        </div>
        <div className="comp-industry">
          <h3>Industry</h3>
          <span>Internet & Web Services</span>
        </div>
      </div>
      <div className="compDescription">
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          omnis sit laudantium officia itaque quo velit distinctio expedita
          repellat ipsam, id dolorem porro libero...
        </p>
      </div>
    </div>
  );
};

export default CompanyBox;
