import React, { useEffect, useRef } from "react";
import { FaDollarSign, FaListAlt, FaUtensils, FaUsers ,FaBell} from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import profile from "../assets/profile.jpeg";
import Chart from "chart.js/auto";


const Header = () => {
  return (
    <div className="flex items-center justify-between bg-slate-50 p-4 border-b">
      <div className="flex items-center ml-3">
        <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
        <span className="ml-3 font-semibold">John Doe</span>
      </div>
      <FaBell className="text-gray-600 cursor-pointer text-2xl" />
    </div>
  );
};

const Dashboard = () => {
  // Sample data for Total Revenue (line chart) and Total Orders (bar chart)
  const revenueChartRef = useRef(null);
  const ordersChartRef = useRef(null);

  useEffect(() => {
    // Total Revenue Chart
    const revenueChart = new Chart(revenueChartRef.current, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Total Revenue",
            data: [500, 1000, 1500, 2000, 2500, 3000],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });

    // Total Orders Chart
    const ordersChart = new Chart(ordersChartRef.current, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Total Orders",
            data: [100, 200, 150, 250, 300, 200],
            backgroundColor: "rgb(255, 99, 132)",
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });

    return () => {
      revenueChart.destroy();
      ordersChart.destroy();
    };
  }, []);
  return (
    <div className="bg-red-100 h-screen w-full">
      <Header />
      <div className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Total Revenue */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-between">
            <div>
              <FaDollarSign className="text-blue-500 text-2xl" />
              <div className="font-semibold text-lg">Total Revenue</div>
            </div>
            <div className="text-xl font-bold">$5000</div>
          </div>
          {/* Total Orders */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-between">
            <div>
              <FaListAlt className="text-green-500 text-2xl" />
              <div className="font-semibold text-lg">Total Orders</div>
            </div>
            <div className="text-xl font-bold">100</div>
          </div>
             {/* Total Menu Items */}
             <div className="bg-white rounded-lg p-4 flex items-center justify-between">
            <div>
              <FaUtensils className="text-yellow-500 text-3xl" />
              <div className="font-semibold text-lg">Total Menu Items</div>
            </div>
            <div className="text-2xl font-bold">50</div>
          </div>
          {/* Total Staff */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-between">
            <div>
              <FaUsers className="text-purple-500 text-3xl" />
              <div className="font-semibold text-lg">Total Staff</div>
            </div>
            <div className="text-2xl font-bold">20</div>
          </div>
        </div>
        
        <div className="flex mt-4">
          {/* Line Chart for Total Revenue */}
          <div className="flex-grow bg-white rounded-lg p-4 mr-4">
            <canvas ref={revenueChartRef} width={400} height={200}></canvas>
          </div>
          {/* Bar Chart for Total Orders */}
          <div className="flex-grow bg-white rounded-lg p-4">
            <canvas ref={ordersChartRef} width={400} height={200}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
