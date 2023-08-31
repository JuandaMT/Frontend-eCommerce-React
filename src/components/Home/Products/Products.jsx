import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import { Card, notification } from "antd";
import "./Products.scss";

const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = (product)=>{
    return (
      addCart(product),
      notification.success({
        message: "Producto añadido",
      })
    )
  }

  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Card
            className="card"
            key={product._id}
            title={product.name}
            bordered={false}
            style={{
              width: 300,
              border: "1px solid",
              borderColor: "#C5BBAD",
            }}
          >
            <img className="imagen" src="https://cdn.pixabay.com/photo/2016/01/10/22/52/letters-1132703_1280.png" alt="" srcset="" />
            <p>{product.price} €</p>
            {/* metemos addCart dentro de una función para que no se ejecute al cargar el componente */}
            <button onClick={() => addProduct(product)}>Add cart</button>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
