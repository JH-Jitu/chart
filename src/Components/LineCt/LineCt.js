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
    // data.map(d=>console.log(d))
      setIndex(data);
      // console.log(data)
  })
}, []);


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


// Tool

const CustomTooltip = ({ active, payload, label}) => {  
  
  if (active) {console.log(label);
    
    return (
      
      <div className="custom-tooltip p-2">
        <b className="label">{`${DateFormatter2(label)}`}</b> <br/>
        <b style={{color:"rgb(57, 113, 216)"}} className="label">{`${payload[0].value}`}</b> <br/>
        <small className="desc">Incoming Data</small> <br/>
        <b style={{color:"rgb(101, 166, 240)"}} className="label">{`${payload[1].value}`}</b> <br/>
        <small className="desc">Error Data</small>
      </div>
    );
  }

  return null;
};

    return (
        <div className="line d-flex align-items-center justify-content-center">
            <ResponsiveContainer >
        <LineChart  
        data={index}
        
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="createdAt" tickFormatter={DateFormatter} activeDot={{ r: 8 }} />
        <YAxis dataKey="incoming_data" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Tooltip 
        content={<CustomTooltip labelFormatter={DateFormatter2}/>}
        labelFormatter={DateFormatter2}
          />
        
        
        
        <Line type="" dataKey="incoming_data" stroke="rgb(57, 113, 216)" activeDot={{ r: 8 }} />
        <Line type="" dataKey="data_error" stroke="rgb(101, 166, 240)" activeDot={{ r: 8 }} />
        
        
      </LineChart></ResponsiveContainer>

      <br/> <br/> <br/>
        </div>
    );
};

export default LineCt;