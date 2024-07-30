const HeaderComp = () => {
  return (
    <>
      <header className="companies">
        <div className="header-content">
          <div className="container">
            <div className="img">
              <img
                src="https://www.glassdoor.com/explore/static/images/hero-reviews.png"
                alt="Hero"
              />
            </div>
            <div className="text">
              <h2>Find a workplace that works for you</h2>
              <p>
                Discover what an employer is really like before you make your
                next move. Search reviews and ratings, and filter companies
                based on the qualities that matter most to your job search.
              </p>
            </div>
          </div>
        </div>
        <div className="searchBar">
          <input type="search" placeholder="Search for a company" />
          <button className="search-btn">Search</button>
        </div>
      </header>
      <hr />
    </>
  );
};

export default HeaderComp;
