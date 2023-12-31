import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"

const NavBar = () => {

  return (
    <nav>
      <div className="navbar">
        <div>
          <Link to="/">
            <img src="public/CarterCap.png" className="carterLogo"></img>
          </Link>
        </div>
        <div className="navLinks">
          <h1>
            <Link to="/transactions">My Transactions</Link>
          </h1>
          <h1>
            <Link to="/transactions/new">Manage Transactions</Link>
          </h1>
          <button className="auth">
            <FontAwesomeIcon icon={faLock} />
            <span> Sign Up</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
