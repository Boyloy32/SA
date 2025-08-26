"use client";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";

const BarChart = () => {
  const [products, setProducts] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Calculate the default date range (one month from now)
  useEffect(() => {
    const today = new Date();
    const oneMonthAgo = new Date(today);
    oneMonthAgo.setMonth(today.getMonth() - 1);

    const formattedToday = today.toISOString().split('T')[0];
    const formattedOneMonthAgo = oneMonthAgo.toISOString().split('T')[0];

    setStartDate(formattedOneMonthAgo);
    setEndDate(formattedToday);
  }, []);

  // Fetch products with date filter
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts(startDate, endDate);
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    if (startDate && endDate) {
      fetchProducts();
    }
  }, [startDate, endDate]);  // Re-fetch when start or end date changes

  // Chart data setup
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "#1679AB",
        borderColor: "#F6F5F2",
        borderWidth: 1,
        data: [65, 59, 80, 81, products.totalSale],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Sale Report</h1>

      {/* Date Range Picker UI */}
      <div className="mb-6 flex items-center space-x-6">
        <div>
          <label className="mr-2 text-lg">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 border rounded-md text-black"
          />
        </div>

        <div>
          <label className="mr-2 text-lg">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 border rounded-md text-black"
          />
        </div>
      </div>

      {/* Sale and Revenue Statistics */}
      <div className="flex flex-wrap">
        <div className="mx-8 mb-6 w-full sm:w-1/2 md:w-1/4">
          <a
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {products.totalSale ? products.totalSale : 0} <span>sold</span>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Total sale from filter</p>
          </a>
        </div>
        <div className="mx-8 mb-6 w-full sm:w-1/2 md:w-1/4">
          <a
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              $ {products.totalPrice ? products.totalPrice : 0}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Total revenue from filter</p>
          </a>
        </div>
      </div>

      <h1 className="text-2xl font-bold my-6">Sale Graph</h1>
      <div className="bg-gray-700 rounded-md">
        <Bar options={options} data={data} />
      </div>

      <h1 className="text-2xl font-bold my-6">Revenue Graph</h1>
      <div className="bg-gray-700 rounded-md">
        <Bar options={options} data={data} />
      </div>
    </>
  );
};

// Fetch products with date range filter
async function getProducts(startDate, endDate) {
  const response = await fetch(
    `http://localhost:8080/api/v1/orders/total?startDate=${startDate}&endDate=${endDate}`,
    {
      method: "GET",
    }
  );
  return response.json();
}

export default BarChart;
