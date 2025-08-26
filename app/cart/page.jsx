"use client";

import ProductCart from "@/components/cart/ProductCart";
import { CartContext } from "@/context/cartContext";
import { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const {
    cartItems,
    clearCart,
    getCartTotalPrice,
    getCartTotalItems,
    getAllCartName,
  } = useContext(CartContext);
  const [receiverName, setReceiverName] = useState('');
  const [receiverNumber, setReceiverNumber] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:8080/api/v1/orders'; // Replace with your actual API endpoint

    const data = {
      customerName: receiverName,
      customerNumber: receiverNumber,
      customerAddress: receiverAddress,
      totalQuantity: getCartTotalItems(),
      totalPrice: getCartTotalPrice(),
      productName: getAllCartName(),
      status: "Pending"
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Assuming the server responds with JSON data
      const responseData = await response.json();
      console.log('Response:', responseData);
      toast.success("Successfully Checked Out", {
        position: "bottom-right",
        autoClose: 2000,
      });
      clearCart()
      // Handle the response data here, such as showing a success message
    } catch (error) {
      toast.error("Failed Check Out", {
        position: "bottom-right",
        autoClose: 2000,
      });
      console.error('Error:', error);
      // Handle errors here, such as showing an error message to the user
    }
  };

  return (
    <>
      <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
              <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                  Shopping Cart
                </h2>
                <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                  {getCartTotalItems() ? getCartTotalItems() : "0" } Items
                </h2>
              </div>
              <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                <div className="col-span-12 md:col-span-7">
                  <p className="font-normal text-lg leading-8 text-gray-400">
                    Product Details
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="grid grid-cols-5">
                    <div className="col-span-3">
                      <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                        Quantity
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                        Total
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {cartItems.map((cartItem) => (
                <ProductCart key={cartItem.id} cartItem={cartItem} />
              ))}
              <button
                onClick={clearCart}
                className="w-full text-center bg-red-500 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-red-600"
              >
                Clear Cart
              </button>
            </div>
            <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                Order Summary
              </h2>
              <div className="mt-8">
                <div className="flex items-center justify-between pb-6">
                  <p className="font-bold text-lg leading-8 text-black">
                    {getCartTotalItems()} Items
                  </p>
                  <p className="font-bold text-lg leading-8 text-black">
                    ${getCartTotalPrice()}
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                    Reciever Name
                  </label>
                  <div className="flex pb-6">
                    <div className="relative w-full">
                      <div className=" absolute left-0 top-0 py-3 px-4"></div>
                      <input
                        type="text"
                        value={receiverName}
                        onChange={(e) => setReceiverName(e.target.value)}
                        className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                        placeholder="Reciever Name"
                      />
                    </div>
                  </div>
                  <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">
                    Phone Number
                  </label>
                  <div className="flex pb-4 w-full">
                    <div className="relative w-full ">
                      <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                      <input
                        type="text"
                        value={receiverNumber}
                        onChange={(e) => setReceiverNumber(e.target.value)}
                        className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                        placeholder="855 12 456 789"
                      />
                    </div>
                  </div>
                  <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">
                    Address
                  </label>
                  <div className="flex pb-4 w-full">
                    <div className="relative w-full ">
                      <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                      <input
                        type="text"
                        value={receiverAddress}
                        onChange={(e) => setReceiverAddress(e.target.value)}
                        className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                        placeholder="122E Dangkor Dangkor PhnomPenh"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-8">
                    <p className="font-medium text-xl leading-8 text-black">
                      {getCartTotalItems()} Items
                    </p>
                    <p className="font-semibold text-xl leading-8 text-blue-500">
                      ${getCartTotalPrice().toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full text-center bg-blue-500 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-blue-600"
                  >
                    Checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
  );
};

export default Cart;
