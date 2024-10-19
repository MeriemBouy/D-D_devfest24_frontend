import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';

// Sample data with color information
const data = [
  { name: 'Category A', value: 400, color: '#8884d8' },
  { name: 'Category B', value: 300, color: '#82ca9d' },
  { name: 'Category C', value: 200, color: '#ffc658' },
  { name: 'Category D', value: 100, color: '#ff7300' },
];

const BarChartComponent = () => {
  return (
    <BarChart width={300} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} radius={[10, 10, 0, 0]} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default BarChartComponent;
