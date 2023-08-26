import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

function Header() {
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/")
    }
    ,2000)
  };

  return (
    <nav className="header">
    <div>
      {token ? (
        <>
          <span>
            <Link to="/">Products </Link>
          </span>
          <span>
            <Link to="/profile">Profile </Link>
          </span>
          <span onClick={logoutUser}>
            <Link to="/logout">Logout </Link>
          </span>
        </>
      ) : (
        <span>
          <Link to="/login">Login</Link>
        </span>
      )}
    </div>
  </nav>

  );
}

export default Header;
