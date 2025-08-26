import React, { useState } from "react";

const OrderDetailModal = ({ product, onCancel }) => {
  const productArray = product.split(",").map((item, index) => (
    <>
      <h1  className="text-2xl" key={index}>{item.trim()}</h1>
      <br/>
    </>
  ));

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-gray-700 w-[50%] p-4 rounded-lg">
          <div className="mb-3">
            <label className="text-3xl mb-3">Order Details</label>
            <div className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              {productArray}
            </div>

            <button
              onClick={onCancel}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailModal;
