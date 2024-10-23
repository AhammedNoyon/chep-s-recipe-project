import { useEffect, useState } from "react";
import DisplayMockup from "./DisplayMockup";

export default function Mockup() {
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   setProduct(products);
  //   console.log(product);
  // }, []);
  // console.log(product);
  return (
    <div>
      <DisplayMockup products={products}></DisplayMockup>
    </div>
  );
}
