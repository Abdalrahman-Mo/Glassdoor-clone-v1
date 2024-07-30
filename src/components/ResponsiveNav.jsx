const ResponsiveNav = ({ isOpen }) => {
  return (
    <div
      className={`respo-nav-container ${
        !isOpen ? `respo-nav-close` : `respo-nav-open`
      } `}
    >
      <ul>
        <li>
          <a href="/community">Community</a>
        </li>
        <hr />
        <li>
          <a href="/jobs">Jobs</a>
        </li>
        <hr />
        <li>
          <a href="/companies">Companies</a>
        </li>
        <hr />
        <li>
          <a href="salaries">Salaries</a>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveNav;
