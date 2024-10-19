import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Box, Typography, Card } from '@mui/material';

// Sample data for the line charts
const data1 = [
  { name: 'January', value1: 65, value2: 45 },
  { name: 'February', value1: 59, value2: 40 },
  { name: 'March', value1: 80, value2: 30 },
  { name: 'April', value1: 81, value2: 50 },
  { name: 'May', value1: 56, value2: 60 },
  { name: 'June', value1: 55, value2: 70 },
];

const data2 = [
  { name: 'January', value1: 28, value2: 38 },
  { name: 'February', value1: 48, value2: 28 },
  { name: 'March', value1: 40, value2: 50 },
  { name: 'April', value1: 19, value2: 20 },
  { name: 'May', value1: 86, value2: 76 },
];

// Sample data for the bar chart
const barData = [
  { name: 'A', value: 4000 },
  { name: 'B', value: 3000 },
  { name: 'C', value: 2000 },
  { name: 'D', value: 2780 },
  { name: 'E', value: 1890 },
  { name: 'F', value: 3000 }, // Additional bar for six total
];

// Sample data for the pie chart
const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const RealTimeMonitoring = () => {
  return (
    <Box className="flex flex-col h-screen p-4 overflow-y-auto bg-gray-100">
      <Typography variant="h4" component="h1" gutterBottom>
        Real Time Monitoring Dashboard
      </Typography>

      {/* Line Charts */}
      <Box display="grid" gap={4} mb={6} gridTemplateColumns="repeat(1, 1fr)">
        {/* First Graph */}
        <Card>
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Weld Temperature
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value1" stroke="#8884d8" />
                <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Card>

        {/* Second Graph */}
        <Card>
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Force Applied
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value1" stroke="#8884d8" />
                <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Card>

        {/* Third Graph */}
        <Card>
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Vibration Level
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data1}> {/* Reusing data1 for demonstration */}
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value1" stroke="#8884d8" />
                <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Card>
      </Box>

      {/* Cards for Bar Chart and Pie Chart */}
      <Box display="grid" gap={4} gridTemplateColumns="repeat(2, 1fr)">
        {/* Bar Chart Card */}
        <Card>
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Cycle Time
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#95A4FC', '#BAEDBD', '#96D000', '#B1E3FF', '#D0DFE9', '#A1E3CB'][index]} />
                    ))}
                </Bar>
  </BarChart>
            </ResponsiveContainer>
          </Box>
        </Card>

        {/* Pie Chart Card */}
        <Card>
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Oil Pressure
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#B1E3FF', '#A1E3CB', '#FFFFFF', '#96D000'][index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default RealTimeMonitoring;
