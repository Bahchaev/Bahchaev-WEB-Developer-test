// import React, {useEffect, useState} from 'react';
// // import AreaChart from "recharts/lib/chart/AreaChart";
// // import Area from "recharts/lib/cartesian/Area";
// // import Tooltip from "recharts/lib/component/Tooltip";
// // import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
// // import YAxis from "recharts/lib/cartesian/YAxis";
// // import XAxis from "recharts/lib/cartesian/XAxis";
// //
// // let arr = [];
// //
// // // random from min,00 to max,00
// // function randomInteger(min, max) {
// //     min = min * 100;
// //     max = max * 100;
// //     let rand = min - 0.5 + Math.random() * (max - min + 1);
// //     return Math.round(rand) / 100;
// // }
// //
// //
// // //push 100 element in data
// // for (let i = 0; i < 100; i++) {
// //     arr.push(
// //         {
// //             "date": new Date().toLocaleTimeString(),
// //             "rateUSD": randomInteger(50, 60)
// //         }
// //     )
// // }
// //
// // function ChartDraw() {
// //     let [chartData, setChartData] = useState([]);
// //
// //     function addData() {
// //         setChartData(
// //             {
// //                 "date": new Date().toLocaleTimeString(),
// //                 "rateUSD": randomInteger(50, 60)
// //             }
// //         );
// //     }
// //
// //     // useEffect(() => {
// //     //     setInterval(() => {
// //     //             setChartData(
// //     //                 chartData.concat([
// //     //                     {
// //     //                         "date": new Date().toLocaleTimeString(),
// //     //                         "rateUSD": randomInteger(50, 60)
// //     //                     }])
// //     //             );
// //     //
// //     //         }, 3000
// //     //     )
// //     // },[]);
// //
// //     return (
// //         <div>
// //             <AreaChart width={1000} height={250} data={chartData}
// //                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
// //                 <XAxis dataKey="date" domain={['auto', 'auto']}/>
// //                 <YAxis dataKey="rateUSD" domain={['auto', 'auto']}/>
// //                 <CartesianGrid strokeDasharray="3 3"/>
// //                 <Tooltip/>
// //                 <Area type="linear" dataKey="rateUSD" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
// //             </AreaChart>
// //
// //             <button onClick={addData()}>UP
// //             </button>
// //         </div>
// //     )
// // }
// //
// // export default ChartDraw