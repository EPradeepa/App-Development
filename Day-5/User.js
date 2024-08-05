// src/components/UserPanel.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './User.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const User = () => {
  // Sample data for the bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Monthly Usage',
        data: [50, 60, 70, 90, 80, 85, 95],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Usage: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="user-panel">
      <h1>User Panel</h1>
      <div className="chart-container">
        <h2>Monthly Usage Overview</h2>
        <Bar data={data} options={options} />
      </div>
      <div className="user-info">
        <h3>Welcome, User!</h3>
        <p>Your usage data is displayed above. Check back regularly for updates.</p>
      </div>
    </div>
  );
};

export default User;
