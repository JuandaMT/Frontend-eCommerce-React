import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import { OrdersProvider } from "./context/OrdersContext/OrdersSate";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

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
                </Routes>
              </OrdersProvider>
            </ProductsProvider>
          </UserProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
