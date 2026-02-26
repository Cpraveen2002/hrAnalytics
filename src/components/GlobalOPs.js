import React from 'react'
import { PiGitForkLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
const GlobalOPs = () => {
    return (
        <div className='flex flex-col gap-2 px-4 py-2 mt-5 justify-start items-start w-full '>
            <div className='flex w-full justify-between items-center'>
                <div>
                    <p className='font-bold text-sm lg:text-lg text-left'>
                        Global HR Ops Collaboration
                    </p>
                    <p className='text-left font-semibold text-gray-500 text-sm lg:text-md'>
                        Asunc operations across APAC, EMEA, Brazil - with US-timezone coverage and institutional context.
                    </p>
                </div>
                <button className='flex gap-2 font-semibold border-2 shadow-md px-2 rounded-full items-center'>
                    <PiGitForkLight className="w-5 h-5 lg:w-7 lg:h-7" />
                    <span className='text-sm lg:text-md'>Create Request</span>
                </button>
            </div>
            <div className='flex flex-col gap-4 border-2 mt-4 shadow-md rounded-xl px-4 py-2 w-full justify-start items-start'>
                <div className='flex justify-between items-center w-full font-semibold'>
                    <div>
                        <p className='font-bold text-sm lg:text-md text-left'>
                            Regional Requests Queue
                        </p>
                        <p className='text-left text-gray-500 font-semibold text-sm lg:text-md'>
                            Structured collabaration replacing email threads.
                        </p>
                    </div>
                    <div className='flex gap-2 rounded-full border-2 shadow-md items-center px-4 py-1'>
                        <CiClock2 className="w-4 h-4 lg:w-6 lg:h-6" />
                        <span className='text-sm lg:text-md'>
                            US TZ Ready
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-1 items-start  border-2 shadow-md rounded-xl w-full px-4 py-2'>
                    <div className='flex justify-between items-center w-full mt-2'>
                        <div className='flex gap-3 items-start'>
                            <p className='text-lg lg:text-xl'>
                                REQ-221
                            </p>
                            <span className='bg-red-500 font-semibold text-white px-3 py-1 rounded-full text-sm lg:text-md'>
                                Pending
                            </span>
                            <span className='border-2 shadow-md font-bold rounded-full px-3 py-1 text-sm lg:text-md'>
                                EMEA
                            </span>
                            <div className='flex items-center gap-2 font-bold bg-gray-200 px-3 py-1 rounded-full  text-sm lg:text-md'>
                                <CiClock2 className='w-5 h-5 lg:w-7 lg:h-7' />
                                <span>
                                    SLA 8h
                                </span>
                            </div>
                        </div>
                        <div className='hidden lg:flex gap-3'>
                            <button className='border-2 shadow-md px-4 py-1 rounded-md font-bold text-sm lg:text-md' >
                                Open
                            </button>
                            <button className='bg-black text-white px-4 py-1 rounded-md font-bold text-sm lg:text-md'>
                                Respond
                            </button>
                        </div>
                    </div>
                    <p className='text-md'>
                        Cost Validation
                    </p>
                    <div className='flex gap-1 w-full justify-between'>
                        <p className='text-left text-gray-500 text-sm lg:text-md'>
                            Confirm May cost deltas for R&D
                        </p>
                        <div className='flex gap-3 md:hidden lg:hidden'>
                            <button className='border-2 shadow-md px-4 py-1 rounded-md font-bold text-sm lg:text-md' >
                                Open
                            </button>
                            <button className='bg-black text-white px-4 py-1 rounded-md font-bold text-sm lg:text-md'>
                                Respond
                            </button>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-1 items-start  border-2 shadow-md rounded-xl w-full px-4 py-2'>
                    <div className='flex justify-between items-center w-full mt-2'>
                        <div className='flex gap-3 items-start'>
                            <p className='text-lg lg:text-xl'>
                                REQ-221
                            </p>
                            <span className='bg-red-500 font-semibold text-white px-3 py-1 rounded-full text-sm lg:text-md'>
                                Pending
                            </span>
                            <span className='border-2 shadow-md font-bold rounded-full px-3 py-1 text-sm lg:text-md'>
                                APAC
                            </span>
                            <div className='flex items-center gap-2 font-bold bg-gray-200 px-3 py-1 rounded-full  text-sm lg:text-md'>
                                <CiClock2 className='w-5 h-5 lg:w-7 lg:h-7' />
                                <span>
                                    SLA 8h
                                </span>
                            </div>
                        </div>
                        <div className='hidden lg:flex gap-3'>
                            <button className='border-2 shadow-md px-4 py-1 rounded-md font-bold text-sm lg:text-md' >
                                Open
                            </button>
                            <button className='bg-black text-white px-4 py-1 rounded-md font-bold text-sm lg:text-md'>
                                Respond
                            </button>
                        </div>
                    </div>
                    <p className='text-md'>
                        Hiring Plan
                    </p>
                    <div className='flex gap-1 w-full justify-between'>
                        <p className='text-left text-gray-500 text-sm lg:text-md'>
                            FY workforce plan revisions
                        </p>
                        <div className='flex gap-3 md:hidden lg:hidden'>
                            <button className='border-2 shadow-md px-4 py-1 rounded-md font-bold text-sm lg:text-md' >
                                Open
                            </button>
                            <button className='bg-black text-white px-4 py-1 rounded-md font-bold text-sm lg:text-md'>
                                Respond
                            </button>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-1 items-start  border-2 shadow-md rounded-xl w-full px-4 py-2'>
                    <div className='flex justify-between items-center w-full mt-2'>
                        <div className='flex gap-3 items-start'>
                            <p className='text-lg lg:text-xl'>
                                REQ-221
                            </p>
                            <span className='bg-red-500 font-semibold text-white px-3 py-1 rounded-full text-sm lg:text-md'>
                                Pending
                            </span>
                            <span className='border-2 shadow-md font-bold rounded-full px-3 py-1 text-sm lg:text-md'>
                                EMEA
                            </span>
                            <div className='flex items-center gap-2 font-bold bg-gray-200 px-3 py-1 rounded-full  text-sm lg:text-md'>
                                <CiClock2 className='w-5 h-5 lg:w-7 lg:h-7' />
                                <span>
                                    SLA 8h
                                </span>
                            </div>
                        </div>
                        <div className='hidden lg:flex gap-3'>
                            <button className='border-2 shadow-md px-4 py-1 rounded-md font-bold text-sm lg:text-md' >
                                Open
                            </button>
                            <button className='bg-black text-white px-4 py-1 rounded-md font-bold text-sm lg:text-md'>
                                Respond
                            </button>
                        </div>
                    </div>
                    <p className='text-md'>
                        Cost Validation
                    </p>
                    <div className='flex gap-1 w-full justify-between'>
                        <p className='text-left text-gray-500 text-sm lg:text-md'>
                            Confirm May cost deltas for R&D
                        </p>
                        <div className='flex gap-3 md:hidden lg:hidden'>
                            <button className='border-2 shadow-md px-4 py-1 rounded-md font-bold text-sm lg:text-md' >
                                Open
                            </button>
                            <button className='bg-black text-white px-4 py-1 rounded-md font-bold text-sm lg:text-md'>
                                Respond
                            </button>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-1 items-start  border-2 shadow-md rounded-xl w-full px-4 py-2'>
                    <div className='flex justify-between items-center w-full mt-2'>
                        <div className='flex gap-3 items-start'>
                            <p className='text-lg lg:text-xl'>
                                REQ-221
                            </p>
                            <span className='bg-red-500 font-semibold text-white px-3 py-1 rounded-full text-sm lg:text-md'>
                                Pending
                            </span>
                            <span className='border-2 shadow-md font-bold rounded-full px-3 py-1 text-sm lg:text-md'>
                                EMEA
                            </span>
                            <div className='flex items-center gap-2 font-bold bg-gray-200 px-3 py-1 rounded-full  text-sm lg:text-md'>
                                <CiClock2 className='w-5 h-5 lg:w-7 lg:h-7' />
                                <span>
                                    SLA 8h
                                </span>
                            </div>
                        </div>
                        <div className='hidden lg:flex gap-3'>
                            <button className='border-2 shadow-md px-4 py-1 rounded-md font-bold text-sm lg:text-md' >
                                Open
                            </button>
                            <button className='bg-black text-white px-4 py-1 rounded-md font-bold text-sm lg:text-md'>
                                Respond
                            </button>
                        </div>
                    </div>
                    <p className='text-md'>
                        Cost Validation
                    </p>
                    <div className='flex gap-1 w-full justify-between'>
                        <p className='text-left text-gray-500 text-sm lg:text-md'>
                            Confirm May cost deltas for R&D
                        </p>
                        <div className='flex gap-3 md:hidden lg:hidden'>
                            <button className='border-2 shadow-md px-4 py-1 rounded-md font-bold text-sm lg:text-md' >
                                Open
                            </button>
                            <button className='bg-black text-white px-4 py-1 rounded-md font-bold text-sm lg:text-md'>
                                Respond
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GlobalOPs