import React, { useState, useRef, useEffect } from 'react';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';
import DoughnutChart from '../components/Charts/DoughnutChart';
import BubbleChart from '../components/Charts/BubbleChart';
import PieChart from '../components/Charts/PieChart';
import * as XLSX from 'xlsx';
import { useSidebarState } from "../hooks/useSidebarState";
import { IoCloseSharp } from 'react-icons/io5';

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
    const { expanded } = useSidebarState();
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
        <div
            className="absolute top-0 px-10 py-12"
            style={{
                left: expanded ? "20vw" : "4vw",
                width: expanded ? "80vw" : "96vw",
            }}
        >
            <div className='w-auto rounded-xl p-7 flex flex-col'>
                <h1 className='py-2 text-2xl'>Data Visualisation</h1>
                <input
                    className='border-2 rounded p-2 mx-2 mt-4 focus:border-2 focus:border-blue-500 bg-inherit input-bordered w-full max-w-xs'
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
                <button className='absolute rounded-lg w-52 top-[100px] right-20 btn btn-block btn-sm mt-2 border border-slate-700 text-gray-800 bg-white hover:text-orange-300 border-none px-10 py-3' onClick={handleSubmit}>Add</button>
                <button className="absolute right-20 top-[160px] rounded-lg w-52 btn btn-block btn-sm mt-2 border border-slate-700 text-gray-800 bg-white hover:text-orange-300 border-none px-10 py-3" onClick={navigateChart}>Submit</button>
                <button className="absolute right-20 top-[220px] rounded-lg w-52 btn btn-block btn-sm mt-2 border border-slate-700 text-gray-800 bg-white hover:text-orange-300 border-none px-10 py-3" onClick={downloadSheet}>Download Sheet</button>
            </div>
            <div className='w-full h-full flex justify-between items-center'>
                
            <div className="p-4 w-full">
                <h1 className="text-center py-4 text-2xl">Data</h1>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inputarr.map((item, index) => (
                            <tr key={index}>
                                <td className="border p-2">{item.row1}</td>
                                <td className="border p-2">{item.row2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

                

                {modalState && (
                    <div className="modal bg-white h-screen w-screen fixed inset-0 bg-opacity-70 backdrop-blur-sm z-50 flex justify-center items-center">
                        <div className='size-4/5'>
                            <button className="absolute top-4 left-[95%]" onClick={closeModal}>
                                <IoCloseSharp className="h-10 w-10 text-black hover:text-red-700" />
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

