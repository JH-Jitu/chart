import React, { PureComponent, useState } from 'react';
import {
  PieChart, Pie, Sector, Cell, Tooltip,
} from 'recharts';

const Donut = () => {
  const data = [
    { name: 'Group A', value: 900 },
    { name: 'Group B', value: 1200 },
    { name: 'Group C', value: 600 }
  ];

  const COLORS = ['rgb(230, 210, 30)', 'red', 'orange'];

      const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
          cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
          fill, payload, percent, value,
        } = props;

        // const sin = Math.sin(-RADIAN * midAngle);
        // const cos = Math.cos(-RADIAN * midAngle);
        // const sx = cx + (outerRadius + 10) * cos;
        // const sy = cy + (outerRadius + 10) * sin;
        // const mx = cx + (outerRadius + 30) * cos;
        // const my = cy + (outerRadius + 30) * sin;
        // const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        // const ey = my;
        // const textAnchor = cos >= 0 ? 'start' : 'end';
      
        return (
          <g>
            <text style={{fontSize: "18px"}} fill="gray" x={cx} y={cy} dy={-35} textAnchor="middle">Currently</text>
            <text style={{fontSize: "40px", fontWeight: "600"}} x={cx} y={cy} dy={1} textAnchor="middle" >$16m</text>
            <text style={{fontSize: "20px", fontWeight: "bold"}} x={cx} y={cy} dy={25} textAnchor="middle" fill={fill}>{`↑ ${(percent * 100).toFixed(2)}%`}</text>
            <text style={{fontSize: "12px"}} fill="gray" x={cx} y={cy} dy={40} textAnchor="middle">from last month</text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />
          
            {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text> */}
          </g>
        );
      };
      const [index, setIndex] = useState(1);
      const [inside, setInside] = useState(0);
      
    
      const onPieEnter = (data, index) => {
        setIndex(index);
        setInside(data);
        console.log(data)
      };
      

    return (
        <div className="donut"> <PieChart width={200} height={200}>
        <Pie
          activeIndex={index}
          activeShape={renderActiveShape}
          data={data}
          // cx={200}
          // cy={200}
          innerRadius={70}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >{
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }</Pie>
      </PieChart>
        </div>
    );
};

export default Donut;