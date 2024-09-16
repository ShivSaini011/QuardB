import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useHref } from "react-router-dom";

const NewArrivals = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="h-auto flex flex-col max-w-[83vw] m-auto m-b-10 border">
      <div className="flex justify-between mx-20 mt-5">
        <h1 className="text-4xl font-bold w-3">New Arrivals</h1>
        <button className="">
          More Products <IoIosArrowRoundForward className="inline" size={25} />
          <p className="border-b border-black"></p>
        </button>
      </div>
      <div className="flex flex-wrap  justify-start items-center mt-5 gap-2 overflow-aut1o mx-0">
        {products && products.map((product) => <ProductCard product={product} />)}
        {products && products.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
};

export default NewArrivals;
