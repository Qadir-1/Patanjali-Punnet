/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Chart from "react-apexcharts";


const Graph = () => {
  return (
    <section>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <span className="tracking-widest text-slate-900 font-semibold uppercase ">
          Analatics Graph
        </span>
      </div>
      <div style={{ marginTop: "2%" }}>
      

        <Chart
          type="bar"
          width={1300}
          height={700}
          series={[
            {
              name: "Male",
              data: [412, 451, 478, 4578],
            },
            
          ]}
         style={{
            color : 'red'
         }}
          options={{}}
          xaxis ={{
            categories : ['Jan' , 'fev']
          }}
        ></Chart>
      </div>
    </section>
  );
};

export default HOC(Graph);
