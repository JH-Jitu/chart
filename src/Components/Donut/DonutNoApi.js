import React, { PureComponent, useState } from 'react';
import { faCoffee, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
  PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer,
} from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DonutNoApi = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 1200 },
  ];


  const renderActiveShape = (props) => {
    const {
      cx, cy, startAngle, endAngle, percent } = props;

    return (

      <g>
        <text style={{ fontSize: "18px" }} fill="gray" x={cx} y={cy} dy={-35} textAnchor="middle">Currently</text>
        <text style={{ fontSize: "40px", fontWeight: "600" }} x={cx} y={cy} dy={1} textAnchor="middle" >{`${(percent * 100).toFixed(0)}`}</text>
        <text style={{ fontSize: "20px", fontWeight: "bold" }} x={cx} y={cy} dy={25} textAnchor="right" fill="gray">{`5%`}</text>
        <text style={{ fontSize: "12px" }} fill="gray" x={cx} y={cy} dy={40} textAnchor="middle">from last month</text>
        <FontAwesomeIcon width={20} x={95} y={16} dy={25} color="gray" imageAnchor="middle" icon={faArrowUp} />
        <Sector cornerRadius={20} paddingAngle={-5} fill="rgb(102, 184, 223)"
          cx={cx}
          cy={cy}
          innerRadius={72}
          outerRadius={80}
          startAngle={startAngle}
          endAngle={endAngle}
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
        <b>Data Quality Index</b>
      </div>
      <div className="data d-flex align-items-center">
        <small style={{ color: "rgb(102, 184, 223)" }}>MORE ></small>
      </div>
    </div>
      <div className="donut d-flex justify-content-center">

        <ResponsiveContainer width={240} height={240}>
          <PieChart>
            <pattern id="pattern-stripe"
              width="16" height="12"
              patternUnits="userSpaceOnUse"

              patternTransform="rotate(45)"
            >
              <rect
                width="13" height="12"
                fill="rgb(145, 205, 231)"></rect>
            </pattern>

            <Pie fill="url(#pattern-stripe)" cornerRadius={20} stroke="none"
              activeIndex={index}
              activeShape={renderActiveShape}
              data={data}
              innerRadius={73}
              outerRadius={77}
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
            </Pie>
          </PieChart></ResponsiveContainer>
      </div>
    </div>
  );
};

export default DonutNoApi;