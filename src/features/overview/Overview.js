import React from 'react'
import { useState } from "react";
import { FiTarget } from "react-icons/fi";
import { LuHandCoins } from "react-icons/lu";
import { AiOutlineFileExcel, AiOutlineSafetyCertificate } from "react-icons/ai";
import { Pie, PieChart, Cell, Area, AreaChart, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Dialog from './Dialog';
import { useAnalyticsData } from '../../context/AnalyticsDataContext';
const COLORS = ["#ef4444", "#f59e0b", "#22c55e",];
const Overview = () => {
    const [open, setOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("APAC");
    const { data } = useAnalyticsData();
    const regionCards = data.overview.regionCards;
    const headcountByRegion = data.overview.headcountByRegion;
    const attritionTrend = data.overview.attritionTrend;
    const hiringVelocity = data.overview.hiringVelocity;
    const riskSegmentation = data.overview.riskSegmentation;
    const costOverlay = data.overview.costOverlay;
    const varianceNotes = data.overview.varianceNotes;
    const regionDrilldown = data.overview.regionDrilldown || [];
    const selectedRegionDrilldown = regionDrilldown.find((item) => item.region === selectedRegion) || regionDrilldown[0];
    return (
        <div className='flex flex-col justify-start items-start w-full gap-4'>
            <div className='gap-4 flex-col md:flex md:flex-row md:items-start lg:flex-row justify:start lg:justify-between items-start w-full'>
                <div className='flex gap-2 flex-col justify-start items-start '>
                    <p className='text-lg font-bold'>
                        Executive Overview
                    </p>
                    <p className='text-left text-gray-500 font-semibold'>
                        Global posture, certified numbers, and drills-downs for leadership + HR Ops.
                    </p>
                </div>
                <div className='flex flex-row justify-between lg:justify-end gap-3 mt-4'>
                    {/* <div className='flex gap-2 justify-start items-center shadow-sm px-4 py-1 rounded-xl border-2 border-gray-30'>
                        <FiAlertTriangle className='w-4 h-4 lg:w-6 lg:h-6' />
                        <p className='text-left font-semibold text-lg'>
                            View Alerts
                        </p>
                    </div> */}
                    <div className='flex gap-2 justify-start items-center shadow-sm border-2 border-gray-30 px-4 py-1 rounded-xl'>
                        <AiOutlineFileExcel className="w-4 h-4 lg:w-6 lg:h-6" />
                        <p className='text-left font-semibold text-lg'>
                            Open in Excel
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-2 w-full justify-start items-start'>
                {regionCards.map((region) => (
                    <button key={region.region} type='button' onClick={() => { setSelectedRegion(region.region); setOpen(true) }} className='flex flex-col gap-2 justify-start items-start shadow-sm border-2 border-gray-30 rounded-md px-4 py-4'>
                        <div className='flex flex-row justify-between items-start gap-4'>
                            <p className='text-lg font-bold'>
                                {region.region}
                            </p>
                            <div className='flex gap-1 justify-start items-center px-4 py-1 shadow-sm border-2 border-gray-30 rounded-xl'>
                                <FiTarget className="w-4 h-4 lg:w-6 lg:h-6" />
                                <p className='text-lg font-semibold text-left text-gray-600'>
                                    Insights
                                </p>
                            </div>
                        </div>
                        <p className='font-bold text-xl lg:text-2xl'>
                            {region.value}
                        </p>
                        <p className='text-gray-500 font-semibold text-lg'>
                            Open Roles: {region.openRoles}
                        </p>
                    </button>
                ))}
            </div>
            <Dialog open={open} onClose={() => setOpen(false)} drilldownData={selectedRegionDrilldown} />
            <div className=' lg:flex justify-start items-start gap-2 w-full'>
                <div className='lg:w-[50%] md:w-full flex flex-col gap-2 justify-start items-start shadow-sm border-2 border-gray-30 rounded-md px-4 py-4 '>
                    <p className='font-bold text-lg'>
                        Headcount by Region
                    </p>
                    <p className='font-semibold text-left text-gray-500 text-lg'>
                        Leadership view(drill-down available above)
                    </p>
                    <div className='w-full h-[200px] lg:h-[300px] text-lg font-semibold'>
                        <ResponsiveContainer>
                            <BarChart data={headcountByRegion}>
                                <XAxis
                                    dataKey="region"
                                    tick={{ fontSize: 12 }}
                                />
                                <YAxis tick={{ fontSize: 12 }} />
                                <Tooltip />
                                <Bar
                                    dataKey="value"
                                    fill="#020406ff"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='lg:w-[50%] md:w-full flex flex-col mt-2 gap-2 justify-start items-start shadow-sm border-2 border-gray-30 rounded-md px-4 py-4 lg:mt-0'>
                    <p className='font-bold text-lg'>
                        Attrition Trend
                    </p>
                    <p className='font-semibold text-left text-gray-500 text-lg'>
                        Workspace Stability signal
                    </p>
                    <div className='w-full h-[200px] lg:h-[300px] text-lg font-semibold'>
                        <ResponsiveContainer>
                            <LineChart data={attritionTrend}>

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
            <div className='lg:flex justify-start  gap-4 w-full'>
                <div className='lg:w-[1/3] md:w-full flex flex-col gap-2 justify-start items-start shadow-sm border-2 border-gray-30 rounded-md px-4 py-4 '>
                    <p className='font-bold text-lg'>
                        Hiring Velocity
                    </p>
                    <p className='font-semibold text-left text-gray-500 text-lg'>
                        Filled roles(trend)
                    </p>
                    <div className='w-full h-[200px] lg:h-[300px] text-lg font-semibold'>
                        <ResponsiveContainer>
                            <AreaChart data={hiringVelocity}>

                                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                                <YAxis tick={{ fontSize: 12 }} />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#06a2f5ff"
                                    fill="#7ec7e8ff"
                                    strokeWidth={3}
                                    fillOpacity={0.4}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='lg:w-[1/3] md:w-full flex flex-col gap-2 justify-start items-start shadow-sm border-2 border-gray-30 rounded-md px-4 py-4 mt-2 '>
                    <p className='font-bold text-lg'>
                        Risk Segmentation
                    </p>
                    <p className='font-semibold text-left text-gray-500 text-lg'>
                        Flight-risk distribution(mock model output.)
                    </p>
                    <div className='w-full h-[200px] lg:h-[300px] text-lg font-semibold'>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={riskSegmentation}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    innerRadius={0}
                                >
                                    {riskSegmentation.map((_, index) => (
                                        <Cell key={index} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='lg:w-[1/3] md:w-full flex flex-col gap-1 justify-start items-start shadow-sm border-2 border-gray-30 rounded-md px-4 py-4 mt-2'>
                    <div className='flex flex-row justify-between items-center gap-4 w-full'>
                        <div className='flex flex-col items-start justify-start '>
                            <p className='font-bold text-lg'>
                                Certified Numbers
                            </p>
                            <p className='text-left text-gray-500 font-semibold text-md'>
                                Governed & reconciled metrics for leadership.
                            </p>
                        </div>
                        <div className='flex gap-2 items-center font-bold shadow-sm border-2 border-gray-30 rounded-xl px-2'>
                            <AiOutlineSafetyCertificate className="w-4 h-4 lg:w-6 lg:h-6" />
                            <p className=''>
                                certified
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <p>
                            Workday-Planful
                        </p>
                        <p>
                            Aligned
                        </p>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <p>
                            Manager hierarchy
                        </p>
                        <p>
                            Validated
                        </p>
                    </div>
                    <div className='flex flex-row justify-between w-full '>
                        <p>
                            Duplicated
                        </p>
                        <p>
                            2 open
                        </p>
                    </div>
                    <div className='w-full shadow-sm border-2 border-gray-30  px-3 py-2 rounded-md flex flex-row justify-center items-center font-semibold'>
                        <p>
                            Open Governance Console
                        </p>
                    </div>
                </div>
            </div>
            <div className='lg:flex w-full gap-2 justify-start items-start'>
                <div className='lg:w-[1/2] md:w-full flex flex-col gap-1 justify-start items-start shadow-sm border-2 border-gray-30 rounded-md px-4 py-4 text-lg'>
                    <p className='font-bold text-lg'>
                        Workforce Cost Overlay(Planful-ready)
                    </p>
                    <p className='font-semibold text-left text-gray-500 text-lg'>
                        Budget vs Actual vs Forecast(in $M)
                    </p>
                    <div className='w-full h-[200px] lg:h-[300px] text-lg font-semibold'>
                        <ResponsiveContainer>
                            <BarChart data={costOverlay} barGap={4}>
                                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                                <YAxis tick={{ fontSize: 12 }} />
                                <Tooltip />

                                <Bar
                                    dataKey="budget"
                                    fill="#0b0b0bff"
                                    radius={[2, 2, 0, 0]}
                                />
                                <Bar
                                    dataKey="actual"
                                    fill="#070707ff"
                                    radius={[2, 2, 0, 0]}
                                />
                                <Bar
                                    dataKey="forecast"
                                    fill="#080808ff"
                                    radius={[2, 2, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start shadow-sm border-2 border-gray-30 rounded-md px-4 py-4 gap-2 lg:w-[1/2] md:w-full mt-2 lg:mt-0 '>
                    <div className='flex items-center justify-between w-full'>

                        <div className='flex flex-col items-start gap-1'>
                            <p className='font-bold text-lg lg:py-3'>
                                Variance Notes (Leadership-ready)
                            </p>
                            <p className='font-semibold text-left text-gray-500 text-lg'>
                                Close-the-loop documentation for monthly close.
                            </p>
                        </div>
                        <div className='flex gap-2 items-center font-bold shadow-sm border-2 border-gray-30 rounded-xl px-4 py-1 ml-4'>
                            <LuHandCoins className="w-4 h-4 lg:w-6 lg:h-6" />
                            <p className=''>Planful</p>
                        </div>
                    </div>
                    <table className="w-full ">
                        <thead>
                            <tr className="text-gray-400 text-left border-b">
                                <th className="py-2 lg:py-3">Month</th>
                                <th className="py-2 lg:py-3">Budget ($M)</th>
                                <th className="py-2 lg:py-3">Actual ($M)</th>
                                <th className="py-2 lg:py-3 text-right">Variance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {varianceNotes.map((item) => {
                                const variance = (item.actual - item.budget).toFixed(2);

                                return (
                                    <tr key={item.month} className="border-b last:border-b-0">
                                        <td className="py-2 lg:py-3">{item.month}</td>
                                        <td className="py-2 lg:py-3">{item.budget}</td>
                                        <td className="py-2 lg:py-3">{item.actual}</td>
                                        <td className="py-2 lg:py-3 text-right">
                                            <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded-full">
                                                +{variance}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <button className='w-full bg-black px-3 py-1 rounded-md flex flex-row justify-center items-center text-white font-bold'>
                        <p>
                            Add/ Approve Variance Notes
                        </p>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Overview