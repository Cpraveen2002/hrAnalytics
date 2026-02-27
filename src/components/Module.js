import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import { LuGitCompare } from "react-icons/lu";
import { IoMdTrendingUp } from "react-icons/io";
import { TbActivityHeartbeat } from "react-icons/tb";
import { PiGitForkLight } from "react-icons/pi";
import { CiDatabase, CiMenuKebab } from "react-icons/ci";
import { MdOutlineEventNote } from "react-icons/md";
const Module = () => {
    return (
        <div className='flex flex-col gap-2 shadow-sm px-4 py-3 rounded-xl md:w-full lg:w-[35%] justify-start items-start w-full mx-2 border-2 border-gray-30'>
            <p className='font-bold text-lg'>
                Product Modules
            </p>
            <p className='text-left text-gray-500 font-medium'>
                Designed for a global HR data-driven operating model.
            </p>
            <div className='grid grid-cols-4 gap-2 md:grid-cols-4 lg:grid-cols-1 w-full'>
                <div className='w-full flex  gap-2 justify-start items-center shadow-sm px-2 py-2 rounded-xl border-2 border-gray-30'>
                    <BiCategoryAlt className='w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 px-1 rounded-xl text-gray-600' />
                    <div className='flex flex-col justify-start items-start'>
                        <p className='font-semibold text-left'>
                            Executive Overview
                        </p>
                        <p className='text-left text-gray-500  font-semibold '>
                            KPIs + drill-down
                        </p>
                    </div>
                </div>
                <div className='w-full flex  gap-2 justify-start items-center shadow-sm px-2 py-2 rounded-xl border-2 border-gray-30'>
                    <LuGitCompare className='w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 px-1 rounded-xl text-gray-600' />
                    <div className='flex flex-col justify-start items-start'>
                        <p className=' font-semibold text-left'>
                            Workforce Planning
                        </p>
                        <p className='text-left text-gray-500 font-semibold '>
                            Scenarios + gaps
                        </p>
                    </div>
                </div>
                <div className='w-full flex  gap-2 justify-start items-center shadow-sm px-2 py-2 rounded-xl border-2 border-gray-30'>
                    <IoMdTrendingUp className='w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 px-1 rounded-xl text-gray-600' />
                    <div className='flex flex-col justify-start items-start'>
                        <p className='font-semibold text-left'>
                            Attrition & Risk
                        </p>
                        <p className='text-left text-gray-500 font-semibold'>
                            Watchlists + drivers
                        </p>
                    </div>
                </div>
                <div className='w-full flex  gap-2 justify-start items-center shadow-sm px-2 py-2 rounded-xl border-2 border-gray-30'>
                    <TbActivityHeartbeat className='w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 px-1 rounded-xl text-gray-600' />
                    <div className='flex flex-col justify-start items-start'>
                        <p className='font-semibold text-left'>
                            Performance & Talent
                        </p>
                        <p className='text-left text-gray-500 font-semibold'>
                            9-box + calibration
                        </p>
                    </div>
                </div>
                <div className='w-full flex  gap-2 justify-start items-center shadow-sm px-2 py-2 rounded-xl border-2 border-gray-30'>
                    <CiDatabase className='w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 px-1 rounded-xl text-gray-600' />
                    <div className='flex flex-col justify-start items-start'>
                        <p className=' font-semibold text-left'>
                            Data Governace
                        </p>
                        <p className='text-left text-gray-500 font-semibold'>
                            Integrity + audit
                        </p>
                    </div>
                </div>
                <div className='w-full flex  gap-2 justify-start items-center shadow-sm px-2 py-2 rounded-xl border-2 border-gray-30'>
                    <PiGitForkLight className='w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 px-1 rounded-xl text-gray-600' />
                    <div className='flex flex-col justify-start items-start'>
                        <p className='font-semibold text-left'>
                            Global HR Ops
                        </p>
                        <p className='text-gray-600 text-left font-semibold'>
                            Requests + SLA
                        </p>
                    </div>
                </div>
                <div className='w-full flex  gap-2 justify-start items-center shadowsm px-2 py-2 rounded-xl border-2 border-gray-30'>
                    < MdOutlineEventNote className='w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 px-1 rounded-xl text-gray-600' />
                    <div className='flex flex-col justify-start items-start'>
                        <p className='font-semibold text-left'>
                            Action Center
                        </p>
                        <p className='text-left text-gray-500 font-semibold '>
                            Approvals + playbooks
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module