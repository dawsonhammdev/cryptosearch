import React from 'react'
import {Bar} from "react-chartjs-2"
import BackButton from "./BackButton"
// eslint-disable-next-line import/no-anonymous-default-export
function Chart() {

      return (

        <div className="bar-container">
            <div>
                <h1>Graph</h1>
            </div>
            <div className="bar-chart">
                <Bar
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