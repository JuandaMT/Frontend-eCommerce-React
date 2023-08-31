import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import "./Header.scss";
import Drop from "../Dropdown/Dropdown";

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
      <div className="header2">
        {token ? (
          <>
            <div className="contenedorHeader">
              <div className="logo">
                <img src="media\Gif\Logo recortado.png" alt="" />
              </div>
              <div className="enlaces">
                <span>
                  <Link className="icon" to="/">
                    <HomeOutlined />{" "}
                  </Link>
                </span>
                <span>
                  <Drop></Drop>
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
              </div>
            </div>
          </>
        ) : (
          <div className="contenedorHeader">
            <div className="logo">
                <img src="media\Gif\Logo recortado.png" alt="" />
              </div>
          <span className="enlaces">
            <Link className="icon" to="/">
              <HomeOutlined />
            </Link>
            <Link className="login" to="/login">
              Login
            </Link>
            <Link className="login" to="/register">
              Register
            </Link>
          </span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
