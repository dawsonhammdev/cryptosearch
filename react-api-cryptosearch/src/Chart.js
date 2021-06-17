import React from 'react';
import {Line} from "react-chartjs-2";
import {Item} from "./BackButton";

function Chart() {

    

      return (

        <div className="bar-container">
             <Item />
            <div className="graph-title">
                <h1>Crypto-Graph</h1>
            </div>
            <div className="bar-chart">
                <Line
                    data={{
                        labels: ['Price', 'Market Cap'],
                        datasets: [
                            {
                                label: '# of votes',
                                data: [4,3],
                                backgroundColor: ['green']
                            },
                            {
                                label: "Quanity",
                                data: [1,2,3,4]
                            }
                        ]

                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxis: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
        
      );
}
export default Chart