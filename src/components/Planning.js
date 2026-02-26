import React, { useState } from 'react'
import { MdBookmarkAdd } from "react-icons/md";
import { LuGitCompare } from "react-icons/lu";
import { FiAlertTriangle } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const data = [
    { region: "Baseline", value: 1100 },
    { region: "Projected", value: 1100 },
    { region: "Demand", value: 1300 },
];
const Planning = () => {
    const [attrition, setAttrition] = useState(0);
    const [impact, setImpact] = useState(0);
    const [growth, setGrowth] = useState(0);
    return (
        <div className='flex flex-col gap-4 w-full justify-start items-start w-full relative'>
            <div className='flex flex-row gap-2 justify-between items-start w-full mt-2'>
                <div className='flex flex-col justify-start items-start '>
                    <p className='text-md lg:text-lg font-bold'>
                        Scenerio-Based Workforce Planning
                    </p>
                    <p className='text-left text-gray-500 font-semibold hidden'>
                        Model what-if outcomes for growth, freezes, and attrition shocks - explainable outputs for leadership.
                    </p>
                </div>
                <div className='flex gap-2 justify-start items-center  px-4  shadow-md rounded-xl'>
                    <LuGitCompare className="w-4 h-4 lg:w-6 lg:h-6" />
                    <span className='text-sm lg:text-md'>
                        Compare scenarios
                    </span>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-start gap-2 w-full'>
                <div className='flex flex-col justify-start items-start gap-3 shadow-md w-[full] lg:w-[40%] rounded-md px-3 py-2'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex flex-col items-start justify-start'>
                            <p className='font-bold  text-sm lg:text-lg'>
                                Scenario Controls
                            </p>
                            <p className='font-semibold text-gray-500 text-left text-sm lg:text-md'>
                                Adjust parameters and simulate outcomes
                            </p>
                        </div>
                        <span className='font-bold shadow-md rounded-lg px-2 text-sm lg:text-md'>
                            Editable
                        </span>
                    </div>
                    <div className='flex flex-col items-start w-full text-sm lg:text-md'>

                        <p>
                            Scenario name
                        </p>
                        <input type="text" placeholder='' className='shadow-md border-2 rounded-md px-8 py-2 w-full' />
                    </div>
                    <div className='flex flex-col gap-1 items-start w-full px-1 text-sm lg:text-md'>
                        <div className='flex justify-between w-full'>
                            <p className='font-bold'>
                                Attrition shock(monthly %)
                            </p>
                            <span className='shadow-md font-bold rounded-xl px-2'>
                                {attrition}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={attrition}
                            onChange={(e) => setAttrition(e.target.value)}
                            style={{ "--percent": `${attrition}%` }}
                            className="
                                    w-full
                                    h-2
                                    appearance-none
                                    rounded-full
                                    cursor-pointer
                                    focus:outline-none
                                    bg-[linear-gradient(to_right,#000_0%,#000_var(--percent),#e5e7eb_var(--percent),#e5e7eb_100%)]
                                    [&::-webkit-slider-thumb]:appearance-none
                                    [&::-webkit-slider-thumb]:h-4
                                    [&::-webkit-slider-thumb]:w-4
                                    [&::-webkit-slider-thumb]:rounded-full
                                    [&::-webkit-slider-thumb]:bg-white
                                    [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_#000]
                                    [&::-moz-range-thumb]:h-4
                                    [&::-moz-range-thumb]:w-4
                                    [&::-moz-range-thumb]:rounded-full
                                    [&::-moz-range-thumb]:bg-white
                                    [&::-moz-range-thumb]:border-2
                                    [&::-moz-range-thumb]:border-black"
                        />
                        <p className='text-left text-gray-500'>
                            Models additional attrition above baseline (e.g., restructuring, market churn).
                        </p>
                    </div>
                    <div className='flex flex-col gap-1 items-start w-full px-1 text-sm lg:text-md'>
                        <div className='flex justify-between w-full'>
                            <p className='font-bold'>
                                Hiring freeze impact( %)
                            </p>
                            <span className='shadow-md font-bold rounded-xl px-2'>
                                {impact}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={impact}
                            onChange={(e) => setImpact(e.target.value)}
                            style={{ "--percent": `${impact}%` }}
                            className="
                                    w-full
                                    h-2
                                    appearance-none
                                    rounded-full
                                    cursor-pointer
                                    focus:outline-none
                                    bg-[linear-gradient(to_right,#000_0%,#000_var(--percent),#e5e7eb_var(--percent),#e5e7eb_100%)]
                                    [&::-webkit-slider-thumb]:appearance-none
                                    [&::-webkit-slider-thumb]:h-4
                                    [&::-webkit-slider-thumb]:w-4
                                    [&::-webkit-slider-thumb]:rounded-full
                                    [&::-webkit-slider-thumb]:bg-white
                                    [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_#000]
                                    [&::-moz-range-thumb]:h-4
                                    [&::-moz-range-thumb]:w-4
                                    [&::-moz-range-thumb]:rounded-full
                                    [&::-moz-range-thumb]:bg-white
                                    [&::-moz-range-thumb]:border-2
                                    [&::-moz-range-thumb]:border-black"
                        />
                        <p className='text-left text-gray-500'>
                            Reduces fill rate; open roles remain longer and demand gap persists.
                        </p>
                    </div>
                    <div className='flex flex-col gap-1 items-start w-full px-1 text-sm lg:text-md'>
                        <div className='flex justify-between w-full'>
                            <p className='font-bold'>
                                Business growth demand( %)
                            </p>
                            <span className='shadow-md font-bold rounded-xl px-2'>
                                {growth}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={growth}
                            onChange={(e) => setGrowth(e.target.value)}
                            style={{ "--percent": `${growth}%` }}
                            className="
                                    w-full
                                    h-2
                                    appearance-none
                                    rounded-full
                                    cursor-pointer
                                    focus:outline-none
                                    bg-[linear-gradient(to_right,#000_0%,#000_var(--percent),#e5e7eb_var(--percent),#e5e7eb_100%)]
                                    [&::-webkit-slider-thumb]:appearance-none
                                    [&::-webkit-slider-thumb]:h-4
                                    [&::-webkit-slider-thumb]:w-4
                                    [&::-webkit-slider-thumb]:rounded-full
                                    [&::-webkit-slider-thumb]:bg-white
                                    [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_#000]
                                    [&::-moz-range-thumb]:h-4
                                    [&::-moz-range-thumb]:w-4
                                    [&::-moz-range-thumb]:rounded-full
                                    [&::-moz-range-thumb]:bg-white
                                    [&::-moz-range-thumb]:border-2
                                    [&::-moz-range-thumb]:border-black"
                        />
                        <p className='text-left text-gray-500'>
                            Increases required HC for expansion, new product lines, or volume growth.
                        </p>
                    </div>
                    <div className='flex gap-2 w-full text-sm lg:text-md'>
                        <button className='flex justify-center items-center gap-2 rounded-lg font-bold bg-black px-4 py-2 text-white w-1/2'>
                            <MdBookmarkAdd />
                            <span>
                                Save
                            </span>
                        </button>
                        <button className='flex justify-center items-center gap-2 rounded-lg font-bold px-4 py-2 w-1/2 shadow-md'>
                            <span>
                                Reset
                            </span>

                        </button>
                    </div>
                </div>
                <div className='flex flex-col w-[full] lg:w-[60%] gap-2'>
                    <div className='grid grid-cols-2 lg:grid-cols-3 w-full gap-2'>
                        <div className='flex flex-col justify-start gap-2 items-start rounded-lg shadow-md px-4 py-3 '>
                            <p className='text-sm lg:text-md'>
                                Projected HC
                            </p>
                            <p className='font-bold text-xl lg:text-2xl'>
                                1,170
                            </p>
                            <p className='text-left text-sm lg:text-md'>
                                After attrition shock
                            </p>
                        </div>
                        <div className='flex flex-col justify-start gap-2 items-start rounded-lg shadow-md px-4 py-3'>
                            <div className='flex flex-row justify-between items-center w-full'>
                                <p className='text-left text-sm lg:text-md'>
                                    HC Gap
                                </p>
                                <div className='flex bg-red-500 rounded-lg text-white gap-1 px-2 items-center'>
                                    <FiAlertTriangle className="w-4 h-4 lg:w-6 lg:h-6" />
                                    <span className='text-sm lg:text-md'>Attention</span>
                                </div>
                            </div>
                            <p className='font-bold text-xl lg:text-2xl'>
                                -117
                            </p>
                            <p className='text-left text-sm lg:text-md'>
                                Projected vs demand
                            </p>
                        </div>
                        <div className='flex flex-col justify-start gap-2 items-start rounded-lg shadow-md px-4 py-3'>
                            <p className='text-sm lg:text-md'>
                                Cost impact
                            </p>
                            <p className='font-bold text-xl lg:text-2xl'>
                                $0
                            </p>
                            <p className='text-left text-sm lg:text-md'>
                                Annualized vs baseline
                            </p>
                        </div>

                    </div>
                    <div className=' flex flex-col gap-2 justify-start items-start shadow-md rounded-md px-4 py-4 '>
                        <p className='font-bold text-sm lg:text-md'>
                            Baseline vs Projected vs Demand
                        </p>
                        <p className='font-semibold text-left text-gray-500 text-sm lg:text-md'>
                            Explainable comparison for leadership discussions.
                        </p>
                        <div className='w-full h-[200px] lg:h-[300px]'>
                            <ResponsiveContainer>
                                <BarChart data={data}>
                                    {/* <CartesianGrid vertical={false} strokeDasharray="3 3" /> */}
                                    <XAxis
                                        dataKey="region"
                                        tick={{ fontSize: 12 }}
                                    />
                                    <YAxis tick={{ fontSize: 12 }} />
                                    <Tooltip />
                                    <Bar
                                        dataKey="value"
                                        fill="#020406ff"
                                        radius={[2, 2, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className='shadow-md flex flex-col px-4 py-2 rounded-md mt-2 lg:mt-0'>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-col justify-start items-start'>
                                <p className='font-bold text-sm lg:text-md'>
                                    Saved Scenarios
                                </p>
                                <p className='text-left text-gray-600 text-sm lg:text-md' >
                                    Re-usable planning assumptions (institutional knowledge)
                                </p>
                            </div>
                            <span className='shadow-md rounded-xl px-1 text-sm lg:text-md'>
                                1
                            </span>
                        </div>
                        <div className='flex shadow-md mt-4 rounded-md px-4 py-2'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <div className='flex flex-col  justify-start items-start'>
                                    <p className='font-bold text-sm lg:text-md'>
                                        Q2 Plan-Base
                                    </p>
                                    <p className='text-left text-gray-500'>
                                        Attr+0% - Freeze 0% - Demand+10%
                                    </p>
                                </div>
                                <div className='flex flex-row items-center gap-2 shadow-md px-4 rounded-lg font-semibold text-sm lg:text-md'>
                                    <LuGitCompare className="w-4 h-4 lg:w-6 lg:h-6" />
                                    <span className='text-sm lg:text-md'>Load</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planning