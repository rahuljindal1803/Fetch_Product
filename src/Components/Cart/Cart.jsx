import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  selectCartItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../feature/cart/cartSlice";
import { IoAddCircle } from "react-icons/io5";
import { IoIosRemoveCircle } from "react-icons/io";

const Cart = () => {
  const cartItems = useSelector(selectCartItem);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleRemove = (id) => {
    console.log("Removing items id", id);
    dispatch(removeItem({ id }));
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalForItem = (item) => {
    return item.price * item.quantity;
  };

  const calculateOverallTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateTotalForItem(item),
      0
    );
  };

  return (
    <>
      <Navbar />
      <div className="mt-14 w-full  h-full flex justify-center items-center ">
        <div className="w-11/12 h-full p-2   bg-[#eaeded] flex justify-between ">
          <div className="w-10/12 flex  mt-2 justify-start flex-col items-center ">
            {cartItems.length === 0 ? (
              <div className="w-full p-2 h-1/6 flex justify-center items-center">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                {cartItems.map((items, index) => (
                  <div
                    key={index}
                    className="w-8/12 mb-5 h-64 mt-6 sm:w-10/12 md:w-9/12 lg:w-7/12 p-5 rounded-lg bg-[#ffffff] flex flex-col "
                  >
                    <div className="w-full h-5/6 flex">
                      <div className="w-3/6">
                        <img
                          className="w-full h-full"
                          src={items.imageUrl}
                          alt="images"
                        />
                      </div>
                      <div className="w-3/6 ml-4 flex flex-col">
                        <div className="w-full h-4/6 flex flex-col">
                          <div>{items.title}</div>
                          <div>{items.description}</div>
                        </div>
                        <div className="w-full h-2/6">
                          {items.price} x {items.quantity} = $
                          {calculateTotalForItem(items)}
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-1/6 flex justify-end mt-2">
                      <div className="w-2/6 text-center  flex justify-end ">
                        <button
                          onClick={() => handleRemove(items.id)}
                          className="w-3/6 h-6/6 cursor-pointer bg-yellow-200 select-none"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="w-2/6 text-center flex justify-center ">
                        <IoAddCircle
                          className="w-1/6  text-center text-2xl cursor-pointer mt-1  "
                          onClick={() => handleIncreaseQuantity(items.id)}
                        />
                        <div className="w-1/6 justify-center flex flex-col select-none">
                          {items.quantity}
                        </div>
                        <IoIosRemoveCircle
                          className="w-1/6 text-2xl cursor-pointer mt-1"
                          onClick={() => handleDecreaseQuantity(items.id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {/* ... other JSX code */}
              </>
            )}
          </div>
          <div className="w-3/12 sm:w-5/12 md:w-4/12 lg:w-3/12 h-64 mr-5 mt-5 p-2 flex bg-white rounded-md flex-col ">
            <div className="w-full p-2 h-1/6 flex justify-between">
              <div className="w-3/6 font-medium">Price Detail</div>

              <div className="w-2/6">Items:{calculateTotalItems()}</div>
            </div>
            <div className="h-4/6 p-4">
              <div className="h-2/6 flex flex-row justify-between">
                <div className="w-3/6">Price:</div>
                <div className="w-2/6">${calculateOverallTotal()}</div>
              </div>
              <div className="h-2/6 flex flex-row justify-between">
                <div className="w-2/6">Delivery:</div>
                <div className="w-2/6">$0</div>
              </div>
              <hr />
              <div className="h-2/6 mt-2 flex justify-between">
                <div className="w-3/6 flex justify-center ">Total Amount:</div>
                <div className="w-2/6 flex ">${calculateOverallTotal()}</div>
              </div>
              <hr />
            </div>
            <div className="h-1/6 flex justify-center rounded-md bg-yellow-200">
              <button className="cursor-pointer w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
