import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Home/Footer/Footer";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import "./App.scss"

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <UserProvider>
            <ProductsProvider>
              <OrdersProvider>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/logout" element={<Logout />} />
                </Routes>
                <Footer></Footer>
              </OrdersProvider>
            </ProductsProvider>
          </UserProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
