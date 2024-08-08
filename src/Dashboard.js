import React from 'react';
import './Dashboard.css';
import LockIcon from './lock.svg';
import BellIcon from './bell.png';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

const lineChartData = {
  labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Last 6 Months',
      data: [25, 30, 45, 60, 50, 70, 55, 80],
      borderColor: 'blue',
      borderWidth: 1,
      fill: false,
    },
    {
      label: 'Previous',
      data: [30, 35, 40, 55, 45, 65, 50, 75],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
    },
  ],
};

const doughnutChartData = {
  labels: ['Active', 'Completed', 'Ended'],
  datasets: [
    {
      data: [60, 30, 10],
      backgroundColor: ['#03a9f4', '#8bc34a', '#f44336'],
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <nav className="top-nav">
        <img src={LockIcon} alt="Lock" className="nav-icon lock-icon" />
        <div className="nav-right">
          <img src={BellIcon} alt="Bell" className="nav-icon" />
          <span>Femi John</span>
          <div className="nav-icon profile-icon"></div>
          <span className="dropdown-arrow">&#9662;</span>
        </div>
      </nav>
      <aside className="side-bar">
        <div className="side-bar-item selected">
          <div className="side-icon"></div>
          <span>Dashboard</span>
          <span className="side-arrow">&#9656;</span>
        </div>
        {['API Calls', 'User in AEM', 'Alert', 'Action Activities', 'Alert configuration', 'Post', 'Tickets', 'Reports', 'Jobs', 'Document', 'Payment'].map(title => (
          <div key={title} className="side-bar-item">
            <div className="side-icon"></div>
            <span>{title}</span>
          </div>
        ))}
      </aside>
      <main className="main-content">
        <div className="summary-cards">
          <div className="summary-card red-blur">
            <h3>Total API Calls</h3>
            <h2>1259</h2>
          </div>
          <div className="summary-card yellow-blur">
            <p>Alerts</p>
            <h2>23</h2>
          </div>
          <div className="summary-card green-blur">
            <p>Action Required</p>
            <h2>123</h2>
          </div>
        </div>
        <div className="chart-container">
          <h3>API calls Statistics</h3>
          <p>Nov - July</p>
          <Line data={lineChartData} />
        </div>
        <div className="tasks-container">
          <h3>Tasks</h3>
          <p>Show: This month</p>
          <Doughnut data={doughnutChartData} />
        </div>
        <div className="users-container">
          <h3>User</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Department</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lindsey Stroud</td>
                <td>lindsey.stroud@gmail.com</td>
                <td>Technology Department</td>
                <td>Head of Technology</td>
              </tr>
              <tr>
                <td>Sarah Brown</td>
                <td>sarah.brown@gmail.com</td>
                <td>Technology Department</td>
                <td>Head of Technology</td>
              </tr>
              <tr>
                <td>Mary Jane</td>
                <td>mary.jane@gmail.com</td>
                <td>Technology Department</td>
                <td>Head of Technology</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
