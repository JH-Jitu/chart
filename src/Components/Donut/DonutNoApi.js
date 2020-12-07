import React, { PureComponent, useState } from 'react';
import { faCoffee, faArrowUp } from '@fortawesome/free-solid-svg-icons'
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
        const RADIAN = Math.PI / 180;
        const {
          cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
          fill, payload, percent, value
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
            <text style={{fontSize: "40px", fontWeight: "600"}} x={cx} y={cy} dy={1} textAnchor="middle" >{`${(percent * 100).toFixed(0)}`}</text>
            <text style={{fontSize: "20px", fontWeight: "bold"}} x={cx} y={cy} dy={25} textAnchor="right" fill="gray">{`5%`}</text>
            <text style={{fontSize: "12px"}} fill="gray" x={cx} y={cy} dy={40} textAnchor="middle">from last month</text>
            <FontAwesomeIcon width={20} x={95} y={16} dy={25} color="gray"  imageAnchor="middle" icon={faArrowUp} />
            <Sector cornerRadius={20} paddingAngle={-5} fill="rgb(102, 184, 223)"
              cx={cx}
              cy={cy}
              innerRadius={72}
          outerRadius={80}
              startAngle={startAngle}
              endAngle={endAngle}
              // fill={fill}
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
        <div>{/* Heading */} <div className="d-flex align-items-center justify-content-between dataHead-heading">
        <div className="">
            <b>Data Quality Index</b>
        </div>
        <div className="data d-flex align-items-center">
            <small style={{color: "rgb(102, 184, 223)"}}>MORE ></small>
        </div>
    </div>
          <div className="donut d-flex justify-content-center">
          
          <ResponsiveContainer  width={240} height={240}>
           <PieChart>
           <pattern id="pattern-stripe" 
        width="16" height="12" 
         patternUnits="userSpaceOnUse"
        
         patternTransform="rotate(45)"
         >
    <rect
    width="13" height="12"

    //  transform="translate(1,0)" 
     fill="rgb(145, 205, 231)"></rect>
  </pattern>

        <Pie fill="url(#pattern-stripe)" cornerRadius={20}  stroke="none"
          activeIndex={index}
          activeShape={renderActiveShape}
          data={data}
          // cx={200}
          // cy={200}
          innerRadius={73}
          outerRadius={77}
          // fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {/* {
          data.map((entry, index) => <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        } */}
        </Pie>
      </PieChart></ResponsiveContainer>
        </div>
        </div>
    );
};

export default DonutNoApi;