import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterChart = ({ inputarr }) => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            options: {
                indexAxis: 'x',
            },
            label: 'Scatter Chart Representation',
            data: [],
            backgroundColor: []
        }]
    });

    useEffect(() => {
        console.log("Scatter");
        updateChartData();
    }, [inputarr]);

    useEffect(() => {
        if (chartRef.current) {
            captureChart();
        }
    }, [chartRef.current]);

    const updateChartData = () => {
        // Limit to the latest 5 elements
        const latestData = inputarr.slice(-5);
        const colors = generateRandomColors(latestData.length);

        // Update chart data
        setChartData({
            labels: latestData.map(item => item.row1),
            datasets: [{
                options: {
                    indexAxis: 'x',
                },
                label: 'Scatter Chart Representation',
                data: latestData.map(item => item.row2),
                backgroundColor: colors
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
            <Scatter data={chartData} />
        </div>
    );
}
export default ScatterChart;
