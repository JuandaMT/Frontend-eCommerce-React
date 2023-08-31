import React, { useContext } from "react";
import { List } from "antd";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const {createOrder} = useContext(OrdersContext)

  const data = cart.map((product) => product.name);
  const navigate = useNavigate();
  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
    notification.success({
      message: "Pedido creado con éxito",
    })
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="carrito">
      <h2>TU CARRITO</h2>
      <List
      className="lista"
        size="small"
       /*  header={<div className="letra">PRODUCTOS</div>} */
        footer={
          <div>
            <button className="boton" onClick={clearCart}>Vaciar carrito</button>
            <button className="boton" onClick={()=>{
                createNewOrder ()
            }}>Comprar</button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Cart;