import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
} from 'recharts';
import { Box, Typography, Card } from '@mui/material';

// Sample data for the bar chart
const barData = [
  { name: 'January', value: 4000 },
  { name: 'February', value: 3000 },
  { name: 'March', value: 2000 },
  { name: 'April', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'June', value: 3500 },
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

const ProductionTraffic = () => {
  return (
    <Box className="flex flex-col p-4 bg-gray-100">
      <Typography variant="h5" component="h1" gutterBottom>
        Production Traffic Dashboard
      </Typography>

      {/* Large Bar Chart */}
      <Card>
        <Box p={3}>
          <Typography variant="h6" gutterBottom>
            Production Traffic
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#34C759" radius={[10, 10, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Card>

      {/* Line Chart with Shadow Effect */}
      <Card sx={{ mt: 4 }}>
        <Box p={3}>
          <Typography variant="h6" gutterBottom>
            Production users
          </Typography>
          <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* Area for shadow effect */}
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="none"
                  fill="rgba(130, 202, 157, 0.4)" // Adjust opacity for visibility
                  dot={false} // Disable dots for the area
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  dot={{ r: 4 }} // Show dots on the main line
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductionTraffic;
