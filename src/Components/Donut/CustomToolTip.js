import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, Tooltip,
} from 'recharts';

const adsfds = () => {
    const data = [
        { name: 'Group A', value: 900 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div> <div> Hello World
            <PieChart width={800} height={400}><Tooltip></Tooltip>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={70}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label = "Hello"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart></div>
        </div>
    );
};

export default adsf;