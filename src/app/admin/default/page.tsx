'use client';

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import MiniCalendar from 'components/calendar/MiniCalendar';
import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
import TotalSpent from 'components/admin/default/TotalSpent';
import PieChartCard from 'components/admin/default/PieChartCard';
import CheckTable from 'components/admin/default/CheckTable';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import tableDataComplex from 'variables/data-tables/tableDataComplex';

// Register Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

// Data for Pie Charts (using different shades of blue)
const temperatureData1 = {
  labels: ['Low', 'Medium', 'High'],
  datasets: [
    {
      data: [30, 441, 461], // Adjust data to represent temperature ranges
      backgroundColor: ['#156082', '#1F7A8C', '#299698'],
      hoverBackgroundColor: ['#114F6A', '#1A6876', '#238082'],
    },
  ],
};


const temperatureData2 = {
  labels: ['Low', 'Medium', 'High'],
  datasets: [
    {
      data: [30, 441, 461], // Adjust data to represent temperature ranges
      backgroundColor: ['#156082', '#1F7A8C', '#299698'],
      hoverBackgroundColor: ['#114F6A', '#1A6876', '#238082'],
    },
  ],
};


const temperatureData3 = {
  labels: ['Low', 'Medium', 'High'],
  datasets: [
    {
      data: [30, 441, 461], // Adjust data to represent temperature ranges
      backgroundColor: ['#156082', '#1F7A8C', '#299698'],
      hoverBackgroundColor: ['#114F6A', '#1A6876', '#238082'],
    },
  ],
};


const temperatureData4 = {
  labels: ['Low', 'Medium', 'High'],
  datasets: [
    {
      data: [30, 441, 461], // Adjust data to represent temperature ranges
      backgroundColor: ['#156082', '#1F7A8C', '#299698'],
      hoverBackgroundColor: ['#114F6A', '#1A6876', '#238082'],
    },
  ],
};



const Dashboard = () => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg dark:bg-navy-800 dark:text-white">
      {/* Widgets Section */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {/* Pie Chart Widget 1 */}
        <div className="rounded-lg bg-white p-5 shadow-lg dark:bg-navy-700 dark:border-navy-700">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white">Temperature Zone 1</h4>
          <div className="mt-3">
            <Pie
              data={temperatureData1}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    display: true,
                    position: 'bottom',
                  },
                },
              }}
              height={120}
              width={120}
            />
          </div>
        </div>


        {/* Pie Chart Widget 2 */}
        <div className="rounded-lg bg-white p-5 shadow-lg dark:bg-navy-700 dark:border-navy-700">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white">Connectors</h4>
          <div className="mt-3">
            <Pie
              data={temperatureData2}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    display: true,
                    position: 'bottom',
                  },
                },
              }}
              height={120}
              width={120}
            />
          </div>
        </div>

        {/* Pie Chart Widget 3 */}
        <div className="rounded-lg bg-white p-5 shadow-lg dark:bg-navy-700 dark:border-navy-700">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white">Real-Time Power</h4>
          <div className="mt-3">
            <Pie
              data={temperatureData3}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    display: true,
                    position: 'bottom',
                  },
                },
              }}
              height={120}
              width={120}
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 shadow-lg dark:bg-navy-700 dark:border-navy-700">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white">Details</h4>
          <div className="mt-3">
            <Pie
              data={temperatureData4}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    display: true,
                    position: 'bottom',
                  },
                },
              }}
              height={120}
              width={120}
            />
          </div>
        </div>
      </div>

      {/* Remaining Dashboard Content */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <CheckTable tableData={tableDataCheck} />
        <WeeklyRevenue />
      </div>

      {/* Other Dashboard Sections */}
      {/* <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="rounded-lg bg-white p-5 shadow-lg dark:bg-gray-700 dark:border-gray-700">
          <TotalSpent />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 rounded-lg bg-white p-5 shadow-lg dark:bg-gray-700 dark:border-gray-700">
          <DailyTraffic />
          <PieChartCard />
        </div>
      </div>

      <ComplexTable tableData={tableDataComplex} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 rounded-lg bg-white p-5 shadow-lg dark:bg-gray-700 dark:border-gray-700">
        <TaskCard />
        <MiniCalendar />
      </div> */}
    </div>
  );
};

export default Dashboard;
