import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { BiCategoryAlt } from "react-icons/bi";
import { PiStarFour } from "react-icons/pi";
import { IoMdTrendingUp } from "react-icons/io";
const data = [
    { metric: "Delivery", value: 82 },
    { metric: "Potential", value: 68 },
    { metric: "Skill Depth", value: 72 },
    { metric: "Engagement", value: 75 },
    { metric: "Mobility", value: 60 }
];
const Talent = () => {
    return (
        <div className='flex flex-col gap-2 px-4 py-2 justify-between w-full'>
            <div className='flex justify-between items-center w-full '>
                <div>
                    <p className='font-bold text-left text-md lg:text-lg'>
                        Performance & Talent Intelligence
                    </p>
                    <p className='font-semibold text-left text-gray-500 text-sm lg:text-md'>
                        Calibrated talent views that support workforce planning and performance management.
                    </p>
                </div>
                <div className='flex border-2 gap-2 border-gray-30 rounded-full px-2 py-1'>
                    <BiCategoryAlt className="w-5 h-5 lg:w-7 lg:h-7" />
                    <span className='text-sm lg:text-md'>Calibration-ready</span>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-2 w-full'>
                <div className='flex flex-col  gap-2 shadow-md rounded-md px-4 py-2  justify-start items-start lg:w-[50%]'>
                    <div className='flex flex-col items-start'>
                        <p className='font-bold text-sm lg:text-lg'>
                            Talent Signals Radar
                        </p>
                        <p className='font-semibold text-left text-gray-500 text-sm lg:text-md'>
                            Composite Indicators for leadership-ready narrative.
                        </p>
                    </div>
                    <div className="w-full h-60 lg:h-80 text-sm">
                        <ResponsiveContainer>
                            <RadarChart data={data}>
                                <PolarGrid />
                                <PolarAngleAxis
                                    dataKey="metric"
                                    tick={{ fill: "#6b7280", fontSize: 15 }}
                                />
                                <PolarRadiusAxis
                                    domain={[0, 100]}
                                    tickCount={4}
                                    angle={0}
                                    tick={{ fill: "#c3c5c8", fontSize: 20 }}
                                    axisLine={false}
                                />
                                <Radar
                                    dataKey="value"
                                    stroke="#3b82f6"
                                    fill="#3b82f6"
                                    fillOpacity={0.35}
                                />
                            </RadarChart>

                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='flex flex-col gap-2 px-4 py-2 shadow-md rounded-md lg:w-[50%]'>
                    <div>
                        <p className='text-left font-bold text-sm lg:text-lg'>
                            9-Box Talent Grid(Counts)
                        </p>
                        <p className='text-left text-gray-500 font-semibold text-sm lg:text-md'>
                            Potential vs performance distribution - supports talent reviews.
                        </p>
                    </div>
                    <div className='w-[full] max-w-xl rounded-xl border bg-white overflow-hidden text-sm lg:text-md '>
                        <div className='grid grid-cols-3 bg-gray-50 border-b'>
                            <p className='py-3 text-center text-sm font-medium'>Low Perf</p>
                            <p className='py-3 text-center text-sm font-medium'>Mid Perf</p>
                            <p className='py-3 text-center text-sm font-medium'>High Perf</p>
                        </div>
                        <div className='grid grid-cols-3 divide-x divide-y '>
                            <div className='flex flex-col items-center border justify-center py-3 lg:py-6 text-sm lg:text-md '>
                                <div className=' font-semibold text-gray-900' >
                                    6
                                </div>
                                <div className='text-sm text-gray-500'>
                                    employees
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center py-3 lg:py-6 text-sm lg:text-md '>
                                <div className=' font-semibold text-gray-900' >
                                    18
                                </div>
                                <div className='text-sm text-gray-500'>
                                    employees
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center py-3 lg:py-6  text-sm lg:text-md '>
                                <div className=' font-semibold text-gray-900' >
                                    22
                                </div>
                                <div className='text-sm text-gray-500'>
                                    employees
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 divide-x divide-y '>
                            <div className='flex flex-col items-center border justify-center py-3 lg:py-6 text-sm lg:text-md '>
                                <div className=' font-semibold text-gray-900' >
                                    9
                                </div>
                                <div className='text-sm text-gray-500'>
                                    employees
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center py-3 lg:py-6 text-sm lg:text-md '>
                                <div className=' font-semibold text-gray-900' >
                                    28
                                </div>
                                <div className='text-sm text-gray-500'>
                                    employees
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center py-3 lg:py-6 text-sm lg:text-md '>
                                <div className='font-semibold text-gray-900' >
                                    35
                                </div>
                                <div className='text-sm text-gray-500'>
                                    employees
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 divide-x divide-y '>
                            <div className='flex flex-col items-center border justify-center py-3 lg:py-6 text-sm lg:text-md '>
                                <div className=' font-semibold text-gray-900' >
                                    12
                                </div>
                                <div className='text-sm text-gray-500'>
                                    employees
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center py-3 lg:py-6 text-sm lg:text-md '>
                                <div className='font-semibold text-gray-900' >
                                    24
                                </div>
                                <div className='text-sm text-gray-500'>
                                    employees
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center py-3 lg:py-6 text-sm lg:text-md '>
                                <div className=' font-semibold text-gray-900' >
                                    16
                                </div>
                                <div className='text-sm text-gray-500'>
                                    employees
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-1 text-sm lg:text-md'>
                        <button className='flex gap-1 rounded-md px-2 py-1 shadow-md font-medium'>
                            <PiStarFour className="w-4 h-4 lg:w-6 lg:h-6" />
                            <span>
                                Create Calibration Notes
                            </span>
                        </button>
                        <button className='flex gap-1 rounded-md px-2 py-1 bg-black text-white font-medium'>
                            <IoMdTrendingUp className="w-4 h-4 lg:w-6 lg:h-6" />
                            <span>
                                Generate Talent Summary
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Talent