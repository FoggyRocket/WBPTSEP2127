import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        {/* <a href="/home.html">Home</a> */}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
    <a href="https://stackoverflow.com/">StackOverFlow</a>
  </nav>
);

export default Navbar;
