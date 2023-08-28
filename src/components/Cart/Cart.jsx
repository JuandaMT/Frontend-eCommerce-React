import React, { useContext } from "react";
import { Divider, List } from "antd";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Cart.scss";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const {createOrder} = useContext(OrdersContext)

  const data = cart.map((product) => product.name);

  return (
    <div>
      <List
        size="small"
        header={<div className="letra">Productos</div>}
        footer={
          <div>
            <button onClick={clearCart}>Vaciar carrito</button>
            <button onClick={()=>{
                createOrder(cart)
                clearCart()
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