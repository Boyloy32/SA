import React, { useState } from "react";

const EditModal = ({ product, onSave, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleFieldChange = (field, value) => {
    setEditedProduct({
      ...editedProduct,
      [field]: value,
    });
  };

  const handleSave = () => {
    // Send a PUT request to update the product with the new data
    fetch(`http://localhost:8080/api/v1/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    })
      .then((response) => response.json())
      .then((updatedProduct) => {
        onSave(updatedProduct); // Update the product in the parent component
      })
      .catch((error) => console.error("Error updating product: " + error));
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-700 w-[50%] p-4 rounded-lg overflow-y-auto max-h-[90vh]">
          <div className="mb-3">
            <label>Product title</label>
            <input
              type="text"
              value={editedProduct.title}
              onChange={(e) => handleFieldChange("title", e.target.value)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label>Code</label>
            <input
              type="text"
              value={editedProduct.code}
              onChange={(e) => handleFieldChange("code", e.target.value)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label>Price</label>
            <input
              type="number"
              value={editedProduct.price}
              onChange={(e) => handleFieldChange("price", e.target.value)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label>Category</label>
            <select
              id="category"
              value={editedProduct.category}
              onChange={(e) => handleFieldChange("category", e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option selected="">Select category</option>
              <option value="laptop">Laptop</option>
              <option value="desktop">Desktop</option>
              <option value="monitor">Monitor</option>
              <option value="component">PC Components</option>
              <option value="accessories">Accessories</option>
            </select>
            {/* <input
              type="text"
              value={editedProduct.category}
              onChange={(e) => handleFieldChange("category", e.target.value)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            /> */}
            <label>Brand</label>
            <select
              id="brand"
              value={editedProduct.brand}
              onChange={(e) => handleFieldChange("brand", e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option selected="">Select Brand</option>
              <option value="asus">Asus</option>
              <option value="msi">MSI</option>
              <option value="lenovo">Lenovo</option>
              <option value="acer">Acer</option>
              <option value="acer">Others</option>
            </select>
            {/* <input
              type="text"
              value={editedProduct.brand}
              onChange={(e) => handleFieldChange("brand", e.target.value)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            /> */}
            <label>Quantity In Stock</label>
            <input
              type="number"
              value={editedProduct.quantityInStock}
              onChange={(e) =>
                handleFieldChange("quantityInStock", e.target.value)
              }
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label>Discount Percent</label>
            <input
              type="number"
              value={editedProduct.discountPercent}
              onChange={(e) =>
                handleFieldChange("discountPercent", e.target.value)
              }
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label>Sold</label>
            <input
              type="number"
              value={editedProduct.sold}
              onChange={(e) => handleFieldChange("sold", e.target.value)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label>Thumbnail</label>
            <input
              type="text"
              value={editedProduct.thumbnail}
              onChange={(e) => handleFieldChange("thumbnail", e.target.value)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label>Desscription</label>
            <textarea
              value={editedProduct.description}
              onChange={(e) => handleFieldChange("description", e.target.value)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <button
              onClick={handleSave}
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
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

export default EditModal;
