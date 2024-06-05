import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductContext } from "../context/ProductContext";
import { BasketContext } from "../context/BasketContext";

const Products = () => {
  const { items, onDelete } = useContext(ProductContext);
  const { getBasketData, setBasket } = useContext(BasketContext);
  let element = (
    <div className="w-[300px] rounded-md">
      <Skeleton height={300} />
      <Skeleton />
      <Skeleton />
    </div>
  );
  const skeleton = new Array(8).fill(element);
  return (
    <div>
      <h2 className="text-2xl font-bold">Product list </h2>
      <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.length < 1 &&
          skeleton.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
      <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((item) => (
          <li key={item.id} className="shadow-xl ">
            <Link to={`/products/${item.id}`}>
              <img height={300} src={item.thumbnail} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <b>{item.price}</b>
              </div>
            </Link>
            <div className="flex gap-3">
              <button
                onClick={() => onDelete(item.id)}
                className="bg-red-500 text-white p-2"
              >
                delete
              </button>
              <button
                onClick={() => getBasketData(item)}
                className="bg-green-500 text-white p-2"
              >
                add to basket
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
