import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import { Card, notification } from "antd";
import "./Products.scss";

const Products = () => {
  const { getProducts, products, addCart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = (product) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      addCart(product),
        notification.success({
          message: "Producto añadido",
        });
    }
  };

  return (
    <div className="productos">
      <div className="publicidad">
        <img
          src="media\Publi\Historia instagram descuento panadería dulce amarillo.png"
          alt="imagen publicitaria"
        />
        <img src="media\Publi\Historia instagram moda día internacional conciencia verde (1).png" alt="" />
        <img src="media\Publi\Historia instagram moda día internacional conciencia verde.png" alt="" />
      </div>

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
              <img
                className="imagen"
                src="https://www.pngall.com/wp-content/uploads/4/Without-Brand-Lipstick-Transparent.png"
                alt=""
                srcset=""
              />
              <p>{product.price} €</p>

              <button onClick={() => addProduct(product)}>AÑADIR AL CARRITO</button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
