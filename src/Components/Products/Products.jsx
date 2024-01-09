import React from "react";

const Products = ({ title, description, price, imageUrl, ratings }) => {
  return (
    <div className="w-4/12  my-3">
      <div className=" w-11/12 rounded-xl h-11/12 overflow-hidden shadow-2xl border-gray-200  border-[1px] border-solid">
        <img
          className="w-full  h-60 p-2 rounded-2xl"
          src={imageUrl}
          alt="Logo"
        />
        <div className="h-32 px-6 py-4">
          <div className="font-bold text-lg mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}...</p>
        </div>
        <div className="h-16 px-2 py-4">
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            ⭐{ratings}
          </div>
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700">
            $ {price}
          </div>
          <button className="mx-1 inline-block bg-gray-200 rounded-full  px-3 py-1 text-base font-semibold text-gray-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
