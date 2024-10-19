import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
} from 'recharts';
import { Box, Typography, Card, Grid } from '@mui/material';

// Sample data for the bar chart
const barData = [
  { name: 'January', value: 4000 },
  { name: 'February', value: 3000 },
  { name: 'March', value: 2000 },
  { name: 'April', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'June', value: 3500 },
];

// Sample data for the pie chart
const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// Sample data for the line chart
const lineData = [
  { name: 'January', value: 2000 },
  { name: 'February', value: 1500 },
  { name: 'March', value: 3000 },
  { name: 'April', value: 2800 },
  { name: 'May', value: 5000 },
  { name: 'June', value: 4000 },
];

// Sample values for the cards
const cardValues = [
  { title: 'Overall System Efficiency', value: '70%' },
  { title: 'Renewable Energy Utilization', value: '80%' },
  { title: 'Carbon Emission Reduction', value: '40%' },
  { title: 'Energy costs savings Metric/tons', value: '20' },
];

const EnergyTracking = () => {
  return (
    <Box className="flex flex-col p-4 bg-gray-100">
      <Typography variant="h5" component="h1" gutterBottom>
        Energy Tracking Dashboard
      </Typography>

      {/* Cards for Energy Metrics */}
      <Grid container spacing={4} mb={4}>
        {cardValues.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: '#E7FFA8', // Background color
                borderRadius: '20px', // Rounded corners
                boxShadow: 2, // Optional shadow
              }}
            >
              <Box p={2}>
                <Typography variant="subtitle2" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="h6" align="center">
                  {card.value}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bar Chart and Pie Chart */}
      <Grid container spacing={4} mb={4}>
        {/* Bar Chart */}
        <Grid item xs={12} sm={6}>
          <Card>
            <Box p={3}>
              <Typography variant="h6" gutterBottom>
                Energy Usage
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#B8FF01" opacity="50%" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} sm={6}>
          <Card>
            <Box p={3}>
              <Typography variant="h6" gutterBottom>
                Daily Energy Cost
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
        </Grid>
      </Grid>

      {/* Line Chart */}
      <Grid container mb={4}>
        <Grid item xs={12}>
          <Card>
            <Box p={3}>
              <Typography variant="h6" gutterBottom>
                Carbon Footprint CO2
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  {/* Area under the line with shadow effect */}
                  <Area type="monotone" dataKey="value" stroke="#82ca9d" fill="rgba(130, 202, 157, 0.5)" />
                  <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EnergyTracking;
