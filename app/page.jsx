"use client";
import Category from "@/components/category/Category";
import PaginationHomePage from "@/components/pagination/Pagination";
import ProductCard from "@/components/product/ProductCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts();
        setProducts(response.content);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <div className="max-w-screen-xl m-auto">
        <div className="w-full h-12 bg-blue-500  p-2 mt-3 text-white font-bold text-xl">
          New Arrival
        </div>
        <div className="flex flex-wrap m-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              id={product.id}
              thumbnail={product.thumbnail}
              category={product.category}
              title={product.title}
              price={product.price}
              rating={product.rating}
              discountPercent={product.discountPercent}
            />
          ))}
        </div>
        <div className="w-full h-12 bg-blue-500  p-2 mt-3 text-white font-bold text-xl">
          Category
        </div>
        <Category />
        <div className="w-full h-12 bg-blue-500  p-2 mt-3 text-white font-bold text-xl">
          On Sale
        </div>
        <div className="flex flex-wrap">
          {products
            .filter((product) => product.discountPercent > 0)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                id={product.id}
                thumbnail={product.thumbnail}
                category={product.category}
                title={product.title}
                price={product.price}
                rating={product.rating}
                discountPercent={product.discountPercent}
              />
            ))}
        </div>
        <div className="w-full h-12 bg-blue-500  p-2 mt-3 text-white font-bold text-xl">
          All Product
        </div>
        <div className="flex flex-wrap">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              id={product.id}
              thumbnail={product.thumbnail}
              category={product.category}
              title={product.title}
              price={product.price}
              rating={product.rating}
              discountPercent={product.discountPercent}
            />
          ))}
        </div>
        <PaginationHomePage />
      </div>
    </>
  );
}

async function getProducts() {
  const response = await fetch(
    `http://localhost:8080/api/v1/products?page=0&size=6&sortDirection=desc`,
    {
      method: "GET",
    }
  );
  return response.json();
}
