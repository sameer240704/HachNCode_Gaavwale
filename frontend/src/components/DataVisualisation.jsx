import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import { useSidebarState } from "../hooks/useSidebarState";

const DataVisualisation = ({ inputarr }) => {
    const { expanded } = useSidebarState();
    const history = useNavigate();
    const [chart, setChart] = useState(null);

    const traveChart = (e) => {
        setChart(e.target.id);
        history('/' + e.target.id);
        console.log(chart);
    }

    return (
        <div
            className="absolute top-0 px-10 py-12"
            style={{
                left: expanded ? "20vw" : "4vw",
                width: expanded ? "80vw" : "96vw",
            }}
        >
            <div className='flex flex-col w-3-5 h-screen p-10 justify-between items-center rounded-lg shadow-lg'>
                <div className="text-3xl text-center font-extrabold text-yellow-200 ">Visualize Data with Charts</div>
                <div className='h-full w-1/2 mx-1 p-1 rounded-xl'>
                    <h1 className='font-semibold text-3xl text-center my-0 py-0'>Charts</h1>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="BarChart" onClick={traveChart}>
                        <label htmlFor="barChart">Bar Chart</label><br />
                    </div>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="LineChart" onClick={traveChart}>
                        <label htmlFor="lineChart">Line Chart</label><br />
                    </div>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="DoughnutChart" onClick={traveChart}>
                        <label htmlFor="doughnutChart">Doughnut Chart</label><br />
                    </div>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="BubbleChart" onClick={traveChart}>
                        <label htmlFor="bubbleChart">Bubble Chart</label><br />
                    </div>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="PieChart" onClick={traveChart}>
                        <label htmlFor="pieChart">Pie Chart</label><br />
                    </div>
                    <div className="p-5 px-10 border m-2 rounded-md hover:shadow hover:shadow-white" id="ScatterChart" onClick={traveChart}>
                        <label htmlFor="scatterChart">Scatter Chart</label><br />
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