import React from 'react'
import { PiGitForkLight } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { Pie, PieChart, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useAnalyticsData } from '../../context/AnalyticsDataContext';
const COLORS = ["#ef4444", "#f59e0b", "#22c55e",];
const Risk = () => {
    const { data } = useAnalyticsData();
    const pieChartData = data.risk.riskSegmentation;
    const linecChartData = data.risk.attritionTrend;
    const tableData = data.risk.retentionWatchlist;
    return (
        <div className='flex flex-col gap-3 px-4 py-3 w-full justify-start items-start '>
            <div className='flex md:flex-row lg:flex-row justify-between gap-2 w-full items-center'>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text left font-bold text-lg'>
                        Attrition & Retention Intelligence
                    </p>
                    <p className='text-left text-gray-500 font-semibold  '>
                        Early warning + root-cause signals-move from reactive exits to proactive retention.
                    </p>
                </div>
                <button className='flex gap-1 shadow-sm border-2 border-gray-30 rounded-xl px-2 py-1'>
                    <PiGitForkLight className="w-4 h-4 lg:w-6 lg:h-6" />
                    <span className='font-semibold'>Create Retention Action</span>
                </button>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row gap-2 w-full'>
                <div className='w-[75%] flex flex-col gap-2 justify-start items-start shadow-sm border-2 border-gray-30 rounded-md px-4 py-4 '>
                    <p className='font-bold'>
                        Risk Segmentation
                    </p>
                    <p className='font-semibold text-left text-gray-500'>
                        High/Med/Low flight-risk distribution
                    </p>
                    <div className='w-full h-[250px] lg:h-[280px] font-bold text-lg'>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={pieChartData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    innerRadius={0}
                                >
                                    {pieChartData.map((_, index) => (
                                        <Cell key={index} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='w-[75%] flex flex-col gap-2 justify-start items-start shadow-sm border-2 border-gray-30 rounded-md px-4 py-4 '>
                    <p className='font-bold'>
                        Attrition Trend
                    </p>
                    <p className='font-semibold text-left text-gray-500'>
                        Trend line for leadership review.
                    </p>
                    <div className='w-full h-[200px] lg:h-[280px] font-semibold text-lg'>
                        <ResponsiveContainer>
                            <LineChart data={linecChartData}>

                                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                                <YAxis tick={{ fontSize: 12 }} />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#3891c8ff"
                                    strokeWidth={2}
                                    dot={{ r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-start items-start shadow-sm border-2 border-gray-30 rounded-md w-full px-2 py-2'>
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <p className='text-left font-bold '>
                            Retention Watchlist (Confidential)
                        </p>
                        <p className='text-left text-gray-500 font-semibold'>
                            Filtered by region and search-shared only with authorized roles.
                        </p>
                    </div>
                    <div className='flex flex-row gap-2 justify-start items-center shadow-sm border-2 border-gray-30 rounded-md px-2 py-1'>
                        <AiOutlineSafetyCertificate className="w-4 h-4 lg:w-6 lg:h-6" />
                        <span className='font-semibold'>Access granted</span>
                    </div>
                </div>
                <div className='w-full'>
                    <table className=" font-semibold w-full">
                        <thead className=''>
                            <tr className="text-gray-400 border-b-2">
                                <th className="px-6 py-2">Role</th>
                                <th className="px-6 py-2">Region</th>
                                <th className="px-6 py-2">Team</th>
                                <th className="px-6 py-2">Tenure</th>
                                <th className="px-6 py-2">Performance</th>
                                <th className="px-6 py-2">Risk</th>
                                <th className="px-6 py-2">likely Driver</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row) => {
                                return (
                                    <tr key={`${row.role}-${row.region}-${row.team}`} className="border-b-2 last:border-b-0">
                                        <td className="">{row.role}</td>
                                        <td className="">{row.region}</td>
                                        <td className="">{row.team}</td>
                                        <td className="">{row.tenure}</td>
                                        <td className="">{row.performance}</td>
                                        <td className=" ">
                                            {row.risk === "High" && <span className="bg-red-600 font-bold text-white px-2 py-0.5 rounded-full">
                                                High
                                            </span>}
                                            {row.risk === "Med" && <span className="bg-gray-300 font-bold text-black  px-2 py-0.5 rounded-full">
                                                Med
                                            </span>}
                                        </td>
                                        <td className="py-4">
                                            {row.likelyDriver}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}

export default Risk