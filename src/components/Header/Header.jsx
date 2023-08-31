import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import "./Header.scss";

function Header() {
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <nav className="header">
      <div>
        {token ? (
          <>
            <span>
              <Link className="icon" to="/">
                <HomeOutlined />{" "}
              </Link>
            </span>
            <span>
              <Link className="icon" to="/cart">
                {" "}
                <ShoppingCartOutlined />{" "}
              </Link>
            </span>
            <span>
              <Link className="icon" to="/profile">
                <UserOutlined />{" "}
              </Link>
            </span>
            <span onClick={logoutUser}>
              <Link className="icon" to="/logout">
                <LogoutOutlined />
              </Link>
            </span>
          </>
        ) : (
          <span >
            <Link className="login" to="/login">Login</Link>
            <Link className="login" to="/register">Register</Link>
          </span>
          
        )}
      </div>
    </nav>
  );
}

export default Header;
