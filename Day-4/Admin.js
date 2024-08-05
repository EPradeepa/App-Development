// import React from 'react';
// import './admin.css';
// import Sidebar from './Sidebar'; 
// import Summary from './Summary'; 


// const Admin = () => {
//   return (
//     <div className="admin-container">
//       <Sidebar />
//       <div className="main-content">
//         <h1>Admin Dashboard</h1>
//         <Summary />
       
//       </div>
//     </div>
//   );
// };

// export default Admin;
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './admin.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Admin = () => {
  // Sample data for bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Orders',
        data: [30, 20, 50, 40, 60, 80, 70],
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
            return `Orders: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-content">
        <div className="chart-container">
          <h2>Orders Overview</h2>
          <Bar data={data} options={options} />
        </div>
        <div className="manage-orders">
          <h2>Manage Orders</h2>
          <p>Here you can manage all customer orders.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Admin;
