import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line, ResponsiveContainer } from 'recharts';
import moment from 'moment';
moment().format();



const LineCt = () => {

  // const data = [
  //   {
  //     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  //   },
  //   {
  //     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  //   },
  //   {
  //     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  //   },
  //   {
  //     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  //   },
  //   {
  //     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  //   },
  //   {
  //     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  //   },
  //   {
  //     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  //   },
  // ];


  const [index, setIndex] = useState([
    {
      id: '0', createdAt: "0", incoming_data: "0", data_error: 0
    }
  ]);
  

useEffect(() =>{
  fetch("https://5fc952922af77700165ae75d.mockapi.io/api/task/line-chart")
  .then(res => res.json())
  .then(data => {
      setIndex(data);
      console.log(data)
  })
}, [index]);


const DateFormatter = date => {
  // return moment(date).unix();
  return moment(date).format('DD');
};
const DateFormatter2 = date => {
  // return moment(date).unix();
  return moment(date).format('DD-MMMM, YYYY');
};
index.forEach(d => {
  d.createdAt = moment(d.createdAt).valueOf(); // date -> epoch
});
const valueCreator = value => {
  // return moment(date).unix();
  return value;
};

    return (
        <div className="line">
            <ResponsiveContainer margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <LineChart
        data={index}
        
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="createdAt" tickFormatter={DateFormatter} activeDot={{ r: 8 }} />
        <YAxis dataKey="incoming_data" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Tooltip
            wrapperStyle={{ backgroundColor: "red" }}
            labelStyle={{ color: "green", fontSize: "15px" }}
            itemStyle={{ color: "cyan", fontSize: "16px" }}
            formatter={valueCreator}
            labelFormatter={DateFormatter2}
          />
        
        
        <Line type="" dataKey="data_error" stroke="rgb(101, 166, 240)" activeDot={{ r: 8 }} />
        <Line type="" dataKey="incoming_data" stroke="rgb(101, 166, 240)" activeDot={{ r: 8 }} />
        
        
      </LineChart></ResponsiveContainer>

      <br/> <br/> <br/>
        </div>
    );
};

export default LineCt;