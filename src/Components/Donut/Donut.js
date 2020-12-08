import React, { PureComponent, useState } from 'react';
import {
  PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer,
} from 'recharts';
import { faCoffee, faArrowUp, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    return (
      <g>
        <text style={{ fontSize: "18px" }} fill="gray" x={cx} y={cy} dy={-35} textAnchor="middle">Currently</text>
        <text style={{ fontSize: "40px", fontWeight: "600" }} x={cx} y={cy} dy={1} textAnchor="middle" >$16m</text>

        <FontAwesomeIcon width={20} x={95} y={16} dy={25} imageAnchor="middle" color={fill} icon={faArrowUp} />
        <text style={{ fontSize: "20px", fontWeight: "bold" }} x={cx} y={cy} dy={25} textAnchor="right" fill={fill}>{`${(percent * 100).toFixed(0)}%`}</text>

        <text style={{ fontSize: "12px" }} fill="gray" x={cx} y={cy} dy={40} textAnchor="middle">from last month</text>

        {/* High-Low-Medium */}
        <FontAwesomeIcon width={10} x={25} y={95} dy={100} imageAnchor="middle" color="red" icon={faDotCircle} />
        <text style={{ fontSize: "12px" }} fill="red" x={50} y={cy} dy={100} textAnchor="middle">High</text>

        <FontAwesomeIcon width={10} x={85} y={95} dy={100} imageAnchor="middle" color="orange" icon={faDotCircle} />
        <text style={{ fontSize: "12px" }} fill="orange" x={cx} y={cy} dy={100} textAnchor="middle">Medium</text>

        <FontAwesomeIcon width={10} x={170} y={95} dy={100} imageAnchor="middle" color="rgb(230, 210, 30)" icon={faDotCircle} />
        <text style={{ fontSize: "12px" }} fill="rgb(230, 210, 30)" x={195} y={cy} dy={100} textAnchor="middle">Low</text>


        <Sector cornerRadius={20} paddingAngle={-5}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };
  const [index, setIndex] = useState(1);
  // const [inside, setInside] = useState(0);


  const onPieEnter = (data, index) => {
    setIndex(index);
    // setInside(data);
    // console.log(data)
  };


  return (
    <div>{/* Heading */} <div className="d-flex align-items-center justify-content-between dataHead-heading">
      <div className="">
        <b>Business Impact</b>
      </div>
      <div className="data d-flex align-items-center">
        <small style={{ color: "rgb(102, 184, 223)" }}>MORE ></small>
      </div>
    </div>
      <div className="donut d-flex justify-content-center">
        <ResponsiveContainer width={240} height={240}>
          <PieChart>
            <Pie cornerRadius={20} paddingAngle={-5} stroke="none"
              activeIndex={index}
              activeShape={renderActiveShape}
              data={data}
              innerRadius={72}
              outerRadius={80}
              dataKey="value"
              onMouseEnter={onPieEnter}
            >{
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }</Pie>
          </PieChart></ResponsiveContainer>

      </div>
    </div>
  );
};

export default Donut;