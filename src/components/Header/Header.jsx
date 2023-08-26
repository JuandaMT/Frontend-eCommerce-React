import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { LogoutOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
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
              <Link to="/">Products </Link>
            </span>
            <span>
              <Link to="/profile"><UserOutlined/> </Link>
            </span>
            <span>
              <Link to="/cart"> <ShoppingCartOutlined/> </Link>
            </span>
            <span onClick={logoutUser}>
              <Link to="/logout">
                <LogoutOutlined />
              </Link>
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
