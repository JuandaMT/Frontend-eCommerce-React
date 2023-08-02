import { Link } from "react-router-dom";

function Header() {

  return (
    <nav className="header">
      <span>Header</span>
      <div>    
            <span>
              <Link to="/">Login</Link>
            </span>
            <span>
              <Link to="/profile">Profile</Link>
            </span>
      </div>
    </nav>
  );
}

export default Header;