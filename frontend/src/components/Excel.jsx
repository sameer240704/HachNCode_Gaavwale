import React, { useState, useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import BarChart from '../Charts/BarChart';
import LineChart from '../Charts/LineChart';
import DoughnutChart from '../Charts/DoughnutChart';
import BubbleChart from '../Charts/BubbleChart';
import PieChart from '../Charts/PieChart';
import * as XLSX from 'xlsx';
import { IoCloseSharp } from 'react-icons/io5';
import DataVisualisation from './DataVisualisation';
import { useNavigate } from 'react-router-dom';

// const Chart = ({ inputarr }) => {
//     // Process inputarr data to prepare data for the chart
//     const chartData = {
//         labels: inputarr.map(item => item.row1),
//         datasets: [{
//             label: 'Row 2 Data',
//             data: inputarr.map(item => item.row2)
//         }]
//     };

//     return (
//         <div>
//             <Bar data={chartData} />
//         </div>
//     );
// };

const Excel = () => {
    const [inputarr, setInputarr] = useState([]);
    const [chart, setChart] = useState(null);
    const [row, setRow] = useState({ row1: '', row2: '' });
    const [modalState, setModalState] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRow({ ...row, [name]: value });
    };

    const handleSubmit = () => {
        if (!row.row1 || !row.row2) return;
        setInputarr([...inputarr, { row1: row.row1, row2: row.row2 }]);
        setRow({ row1: '', row2: '' });
    };

    const downloadSheet = () => {
        const worksheet = XLSX.utils.json_to_sheet(inputarr);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'data');
        XLSX.writeFile(workbook, 'data.xlsx');
    };

    const navigateChart = () => {
        const parts = window.location.pathname.split('/');
        const apiName = parts[parts.length - 1];
        setChart(apiName);
        setModalState(true);
        console.log(chart);
    }

    const closeModal = () => setModalState(false);

    return (
        <div className=' m-0 bg-gradient-to-br from-indigo-600 to-blue-300 w-screen h-screen flex flex-col justify-start items-center'>
            <div className='w-auto justify-center items-center rounded-xl bg-slate-100 p-7 flex flex-col'>
                <h1 className='text-center font-serif font-thin py-4 text-2xl'>Data Visualisation</h1>
                <input
                    className='border-2 rounded p-2 mx-2 focus:border-2 focus:border-blue-500 bg-inherit input-bordered w-full max-w-xs'
                    type="text"
                    name="row1"
                    value={row.row1}
                    onChange={handleChange}
                    placeholder='Name'
                />
                <br /><br />
                <input
                    className='border-2 rounded p-2 mx-2 focus:border-2 focus:border-blue-500 bg-inherit input-bordered w-full max-w-xs'
                    type="text"
                    name="row2"
                    value={row.row2}
                    onChange={handleChange}
                    placeholder='Value'
                />
                <br /><br />
                <button className='p-3 bg-inherit font-serif text-blue-400 hover:text-white text-lg font-semibold btn-ghost btn-outline hover:bg-indigo-400 rounded' onClick={handleSubmit}>Add!</button>
            </div>
            <div className='w-1/2 h-full flex justify-between items-center'>
                <div>
                    <h1 className='text-center font-serif font-thin py-4 text-2xl'>Data</h1>
                    <table className='table-auto w-full'>
                        <thead>
                            <tr>
                                <th className='border p-2'>Name</th>
                                <th className='border p-2'>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inputarr.map((item, index) => (
                                <tr key={index}>
                                    <td className='border p-2'>{item.row1}</td>
                                    <td className='border p-2'>{item.row2}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button onClick={navigateChart}>Submit</button>
                <button onClick={downloadSheet}>Download Sheet</button>

                {modalState && (
                    <div className="modal bg-white h-screen w-screen fixed inset-0 bg-opacity-70 backdrop-blur-sm z-50 flex justify-center items-center">
                        <div className='size-4/5'>
                            <button className="absolute top-4 left-[95%]" onClick={closeModal}>
                                <IoCloseSharp className="h-10 w-10 text-red-400 hover:text-red-700" />
                            </button>
                            {chart === 'BarChart' && <BarChart inputarr={inputarr ? inputarr : null} />}
                            {chart === 'LineChart' && <LineChart inputarr={inputarr ? inputarr : null} />}
                            {chart === 'DoughnutChart' && <DoughnutChart inputarr={inputarr ? inputarr : null} />}
                            {chart === 'BubbleChart' && <BubbleChart inputarr={inputarr ? inputarr : null} />}
                            {chart === 'PieChart' && <PieChart inputarr={inputarr ? inputarr : null} />}
                        </div>
                    </div>
                )}
            </div>


        </div >
    );
};

export default Excel;

