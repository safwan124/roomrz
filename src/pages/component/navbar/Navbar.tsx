import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { faBed} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/enquiry");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">
          <FontAwesomeIcon icon={faBed} className='ContentIcon' />
            Stayz
          </span>
        </Link>
        <div className="navItems">
          <button className="navButton" onClick={handleSearch}>List Your Hotel</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
