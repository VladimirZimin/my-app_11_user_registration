import React, { useEffect, useRef, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([{ value: "Meat" }]);
  const [product, setProduct] = useState({});
  const isFirstRender = useRef(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setProduct({ value: evt.target.elements.text.value });

    evt.target.reset();
  };

  useEffect(() => {
    setProducts((prev) => [...prev, product]);
  }, [product]);

  useEffect(() => {
    const products = localStorage.getItem("authPage");
    const parsedProducts = JSON.parse(products);

    if (parsedProducts) {
      setProducts([...parsedProducts]);
    }
  }, []);

  useEffect(() => {
    if (!isFirstRender.current) {
      window.localStorage.setItem("authPage", JSON.stringify(products));
    }
    isFirstRender.current = false;
  }, [products]);

  return (
    <>
      <h1>Products</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">Send</button>
      </form>

      <ul>
        {products.map((prod) => (
          <li key={prod.value}>{prod.value}</li>
        ))}
      </ul>
    </>
  );
};

export default Products;
