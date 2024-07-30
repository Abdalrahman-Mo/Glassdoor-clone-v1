const Header = () => {
  return (
    <>
      <header className="jobs container">
        <div className="searchBar">
          <div className="jobTitle">
            <i className="uil uil-search"></i>
            <input type="search" placeholder="Find your perfect job" />
          </div>
          <div className="location">
            <i className="uil uil-map-marker"></i>
            <input type="search" placeholder="Location" />
          </div>
        </div>
        <div className="uploadResume">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              fill="none"
            >
              <path
                fill="#4CD681"
                d="M6.549 13.945 15.19 2.104c.16-.219.505-.063.447.2l-1.678 7.639h5.008a.25.25 0 0 1 .202.397l-8.642 11.841c-.16.219-.505.064-.446-.2l1.678-7.638H6.75a.25.25 0 0 1-.201-.398Z"
              ></path>
            </svg>{" "}
            Upload your resume - Let employers find you
          </a>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
