// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Customtooltip from "../customtooltip/Customtooltip";

import './chart.css';

export default function Dailyactivity({data}) {

  const getYaxisData = () => {
    const getkKilogramValue = () => {
        let value = []
        data?.forEach(element => {
            value.push(element.kilogram)
        })
        console.log(value)
        return value
    }
    

    const kilogramValues = getkKilogramValue()
    const min = Math.min(...kilogramValues) - 1
    const max = Math.max(...kilogramValues) + 1
    const somme = min + max
    const medium = somme / 2
    const yAxisData = [min, medium, max]
    // console.log(kilogramValues)
    // console.log(min)
    // console.log(max)
    // console.log(yAxisData);
    // console.log( "hyyyy", Math.min(...kilogramValues))
    return yAxisData

  }
  // console.log(getYaxisData)


  return (
    <div className="daily-activity">
    <div className="daily-activity__heading">
        <h3>Activité quotidienne</h3>
        <ul className="daily-activity__heading__listctn">
            <li className="poids">Poids (kg)</li>
            <li className="calories">Calories (kCal)</li>
        </ul>
    </div>
    <ResponsiveContainer width="100%" height="100%">
    <BarChart

    
      data={data}
      barSize={8}
      barGap={12}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3"   vertical={false} />
      <XAxis dataKey="index"   
                       
                       domain={['dataMin' , 'dataMax']}
                        tickLine={false}
                        stroke="#DEDEDE"
                        tick={{ fill: "#9B9EAC", fontFamily: "Roboto", fontWeight: 500, fontSize: 14 }}
                        height={40}
                        tickSize={25}
                       />
                    <YAxis
                    
                        domain={['dataMin ', 'dataMax ']}
                        dataKey="kilogram"
                        yAxisId="kilogram"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                         ticks={getYaxisData()}
                        tick={{ fill: "#9B9EAC", fontFamily: "Roboto", fontWeight: 500, fontSize: 14 }}
                        width={70}
                        tickSize={50}
                        
                    />
                    <YAxis
                          hide
                        yAxisId="calories"
                        domain={['dataMin - 100', 'dataMax + 100']}
                        dataKey="calories"
                        orientation="right"
                    />
      <Tooltip  wrapperStyle={{outline :"none"}} content={<Customtooltip/>} cursor={{ fill: '#E5E5E5' }} offset={40}/>

      <Bar dataKey="kilogram" yAxisId="kilogram" fill="#282D30"   radius={[4, 4, 0, 0]}  unit="kg" orientation={"right"}  />
      <Bar yAxisId="calories"
                        dataKey="calories"
                        radius={[4, 4, 0, 0]}
                        fill="#E60000"
                        unit="kCal" />
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
