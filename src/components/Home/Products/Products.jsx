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
            key={product._id}
            title={product.name}
            bordered={false}
            style={{
              width: 300,
              border: "1px solid",
              borderColor: "#C5BBAD",
            }}
          >
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
