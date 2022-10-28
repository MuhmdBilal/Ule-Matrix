import React from 'react';
import Chart from 'react-apexcharts'

const Total_Earning = (props) => {
   
    return (
       
                    <div className="card-body text-center px-0">
                      <h6>Total Earning</h6>
                      <div className="chart-container-10 d-flex align-items-center justify-content-center">
                        
            <Chart
                options={props.opt.options}
                series={props.opt.series}
                type="radialBar"
                height={'350'}
            />
            
            </div>
        </div>
        
     );
}

export default Total_Earning