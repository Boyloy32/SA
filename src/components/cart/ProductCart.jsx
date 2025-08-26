import { CartContext } from "@/context/cartContext";
import { useContext } from "react";

const ProductCart = (props) => {
  const { cartItem } = props;
  const { addToCart, removeFromCart } = useContext(CartContext);

  let totalEachItem = cartItem.price * cartItem.quantity;

  return (
    <>
      <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
        <div className="w-full md:max-w-[126px]">
          <img src={cartItem.thumbnail} alt="no image" className="mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
          <div className="md:col-span-2">
            <div className="flex flex-col max-[500px]:items-center gap-3">
              <h6 className="font-semibold text-base leading-7 text-black">
                {cartItem.name ? cartItem.name : cartItem.title}
              </h6>
              <h6 className="font-normal text-base leading-7 text-gray-500">
                {cartItem.category}
              </h6>
              <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-blue-600">
                ${cartItem.price ? cartItem.price.toFixed(2) : 0 }
              </h6>
            </div>
          </div>
          <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
            <div className="flex items-center h-full">
              <button
                onClick={() => {
                  removeFromCart(cartItem);
                }}
                className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
              >
                <svg
                  className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                placeholder={cartItem.quantity}
              />
              <button
                onClick={() => {
                  addToCart(cartItem);
                }}
                className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
              >
                <svg
                  className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke=""
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke=""
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke=""
                    stroke-opacity="0.2"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
            <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-blue-600">
              ${totalEachItem.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
