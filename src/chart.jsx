import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DonationChart = ({ searchQuery }) => {

  const labels = ["bitcoin", "etherum", "solana", "pepe", "trump", "meme", "dogs", "tron", "xnb", "pi", "hamster", "tapswap"];
  const donationData = [2300, 2000, 650, 900, 1200, 750, 1800, 900, 400, 1100, 700, 550];

  const filteredLabels = labels.filter((label) => label.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredData = donationData.filter((_, index) => labels[index].toLowerCase().includes(searchQuery.toLowerCase()));

  const data = {
    labels: filteredLabels,
    datasets: [
      {
        label: "Donations ($)",
        data: filteredData,
        backgroundColor: "rgba(50, 172, 31, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "Monthly Donations" },
    },
  };

  return (
    <div className="mt-4 bg-white shadow rounded sta">
      <p>Statistics</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DonationChart;
