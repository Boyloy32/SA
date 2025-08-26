import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getCategories();
        if (response && response.content) {
          setCategories(response.content);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-screen-xl m-auto"
      >
        <CarouselContent>
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.name}`}>
              <div className="flex flex-col flex-wrap items-center justify-center p-2 cursor-pointer">
                <div className="flex flex-col w-48 m-3 items-center">
                  {category.image && (
                    <img
                      className="w-48 h-48 rounded-full"
                      src={category.image}
                      alt=""
                    />
                  )}
                  <span>{category.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

async function getCategories() {
  const response = await fetch(
    `http://localhost:8080/api/v1/categories?page=0&size=10&sortDirection=desc`,
    {
      method: "GET",
    }
  );
  return response.json();
}

export default Category;
