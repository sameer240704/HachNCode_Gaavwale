import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

const LineChart = ({ inputarr }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            label: 'Line Chart Representation',
            data: [],
            backgroundColor: [],
            cubicInterpolationMode: 'monotone'
        }]
    });

    useEffect(() => {
        // Update chart data whenever inputarr changes
        updateChartData();
    }, [inputarr]);

    const updateChartData = () => {
        // Limit to the latest 5 elements
        const latestData = inputarr.slice(-5);
        const colors = generateRandomColors(latestData.length);

        // Update chart data
        setChartData({
            labels: latestData.map(item => item.row1),
            datasets: [{
                label: 'Line Chart Representation',
                data: latestData.map(item => item.row2),
                backgroundColor: colors,
                cubicInterpolationMode: 'monotone'
            }]
        });
    };

    const generateRandomColors = (count) => {
        // Generate random RGB colors
        const colors = [];
        for (let i = 0; i < count; i++) {
            const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            colors.push(color);
        }
        return colors;
    };

    return (
        <div className='w-full h-full'>
            <Line data={chartData} />
        </div>
    );
}

export default LineChart