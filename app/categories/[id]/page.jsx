import ProductCard from "@/components/product/ProductCard";

export default async function CategoryPage({ params }) {
  const product = await getProductById(params.id);
  return (
    <>
      <div className="max-w-screen-xl m-auto">
        <div className="flex flex-wrap m-auto">
          {product.map((product) => (
            <ProductCard
              key={product.id}
              kk={product}
              id={product.id}
              thumbnail={product.thumbnail}
              category={product.category}
              name={product.title}
              price={product.price}
              rating={product.rating}
              discountPercent={product.discountPercent}
            />
          ))}
        </div>
      </div>
    </>
  );
}

async function getProductById(id) {
  const response = await fetch(`http://localhost:8080/api/v1/category/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  return response.json();
}
