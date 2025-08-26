import ProductDetail from "@/components/productDetail/ProductDetail";

async function getProductById(id) {

  const response = await fetch(`http://localhost:8080/api/v1/products/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  return response.json();
}

export default async function Product({ params }) {
  const product = await getProductById(params.id);
  return (
    <>
      <ProductDetail product={product} />
    </>
  );
}
