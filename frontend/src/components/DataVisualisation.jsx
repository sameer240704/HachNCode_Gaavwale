import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import DoughnutChart from "../Charts/DoughnutChart";
import BubbleChart from "../Charts/BubbleChart";
import PieChart from "../Charts/PieChart";
import Excel from "./Excel";


const DataVisualisation = ({ inputarr }) => {
    const history = useNavigate();
    const [chart, setChart] = useState(null);

    const traveChart = (e) => {
        setChart(e.target.id);
        history('/' + e.target.id);
        console.log(chart);
    }

    const handleChart = (e) => {
        if (e.target.checked) {
            // Uncheck other checkboxes
            document.querySelectorAll('input[name="barChart"]').forEach((checkbox) => {
                if (checkbox !== e.target) {
                    checkbox.checked = false;
                }
            });

            setChart(e.target.id);
        } else {
            setChart(null);
        }
    };

    return (
        <div>
            <div className='flex flex-col w-screen h-screen p-10 justify-between items-center rounded-lg shadow-lg'>
                <div className="font-[Poppins] text-3xl text-center">Visualize Data with Charts</div>
                <div className='h-full w-screen mx-1 p-10 rounded-xl'>
                    <h1 className='font-[Poppins] font-semibold text-3xl  text-center'>Charts</h1>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="BarChart" onClick={traveChart}>
                        <input type="checkbox" id='BarChart' name="barChart" onClick={handleChart} />
                        <label htmlFor="barChart">Bar Chart</label><br />
                    </div>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="LineChart" onClick={traveChart}>
                        <input type="checkbox" id='LineChart' name="barChart" onClick={handleChart} />
                        <label htmlFor="lineChart">Line Chart</label><br />
                    </div>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="DoughnutChart" onClick={traveChart}>
                        <input type="checkbox" id='DoughnutChart' name="barChart" onClick={handleChart} />
                        <label htmlFor="doughnutChart">Doughnut Chart</label><br />
                    </div>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="BubbleChart" onClick={traveChart}>
                        <input type="checkbox" id='BubbleChart' name="barChart" onClick={handleChart} />
                        <label htmlFor="bubbleChart">Bubble Chart</label><br />
                    </div>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="PieChart" onClick={traveChart}>
                        <input type="checkbox" id='PieChart' name="barChart" onClick={handleChart} />
                        <label htmlFor="pieChart">Pie Chart</label><br />
                    </div>
                </div>
                {/* 
                <div className={`w-1/3 my-10 mx-2 text-center h-full flex justify-center items-center ${chart ? '' : 'hidden'}`}>
                    {chart === 'BarChart' && <BarChart inputarr={inputarr ? inputarr : null} />}
                    {chart === 'LineChart' && <LineChart inputarr={inputarr ? inputarr : null} />}
                    {chart === 'DoughnutChart' && <DoughnutChart inputarr={inputarr ? inputarr : null} />}
                    {chart === 'BubbleChart' && <BubbleChart inputarr={inputarr ? inputarr : null} />}
                    {chart === 'PieChart' && <PieChart inputarr={inputarr ? inputarr : null} />}
                </div> */}
            </div>
        </div>
    )
}

export default DataVisualisation